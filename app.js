// Training Tracker App Logic
class TrainingTracker {
    constructor() {
        this.currentWeek = this.loadProgress('currentWeek') || 1;
        this.currentDay = this.loadProgress('currentDay') || 1;
        this.history = this.loadProgress('history') || [];
        this.collapsedExercises = new Set();
        this.loadWorkoutData();
        this.init();
        this.collapseAllExercises();
    }

    init() {
        this.renderProgressSummary();
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

    loadWorkoutData() {
        const savedData = this.loadProgress('workoutData');
        if (savedData) {
            trainingProgram.weeks.forEach((week, weekIndex) => {
                week.days.forEach((day, dayIndex) => {
                    day.exercises.forEach((exercise, exerciseIndex) => {
                        const savedExercise = savedData?.weeks?.[weekIndex]?.days?.[dayIndex]?.exercises?.[exerciseIndex];
                        if (savedExercise) {
                            // Only load set completion data, NOT the weights/reps (keep new progressive values)
                            exercise.sets.forEach((set, setIndex) => {
                                const savedSet = savedExercise.sets[setIndex];
                                if (savedSet && savedSet.completed) {
                                    // Only restore completion status and actual logged values
                                    set.completed = savedSet.completed;
                                    set.actualWeight = savedSet.actualWeight;
                                    set.actualReps = savedSet.actualReps;
                                    set.rpe = savedSet.rpe;
                                    set.rir = savedSet.rir;
                                    // Keep the NEW prescribed weight/reps from updated program
                                }
                            });
                        }
                    });
                });
            });
        }
    }

    saveWorkoutData() {
        this.saveProgress('workoutData', trainingProgram);
    }

    getCurrentWorkout() {
        const week = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (!week) return null;
        const day = week.days.find(d => d.dayNumber === this.currentDay);
        return day;
    }

    renderProgressSummary() {
        const exerciseProgress = new Map();
        
        trainingProgram.weeks.forEach(week => {
            week.days.forEach(day => {
                day.exercises.forEach(exercise => {
                    if (!exerciseProgress.has(exercise.name)) {
                        exerciseProgress.set(exercise.name, {
                            current: exercise.currentRM,
                            target: exercise.targetRM,
                            gap: exercise.targetRM - exercise.currentRM
                        });
                    }
                });
            });
        });

        let html = '<div class="progress-cards">';
        exerciseProgress.forEach((progress, exerciseName) => {
            const percentage = (progress.current / progress.target) * 100;
            const color = percentage >= 90 ? '#4caf50' : percentage >= 70 ? '#ff9800' : '#667eea';
            
            html += `
                <div class="progress-card">
                    <div class="progress-header">
                        <span class="progress-exercise">${exerciseName}</span>
                        <span class="progress-gap">${progress.gap > 0 ? `-${progress.gap}kg` : '✓ Goal!'}</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${percentage}%; background: ${color}"></div>
                    </div>
                    <div class="progress-stats">
                        <span>${progress.current}kg</span>
                        <span class="progress-target">Target: ${progress.target}kg</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        document.getElementById('progressSummary').innerHTML = html;
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
            const isCollapsed = this.collapsedExercises.has(`${this.currentWeek}-${this.currentDay}-${exerciseIndex}`);
            const collapseIcon = isCollapsed ? '▶' : '▼';
            const completedSets = exercise.sets.filter(s => s.completed).length;
            const totalSets = exercise.sets.length;
            const progress = `${completedSets}/${totalSets}`;
            const progressClass = completedSets === totalSets ? 'complete' : completedSets > 0 ? 'partial' : '';
            
            html += `
                <div class="exercise-card ${isCollapsed ? 'collapsed' : ''}">
                    <div class="exercise-header" onclick="app.toggleExercise(${exerciseIndex})">
                        <div class="exercise-header-left">
                            <span class="collapse-icon">${collapseIcon}</span>
                            <h3>${exercise.name}</h3>
                            <span class="exercise-progress ${progressClass}">${progress}</span>
                        </div>
                        <div class="exercise-header-right">
                            <span class="exercise-type">${exercise.type}</span>
                        </div>
                    </div>
                    <div class="exercise-content" style="${isCollapsed ? 'display: none;' : ''}">
                        <div class="exercise-targets">
                            <div class="target-item">
                                <span class="target-label">Current 1RM:</span>
                                <span class="target-value">${exercise.currentRM}kg</span>
                            </div>
                            <div class="target-item">
                                <span class="target-label">Target 1RM:</span>
                                <span class="target-value target-highlight">${exercise.targetRM}kg</span>
                            </div>
                            <div class="target-item">
                                <span class="target-label">Gap:</span>
                                <span class="target-value ${exercise.targetRM - exercise.currentRM > 0 ? 'gap-negative' : 'gap-positive'}">
                                    ${exercise.targetRM - exercise.currentRM > 0 ? `-${exercise.targetRM - exercise.currentRM}kg` : '✓ Goal!'}
                                </span>
                            </div>
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
                </div>
            `;
        });

        document.getElementById('workoutContainer').innerHTML = html;
    }

    collapseAllExercises() {
        const workout = this.getCurrentWorkout();
        if (workout) {
            workout.exercises.forEach((_, exerciseIndex) => {
                const key = `${this.currentWeek}-${this.currentDay}-${exerciseIndex}`;
                this.collapsedExercises.add(key);
            });
        }
    }

    toggleExercise(exerciseIndex) {
        const key = `${this.currentWeek}-${this.currentDay}-${exerciseIndex}`;
        if (this.collapsedExercises.has(key)) {
            this.collapsedExercises.delete(key);
        } else {
            this.collapsedExercises.add(key);
        }
        this.renderWorkout();
    }

    renderSet(set, exerciseIndex, setIndex) {
        const isCompleted = set.completed;
        const completedClass = isCompleted ? 'completed' : '';
        
        // Get weight suggestion if this is the first set
        const workout = this.getCurrentWorkout();
        const exercise = workout.exercises[exerciseIndex];
        let suggestionHTML = '';
        if (setIndex === 0) {
            const suggested = this.suggestNextWeight(exercise, exercise.sets);
            if (suggested && !isCompleted) {
                suggestionHTML = `<span class="weight-suggestion">Suggest: ${suggested}kg</span>`;
            }
        }
        
        // Get target RPE/RIR for this specific set type
        const targetRPE = exercise.targetRPE || 8;
        const targetRIR = exercise.targetRIR || 2;
        
        // Show targets specific to set type
        let targetsHTML = `<span style="font-size: 0.8em; color: #888; margin-left: 8px;">Target: RPE ${targetRPE}, RIR ${targetRIR}</span>`;
        
        return `
            <div class="set-row ${completedClass}" data-exercise="${exerciseIndex}" data-set="${setIndex}">
                <div class="set-info">
                    <span class="set-type">${set.type} ${setIndex + 1}</span>
                    <span class="set-prescription">${set.weight}kg × ${set.reps} reps${suggestionHTML}${targetsHTML}</span>
                </div>
                <div class="set-inputs">
                    <div class="input-group">
                        <label>Weight (kg)</label>
                        <input type="number" 
                               class="input-weight" 
                               step="2.5" 
                               value="${set.actualWeight !== null ? set.actualWeight : set.weight}"
                               ${isCompleted ? '' : ''}>
                    </div>
                    <div class="input-group">
                        <label>Reps</label>
                        <input type="number" 
                               class="input-reps" 
                               value="${set.actualReps !== null ? set.actualReps : set.reps}"
                               ${isCompleted ? '' : ''}>
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
                               ${isCompleted ? '' : ''}>
                    </div>
                    <div class="input-group">
                        <label>RIR</label>
                        <input type="number" 
                               class="input-rir" 
                               step="1" 
                               min="0" 
                               value="${set.rir !== null ? set.rir : ''}"
                               placeholder="0-5"
                               ${isCompleted ? '' : ''}>
                    </div>
                    <button class="btn-complete ${isCompleted ? 'btn-completed' : 'btn-save'}" 
                            onclick="app.toggleSetComplete(${exerciseIndex}, ${setIndex})">
                        ${isCompleted ? '✓ Logged' : 'Save'}
                    </button>
                </div>
            </div>
        `;
    }

    toggleSetComplete(exerciseIndex, setIndex) {
        const workout = this.getCurrentWorkout();
        const set = workout.exercises[exerciseIndex].sets[setIndex];
        const exercise = workout.exercises[exerciseIndex];
        
        const setRow = document.querySelector(`[data-exercise="${exerciseIndex}"][data-set="${setIndex}"]`);
        const weight = parseFloat(setRow.querySelector('.input-weight').value);
        const reps = parseInt(setRow.querySelector('.input-reps').value);
        const rpe = parseFloat(setRow.querySelector('.input-rpe').value);
        const rir = parseInt(setRow.querySelector('.input-rir').value);

        if (!weight || !reps) {
            alert('Please enter weight and reps');
            return;
        }

        // Always save the data, whether marking complete or updating
        set.completed = true;
        set.actualWeight = weight;
        set.actualReps = reps;
        set.rpe = rpe || null;
        set.rir = rir || null;

        // Add to history
        this.addToHistory({
            date: new Date().toISOString(),
            week: this.currentWeek,
            day: this.currentDay,
            exercise: exercise.name,
            setType: set.type,
            weight: weight,
            reps: reps,
            rpe: rpe,
            rir: rir
        });

        // Save data and re-render WITHOUT changing day
        this.saveWorkoutData();
        this.saveProgress('history', this.history);
        this.renderWorkout();
        
        // Update PRs after logging
        this.updatePRs();
    }

    addToHistory(entry) {
        this.history.push(entry);
        this.saveProgress('history', this.history);
    }

    nextDay() {
        const currentWeekData = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (this.currentDay < currentWeekData.days.length) {
            this.currentDay++;
        } else {
            this.currentDay = 1;
            if (this.currentWeek < trainingProgram.weeks.length) {
                this.currentWeek++;
            } else {
                alert('You\'ve completed the program!');
                return;
            }
        }

        this.saveProgress('currentWeek', this.currentWeek);
        this.saveProgress('currentDay', this.currentDay);
        this.collapseAllExercises();
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
        this.collapseAllExercises();
        this.renderWorkout();
    }

    nextWeek() {
        if (this.currentWeek < trainingProgram.weeks.length) {
            this.currentWeek++;
            const newWeekData = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
            if (!newWeekData.days.find(d => d.dayNumber === this.currentDay)) {
                this.currentDay = 1;
            }
            this.saveProgress('currentWeek', this.currentWeek);
            this.saveProgress('currentDay', this.currentDay);
            this.collapseAllExercises();
            this.renderWorkout();
        } else {
            alert('Already at the last week');
        }
    }

    prevWeek() {
        if (this.currentWeek > 1) {
            this.currentWeek--;
            const newWeekData = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
            if (!newWeekData.days.find(d => d.dayNumber === this.currentDay)) {
                this.currentDay = 1;
            }
            this.saveProgress('currentWeek', this.currentWeek);
            this.saveProgress('currentDay', this.currentDay);
            this.collapseAllExercises();
            this.renderWorkout();
        } else {
            alert('Already at the first week');
        }
    }

    reset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.clear();
            location.reload();
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

    // 1RM Calculation using Epley formula
    calculate1RM(weight, reps) {
        if (reps === 1) return weight;
        return weight * (1 + reps / 30);
    }

    // Track Personal Records
    updatePRs() {
        const prs = this.loadProgress('personalRecords') || {};
        
        trainingProgram.weeks.forEach(week => {
            week.days.forEach(day => {
                day.exercises.forEach(exercise => {
                    exercise.sets.forEach(set => {
                        if (set.completed && set.actualWeight && set.actualReps) {
                            const estimated1RM = this.calculate1RM(set.actualWeight, set.actualReps);
                            
                            if (!prs[exercise.name] || estimated1RM > prs[exercise.name].value) {
                                prs[exercise.name] = {
                                    value: estimated1RM,
                                    weight: set.actualWeight,
                                    reps: set.actualReps,
                                    date: new Date().toISOString(),
                                    week: this.currentWeek,
                                    day: this.currentDay
                                };
                            }
                        }
                    });
                });
            });
        });
        
        this.saveProgress('personalRecords', prs);
        return prs;
    }

    // Smart Weight Suggestions
    suggestNextWeight(exercise, sets) {
        const completedSets = sets.filter(s => s.completed && s.rpe && s.rir !== null);
        if (completedSets.length === 0) return null;
        
        const avgRPE = completedSets.reduce((sum, s) => sum + s.rpe, 0) / completedSets.length;
        const avgRIR = completedSets.reduce((sum, s) => sum + s.rir, 0) / completedSets.length;
        const currentWeight = completedSets[0].actualWeight;
        
        // If RPE too low or RIR too high, suggest increase
        if (avgRPE < 7.5 && avgRIR >= 3) {
            return currentWeight + 2.5;
        } else if (avgRPE < 8 && avgRIR >= 2) {
            return currentWeight + 2.5;
        }
        
        return null;
    }

    // Weekly Summary
    showWeeklySummary() {
        const summary = this.calculateWeeklySummary();
        const modal = document.getElementById('summaryModal');
        const container = document.getElementById('summaryContainer');
        
        let html = `
            <div class="summary-stat">
                <h3>Total Volume This Week</h3>
                <div class="value">${summary.totalVolume.toFixed(0)} kg</div>
            </div>
            <div class="summary-stat">
                <h3>Workouts Completed</h3>
                <div class="value">${summary.workoutsCompleted} / ${summary.totalWorkouts}</div>
            </div>
            <div class="summary-stat">
                <h3>Average RPE</h3>
                <div class="value">${summary.avgRPE.toFixed(1)}</div>
            </div>
            <div class="summary-stat">
                <h3>Average RIR</h3>
                <div class="value">${summary.avgRIR.toFixed(1)}</div>
            </div>
            <div class="summary-stat">
                <h3>Personal Records</h3>
                <div class="value">${summary.newPRs}</div>
            </div>
        `;
        
        container.innerHTML = html;
        modal.style.display = 'block';
    }

    calculateWeeklySummary() {
        const week = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (!week) return { totalVolume: 0, workoutsCompleted: 0, totalWorkouts: 0, avgRPE: 0, avgRIR: 0, newPRs: 0 };
        
        let totalVolume = 0;
        let workoutsCompleted = 0;
        let allRPE = [];
        let allRIR = [];
        
        week.days.forEach(day => {
            let dayComplete = day.exercises.every(ex => ex.sets.some(s => s.completed));
            if (dayComplete) workoutsCompleted++;
            
            day.exercises.forEach(exercise => {
                exercise.sets.forEach(set => {
                    if (set.completed) {
                        totalVolume += (set.actualWeight || 0) * (set.actualReps || 0);
                        if (set.rpe) allRPE.push(set.rpe);
                        if (set.rir !== null) allRIR.push(set.rir);
                    }
                });
            });
        });
        
        const prs = this.loadProgress('personalRecords') || {};
        const newPRs = Object.values(prs).filter(pr => {
            const prDate = new Date(pr.date);
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            return prDate > weekAgo;
        }).length;
        
        return {
            totalVolume,
            workoutsCompleted,
            totalWorkouts: week.days.length,
            avgRPE: allRPE.length > 0 ? allRPE.reduce((a,b) => a+b, 0) / allRPE.length : 0,
            avgRIR: allRIR.length > 0 ? allRIR.reduce((a,b) => a+b, 0) / allRIR.length : 0,
            newPRs
        };
    }

    // Progress Charts
    showCharts() {
        const modal = document.getElementById('chartsModal');
        const container = document.getElementById('chartsContainer');
        
        // Get unique exercises
        const exercises = new Set();
        trainingProgram.weeks.forEach(week => {
            week.days.forEach(day => {
                day.exercises.forEach(ex => exercises.add(ex.name));
            });
        });
        
        container.innerHTML = '';
        
        exercises.forEach(exerciseName => {
            const chartData = this.getChartData(exerciseName);
            if (chartData.labels.length > 0) {
                const canvas = document.createElement('canvas');
                canvas.id = `chart-${exerciseName.replace(/\s/g, '-')}`;
                container.appendChild(canvas);
                
                new Chart(canvas, {
                    type: 'line',
                    data: {
                        labels: chartData.labels,
                        datasets: [{
                            label: exerciseName + ' (kg)',
                            data: chartData.weights,
                            borderColor: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                            tension: 0.3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: exerciseName
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            }
        });
        
        modal.style.display = 'block';
    }

    getChartData(exerciseName) {
        const labels = [];
        const weights = [];
        
        trainingProgram.weeks.forEach((week, weekIndex) => {
            week.days.forEach((day, dayIndex) => {
                const exercise = day.exercises.find(ex => ex.name === exerciseName);
                if (exercise) {
                    const completedSets = exercise.sets.filter(s => s.completed);
                    if (completedSets.length > 0) {
                        const maxWeight = Math.max(...completedSets.map(s => s.actualWeight || 0));
                        labels.push(`W${week.weekNumber}D${day.dayNumber}`);
                        weights.push(maxWeight);
                    }
                }
            });
        });
        
        return { labels, weights };
    }

    // Achievement System
    showAchievements() {
        const achievements = this.checkAchievements();
        const modal = document.getElementById('achievementsModal');
        const container = document.getElementById('achievementsContainer');
        
        let html = '<div style="display: flex; flex-wrap: wrap; justify-content: center;">';
        
        achievements.forEach(achievement => {
            const lockedClass = achievement.unlocked ? '' : 'locked';
            const icon = achievement.unlocked ? '🏆' : '🔒';
            html += `
                <div class="achievement-badge ${lockedClass}">
                    <div style="font-size: 2em; margin-bottom: 8px;">${icon}</div>
                    <div style="font-weight: 700;">${achievement.name}</div>
                    <div style="font-size: 0.85em; margin-top: 4px;">${achievement.description}</div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
        modal.style.display = 'block';
    }

    checkAchievements() {
        const totalSets = this.history.length;
        const prs = this.loadProgress('personalRecords') || {};
        const completedWeeks = this.currentWeek - 1;
        
        const achievements = [
            {
                name: "First Step",
                description: "Complete your first set",
                unlocked: totalSets >= 1
            },
            {
                name: "Getting Started",
                description: "Log 50 sets",
                unlocked: totalSets >= 50
            },
            {
                name: "Committed",
                description: "Log 100 sets",
                unlocked: totalSets >= 100
            },
            {
                name: "Dedicated",
                description: "Log 250 sets",
                unlocked: totalSets >= 250
            },
            {
                name: "Beast Mode",
                description: "Log 500 sets",
                unlocked: totalSets >= 500
            },
            {
                name: "Record Breaker",
                description: "Set your first PR",
                unlocked: Object.keys(prs).length >= 1
            },
            {
                name: "All Around",
                description: "Set PRs in all exercises",
                unlocked: Object.keys(prs).length >= 6
            },
            {
                name: "Month Strong",
                description: "Complete 4 weeks",
                unlocked: completedWeeks >= 4
            },
            {
                name: "Program Complete",
                description: "Finish all 12 weeks",
                unlocked: completedWeeks >= 12
            }
        ];
        
        return achievements;
    }

    // Export Data
    exportData() {
        const data = {
            currentWeek: this.currentWeek,
            currentDay: this.currentDay,
            history: this.history,
            workoutData: trainingProgram,
            personalRecords: this.loadProgress('personalRecords'),
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `training-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Data exported successfully!');
    }

    // Deload Week
    deloadWeek() {
        if (!confirm('Apply 20% deload to current week? This will reduce all prescribed weights.')) {
            return;
        }
        
        const week = trainingProgram.weeks.find(w => w.weekNumber === this.currentWeek);
        if (!week) return;
        
        week.days.forEach(day => {
            day.exercises.forEach(exercise => {
                exercise.sets.forEach(set => {
                    set.weight = Math.round(set.weight * 0.8 * 2) / 2; // 80%, rounded to nearest 2.5kg
                });
            });
        });
        
        this.saveWorkoutData();
        this.renderWorkout();
        alert('Deload applied! All weights reduced by 20%.');
    }

    // Dark Mode Toggle
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        this.saveProgress('darkMode', isDark);
        
        const btn = document.getElementById('darkModeToggle');
        btn.textContent = isDark ? '☀️' : '🌙';
    }

    initDarkMode() {
        const isDark = this.loadProgress('darkMode');
        if (isDark) {
            document.body.classList.add('dark-mode');
            document.getElementById('darkModeToggle').textContent = '☀️';
        }
    }

    // Swipe Navigation (disabled to prevent conflicts with zoom/scroll)
    initSwipeNavigation() {
        // Swipe navigation disabled - use arrow buttons instead
        // This prevents conflicts with pinch-zoom and scrolling
        
        // If you want to re-enable swipe navigation, uncomment below:
        /*
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartY = 0;
        
        document.addEventListener('touchstart', e => {
            if (e.touches.length === 1) { // Only single finger
                this.touchStartX = e.touches[0].screenX;
                this.touchStartY = e.touches[0].screenY;
            }
        }, { passive: true });
        
        document.addEventListener('touchend', e => {
            if (e.changedTouches.length === 1) { // Only single finger
                this.touchEndX = e.changedTouches[0].screenX;
                const touchEndY = e.changedTouches[0].screenY;
                
                // Only trigger if mostly horizontal swipe
                const horizontalDiff = Math.abs(this.touchStartX - this.touchEndX);
                const verticalDiff = Math.abs(this.touchStartY - touchEndY);
                
                if (horizontalDiff > verticalDiff * 2) {
                    this.handleSwipe();
                }
            }
        }, { passive: true });
        */
    }

    handleSwipe() {
        const swipeThreshold = 100;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextDay();
            } else {
                this.prevDay();
            }
        }
    }

    showMenu() {
        const modal = document.getElementById('menuModal');
        modal.style.display = 'block';
    }

    // Timer Functions
    startTimer() {
        if (!this.timerRunning) {
            this.timerRunning = true;
            const startBtn = document.getElementById('timerStart');
            startBtn.textContent = '⏸';
            startBtn.classList.add('running');
            
            this.timerInterval = setInterval(() => {
                this.timerSeconds++;
                this.updateTimerDisplay();
            }, 1000);
        } else {
            this.pauseTimer();
        }
    }

    pauseTimer() {
        this.timerRunning = false;
        const startBtn = document.getElementById('timerStart');
        startBtn.textContent = '▶';
        startBtn.classList.remove('running');
        startBtn.classList.add('paused');
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    stopTimer() {
        this.pauseTimer();
        this.timerSeconds = 0;
        this.updateTimerDisplay();
        const startBtn = document.getElementById('timerStart');
        startBtn.classList.remove('paused');
    }

    resetTimer() {
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }

    attachEventListeners() {
        document.getElementById('nextDayBtn').addEventListener('click', () => this.nextDay());
        document.getElementById('prevDayBtn').addEventListener('click', () => this.prevDay());
        document.getElementById('nextDayBtnTop').addEventListener('click', () => this.nextDay());
        document.getElementById('prevDayBtnTop').addEventListener('click', () => this.prevDay());
        document.getElementById('nextWeekBtnTop').addEventListener('click', () => this.nextWeek());
        document.getElementById('prevWeekBtnTop').addEventListener('click', () => this.prevWeek());
        document.getElementById('viewHistoryBtn').addEventListener('click', () => this.showHistory());
        document.getElementById('summaryBtn').addEventListener('click', () => this.showWeeklySummary());
        document.getElementById('chartsBtn').addEventListener('click', () => this.showCharts());
        document.getElementById('achievementsBtn').addEventListener('click', () => this.showAchievements());
        document.getElementById('darkModeToggle').addEventListener('click', () => this.toggleDarkMode());
        document.getElementById('menuBtn').addEventListener('click', () => this.showMenu());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportData());
        document.getElementById('deloadBtn').addEventListener('click', () => this.deloadWeek());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());

        // Close modals
        const modals = ['historyModal', 'summaryModal', 'chartsModal', 'achievementsModal', 'menuModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            const closeBtn = modal.querySelector('.close');
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Initialize features
        this.initDarkMode();
        this.initSwipeNavigation();
        this.updatePRs();
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TrainingTracker();
});
