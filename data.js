// Training Program Data Structure
const trainingProgram = {
    weeks: [
        {
            weekNumber: 1,
            days: [
                {
                    dayNumber: 1,
                    name: "Leg Strength",
                    focus: ["Leg strength", "Pull hyp", "Push endurance"],
                    exercises: [
                        {
                            name: "Back Squat",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 115,
                            targetRM: 130,
                            warmup: "20x8, 40x8, 60x8, 70x5, 90x2",
                            prescription: "TS: 100kg x 2 reps, BO: 80kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 100, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Weighted Pull Ups",
                            type: "Hypertrophy",
                            currentRM: 100,
                            targetRM: 105,
                            prescription: "85kg x 8 reps x 2-4 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Bench Press",
                            type: "Endurance",
                            currentRM: 75,
                            targetRM: 91,
                            prescription: "50kg x 12 reps x 2-4 sets",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 50, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 50, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 50, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 50, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                },
                {
                    dayNumber: 2,
                    name: "Push Strength",
                    focus: ["Push strength", "Leg hypertrophy", "Pull endurance"],
                    exercises: [
                        {
                            name: "Strict Press",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 55,
                            targetRM: 70,
                            warmup: "20x8, 30x5, 40x2, 50x2",
                            prescription: "TS: 55kg x 2 reps, BO: 45kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 55, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Back Squat",
                            type: "Hypertrophy",
                            currentRM: 115,
                            targetRM: 130,
                            prescription: "80kg x 8 reps x 2-4 sets",
                            targetRPE: 8,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Rows",
                            type: "Endurance",
                            currentRM: 60,
                            targetRM: 80,
                            prescription: "22.5kg x 12 reps x 2-4 sets",
                            targetRPE: 6,
                            targetRIR: 5,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                },
                {
                    dayNumber: 3,
                    name: "Pull Strength",
                    focus: ["Pull strength", "Push hypertrophy", "Leg endurance"],
                    exercises: [
                        {
                            name: "Weighted Pull Ups",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 100,
                            targetRM: 105,
                            warmup: "BW x 8, 10kg x 5, 15kg x 2",
                            prescription: "TS: 22.5kg x 2 reps, BO: 18.75kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 22.5, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Strict Press",
                            type: "Hypertrophy",
                            currentRM: 55,
                            targetRM: 70,
                            prescription: "40kg x 8 reps x 4 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Deadlift",
                            type: "Endurance",
                            currentRM: 140,
                            targetRM: 163,
                            prescription: "70kg x 12 reps x 3 sets",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            weekNumber: 2,
            days: [
                {
                    dayNumber: 1,
                    name: "Leg Strength",
                    focus: ["Leg strength", "Pull hyp", "Push endurance"],
                    exercises: [
                        {
                            name: "Back Squat",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 115,
                            targetRM: 130,
                            warmup: "20x8, 40x8, 60x8, 70x5, 90x2",
                            prescription: "TS: 100kg x 2 reps, BO: 80kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 100, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Weighted Pull Ups",
                            type: "Hypertrophy",
                            currentRM: 100,
                            targetRM: 105,
                            prescription: "85kg x 8 reps x 2-4 sets",
                            targetRPE: 9,
                            targetRIR: 1,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 85, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Bench Press",
                            type: "Endurance",
                            currentRM: 75,
                            targetRM: 91,
                            prescription: "52.5kg x 12 reps x 4 sets (last set may be 8 reps)",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 52.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 52.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 52.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 52.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                },
                {
                    dayNumber: 2,
                    name: "Push Strength",
                    focus: ["Push strength", "Leg hypertrophy", "Pull endurance"],
                    exercises: [
                        {
                            name: "Strict Press",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 55,
                            targetRM: 70,
                            warmup: "20x8, 30x5, 40x2, 50x2",
                            prescription: "TS: 55kg x 2 reps, BO: 45kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 55, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 45, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Back Squat",
                            type: "Hypertrophy",
                            currentRM: 115,
                            targetRM: 130,
                            prescription: "Light recovery: 80kg x 5 reps x 1 set",
                            targetRPE: 7,
                            targetRIR: 4,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 80, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Rows",
                            type: "Endurance",
                            currentRM: 60,
                            targetRM: 80,
                            prescription: "22.5kg x 12 reps x 2-4 sets",
                            targetRPE: 7,
                            targetRIR: 5,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 22.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                },
                {
                    dayNumber: 3,
                    name: "Pull Strength",
                    focus: ["Pull strength", "Push hypertrophy", "Leg endurance"],
                    exercises: [
                        {
                            name: "Weighted Pull Ups",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 100,
                            targetRM: 105,
                            warmup: "BW x 8, 10kg x 5, 15kg x 2",
                            prescription: "TS: 25kg x 2 reps, BO: 15kg x 5 reps x 3 sets",
                            targetRPE: 9,
                            targetRIR: 1,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 25, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 15, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 15, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 15, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Strict Press",
                            type: "Hypertrophy",
                            currentRM: 55,
                            targetRM: 70,
                            prescription: "40kg x 8 reps x 4 sets",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 40, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Deadlift",
                            type: "Endurance",
                            currentRM: 140,
                            targetRM: 163,
                            prescription: "70kg x 12 reps x 3 sets (skip if back healing)",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 70, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            weekNumber: 3,
            days: [
                {
                    dayNumber: 2,
                    name: "Push Strength",
                    focus: ["Push strength", "Leg hypertrophy", "Pull endurance"],
                    exercises: [
                        {
                            name: "Strict Press",
                            type: "Strength (Top Set + Backoff)",
                            currentRM: 57.5,
                            targetRM: 70,
                            warmup: "20x8, 30x5, 40x2, 50x2",
                            prescription: "TS: 57.5kg x 2 reps, BO: 47kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 57.5, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 47, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 47, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 47, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Back Squat",
                            type: "Hypertrophy",
                            currentRM: 115,
                            targetRM: 130,
                            prescription: "80kg x 8 reps if feeling strong",
                            targetRPE: 8,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 80, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Rows",
                            type: "Endurance",
                            currentRM: 60,
                            targetRM: 80,
                            prescription: "25kg x 12 reps x 2-4 sets (break between left and right)",
                            targetRPE: 7,
                            targetRIR: 4,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 25, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 25, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 25, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 25, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
