# Muscles - Training Tracker

A clean, simple web application for tracking your strength training program.

## Features

- **Daily Workout View**: See your prescribed exercises for the current training day
- **RPE & RIR Tracking**: Log your Rate of Perceived Effort and Reps In Reserve for each set
- **Progress Persistence**: All your training data is saved locally in your browser
- **Training History**: View your complete workout history
- **Week/Day Navigation**: Move forward and backward through your program
- **Responsive Design**: Works great on desktop and mobile devices

## How to Use

### Open the Application

1. Open `index.html` in any modern web browser
2. Or run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

### Training Workflow

1. **View Your Workout**: The app shows your current week, day, and prescribed exercises
2. **Complete Sets**: For each set:
   - Enter the actual weight you lifted (pre-filled with prescribed weight)
   - Enter the actual reps you completed
   - Enter your RPE (Rate of Perceived Effort, 1-10 scale)
   - Enter your RIR (Reps In Reserve, 0-5 typically)
   - Click "Save" to mark the set as complete
3. **Move to Next Day**: Click "Next Day →" when you've finished your workout
4. **View History**: Click "View History" to see all your completed workouts
5. **Reset**: Use "Reset Progress" to start over (this clears all data)

## Training Program Structure

The program follows a 3-day split:

- **Day 1**: Leg Strength (Back Squat, Pull Ups, Bench Press)
- **Day 2**: Push Strength (Strict Press, Back Squat, Rows)
- **Day 3**: Pull Strength (Weighted Pull Ups, Strict Press, Deadlift)

Each exercise has different stimulus goals:
- **Strength**: Top Set + Backoff sets (1-3 reps at 80-90%, then 6-12 reps at 70-85%)
- **Hypertrophy**: 2-4 sets of 8-10 reps at 65-85%
- **Endurance**: 2-4 sets of 10-12 reps at 40-60%

## Data Storage

All data is stored in your browser's localStorage. This means:
- ✅ Your progress persists between sessions
- ✅ No server required, works offline
- ⚠️ Data is browser-specific (won't sync across devices)
- ⚠️ Clearing browser data will delete your progress

## RPE & RIR Guide

**RPE (Rate of Perceived Effort)**:
- 1-3: Very easy, could do many more reps
- 4-6: Moderate effort
- 7-8: Hard, but sustainable
- 9: Very hard, 1-2 reps left
- 10: Maximum effort, no reps left

**RIR (Reps In Reserve)**:
- How many more reps you could have done
- 0 = Complete failure
- 1-2 = Very close to failure
- 3-4 = Moderate reserve
- 5+ = Plenty left in the tank