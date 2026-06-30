// Training Tracker App Logic
class TrainingTracker {
    constructor() {
        this.currentWeek = this.loadProgress('currentWeek') || 1;
        this.currentDay = this.loadProgress('currentDay') || 1;
        this.history = this.loadProgress('history') || [];
        this.init();
    }

    init() {
        this.renderWorkout();
        this.attachEventListeners();
    }

    loadProgress(key) {
        const data = localStorage.getItem(`trainingTracker_${key}`);
        return data ? JSON.parse(data) : null;
    }

    saveProgress(key, value) {
        localStorage.setItem(`trainingTracker_${key}`, JSON.stringify(value));
    }

    getCurrentWorkout() {
        const week = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (!week) return null;
        const day = week.days.find(d => d.dayNumber === this.currentDay);
        return day;
    }

    renderWorkout() {
        const workout = this.getCurrentWorkout();
        
        if (!workout) {
            document.getElementById('workoutContainer').innerHTML = '<p>No workout found for this day.</p>';
            return;
        }

        document.getElementById('currentWeek').textContent = `Week ${this.currentWeek}`;
        document.getElementById('currentDay').textContent = `Day ${this.currentDay}: ${workout.name}`;

        let html = '';
        
        workout.exercises.forEach((exercise, exerciseIndex) => {
            html += `
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h3>${exercise.name}</h3>
                        <span class="exercise-type">${exercise.type}</span>
                    </div>
                    <div class="exercise-info">
                        <p><strong>Prescription:</strong> ${exercise.prescription}</p>
                        ${exercise.warmup ? `<p><strong>Warm-up:</strong> ${exercise.warmup}</p>` : ''}
                        <p><strong>Target RPE:</strong> ${exercise.targetRPE} | <strong>Target RIR:</strong> ${exercise.targetRIR}</p>
                        <p><strong>Rest:</strong> ${exercise.rest}</p>
                    </div>
                    <div class="sets-container">
                        ${exercise.sets.map((set, setIndex) => this.renderSet(set, exerciseIndex, setIndex)).join('')}
                    </div>
                </div>
            `;
        });

        document.getElementById('workoutContainer').innerHTML = html;
    }

    renderSet(set, exerciseIndex, setIndex) {
        const isCompleted = set.completed;
        const completedClass = isCompleted ? 'completed' : '';
        
        return `
            <div class="set-row ${completedClass}" data-exercise="${exerciseIndex}" data-set="${setIndex}">
                <div class="set-info">
                    <span class="set-type">${set.type} ${setIndex + 1}</span>
                    <span class="set-prescription">${set.weight}kg × ${set.reps} reps</span>
                </div>
                <div class="set-inputs">
                    <div class="input-group">
                        <label>Weight (kg)</label>
                        <input type="number" 
                               class="input-weight" 
                               step="2.5" 
                               value="${set.actualWeight !== null ? set.actualWeight : set.weight}"
                               ${isCompleted ? 'disabled' : ''}>
                    </div>
                    <div class="input-group">
                        <label>Reps</label>
                        <input type="number" 
                               class="input-reps" 
                               value="${set.actualReps !== null ? set.actualReps : set.reps}"
                               ${isCompleted ? 'disabled' : ''}>
                    </div>
                    <div class="input-group">
                        <label>RPE</label>
                        <input type="number" 
                               class="input-rpe" 
                               step="0.5" 
                               min="1" 
                               max="10" 
                               value="${set.rpe !== null ? set.rpe : ''}"
                               placeholder="1-10"
                               ${isCompleted ? 'disabled' : ''}>
                    </div>
                    <div class="input-group">
                        <label>RIR</label>
                        <input type="number" 
                               class="input-rir" 
                               step="1" 
                               min="0" 
                               value="${set.rir !== null ? set.rir : ''}"
                               placeholder="0-5"
                               ${isCompleted ? 'disabled' : ''}>
                    </div>
                    <button class="btn-complete ${isCompleted ? 'btn-undo' : 'btn-save'}" 
                            onclick="app.toggleSetComplete(${exerciseIndex}, ${setIndex})">
                        ${isCompleted ? '✓ Done' : 'Save'}
                    </button>
                </div>
            </div>
        `;
    }

    toggleSetComplete(exerciseIndex, setIndex) {
        const workout = this.getCurrentWorkout();
        const set = workout.exercises[exerciseIndex].sets[setIndex];
        
        if (set.completed) {
            set.completed = false;
            set.actualWeight = null;
            set.actualReps = null;
            set.rpe = null;
            set.rir = null;
        } else {
            const setRow = document.querySelector(`[data-exercise="${exerciseIndex}"][data-set="${setIndex}"]`);
            const weight = parseFloat(setRow.querySelector('.input-weight').value);
            const reps = parseInt(setRow.querySelector('.input-reps').value);
            const rpe = parseFloat(setRow.querySelector('.input-rpe').value);
            const rir = parseInt(setRow.querySelector('.input-rir').value);

            if (!weight || !reps) {
                alert('Please enter weight and reps');
                return;
            }

            set.completed = true;
            set.actualWeight = weight;
            set.actualReps = reps;
            set.rpe = rpe || null;
            set.rir = rir || null;

            this.addToHistory({
                date: new Date().toISOString(),
                week: this.currentWeek,
                day: this.currentDay,
                exercise: workout.exercises[exerciseIndex].name,
                setType: set.type,
                weight: weight,
                reps: reps,
                rpe: rpe,
                rir: rir
            });
        }

        this.renderWorkout();
    }

    addToHistory(entry) {
        this.history.push(entry);
        this.saveProgress('history', this.history);
    }

    nextDay() {
        const workout = this.getCurrentWorkout();
        
        const allSetsCompleted = workout.exercises.every(exercise => 
            exercise.sets.every(set => set.completed)
        );

        if (!allSetsCompleted) {
            if (!confirm('Not all sets are completed. Move to next day anyway?')) {
                return;
            }
        }

        const currentWeekData = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (this.currentDay < currentWeekData.days.length) {
            this.currentDay++;
        } else {
            this.currentDay = 1;
            if (this.currentWeek < trainingProgram.weeks.length) {
                this.currentWeek++;
            } else {
                alert('You\'ve completed the program! Consider resetting or continuing with Week ' + this.currentWeek);
                return;
            }
        }

        this.saveProgress('currentWeek', this.currentWeek);
        this.saveProgress('currentDay', this.currentDay);
        this.renderWorkout();
    }

    prevDay() {
        if (this.currentDay > 1) {
            this.currentDay--;
        } else {
            if (this.currentWeek > 1) {
                this.currentWeek--;
                const prevWeekData = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
                this.currentDay = prevWeekData.days.length;
            } else {
                alert('Already at the first day');
                return;
            }
        }

        this.saveProgress('currentWeek', this.currentWeek);
        this.saveProgress('currentDay', this.currentDay);
        this.renderWorkout();
    }

    reset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.clear();
            this.currentWeek = 1;
            this.currentDay = 1;
            this.history = [];
            
            trainingProgram.weeks.forEach(week => {
                week.days.forEach(day => {
                    day.exercises.forEach(exercise => {
                        exercise.sets.forEach(set => {
                            set.completed = false;
                            set.actualWeight = null;
                            set.actualReps = null;
                            set.rpe = null;
                            set.rir = null;
                        });
                    });
                });
            });
            
            this.renderWorkout();
        }
    }

    showHistory() {
        const modal = document.getElementById('historyModal');
        const container = document.getElementById('historyContainer');
        
        if (this.history.length === 0) {
            container.innerHTML = '<p>No training history yet.</p>';
        } else {
            let html = '<div class="history-list">';
            
            const groupedHistory = {};
            this.history.forEach(entry => {
                const date = new Date(entry.date).toLocaleDateString();
                if (!groupedHistory[date]) {
                    groupedHistory[date] = [];
                }
                groupedHistory[date].push(entry);
            });

            Object.keys(groupedHistory).reverse().forEach(date => {
                html += `<div class="history-date"><strong>${date}</strong></div>`;
                groupedHistory[date].forEach(entry => {
                    html += `
                        <div class="history-entry">
                            <span class="history-exercise">Week ${entry.week}, Day ${entry.day}: ${entry.exercise} (${entry.setType})</span>
                            <span class="history-details">${entry.weight}kg × ${entry.reps} reps</span>
                            ${entry.rpe ? `<span class="history-rpe">RPE: ${entry.rpe}</span>` : ''}
                            ${entry.rir !== null ? `<span class="history-rir">RIR: ${entry.rir}</span>` : ''}
                        </div>
                    `;
                });
            });
            
            html += '</div>';
            container.innerHTML = html;
        }
        
        modal.style.display = 'block';
    }

    attachEventListeners() {
        document.getElementById('nextDayBtn').addEventListener('click', () => this.nextDay());
        document.getElementById('prevDayBtn').addEventListener('click', () => this.prevDay());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('viewHistoryBtn').addEventListener('click', () => this.showHistory());

        const modal = document.getElementById('historyModal');
        const closeBtn = modal.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TrainingTracker();
});
