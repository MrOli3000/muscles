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
                                { type: "Top Set", weight: 100, reps: 2, completed: true, actualWeight: 100, actualReps: 2, rpe: 8, rir: 2 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7.5, rir: 4 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7.5, rir: 4 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7.5, rir: 5 }
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
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 8, rir: 2 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 8, rir: 2 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 8, rir: 1 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 8, rir: 1 }
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
                                { type: "Working", weight: 50, reps: 12, completed: true, actualWeight: 50, actualReps: 12, rpe: 6.5, rir: 6 },
                                { type: "Working", weight: 50, reps: 12, completed: true, actualWeight: 50, actualReps: 12, rpe: 6.5, rir: 6 },
                                { type: "Working", weight: 50, reps: 12, completed: true, actualWeight: 50, actualReps: 12, rpe: 6.5, rir: 5 },
                                { type: "Working", weight: 50, reps: 12, completed: true, actualWeight: 50, actualReps: 12, rpe: 7, rir: 5 }
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
                                { type: "Top Set", weight: 55, reps: 2, completed: true, actualWeight: 55, actualReps: 2, rpe: 8, rir: 2 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 }
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
                                { type: "Working", weight: 80, reps: 8, completed: true, actualWeight: 80, actualReps: 8, rpe: 8, rir: 3 },
                                { type: "Working", weight: 80, reps: 8, completed: true, actualWeight: 80, actualReps: 8, rpe: 8, rir: 3 },
                                { type: "Working", weight: 80, reps: 8, completed: true, actualWeight: 80, actualReps: 8, rpe: 8, rir: 3 },
                                { type: "Working", weight: 80, reps: 8, completed: true, actualWeight: 80, actualReps: 8, rpe: 8, rir: 3 }
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
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 6, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 6, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 6, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 6, rir: 5 }
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
                                { type: "Top Set", weight: 22.5, reps: 2, completed: true, actualWeight: 22.5, actualReps: 2, rpe: 7, rir: 3 },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: true, actualWeight: 18.75, actualReps: 5, rpe: 8.5, rir: 1 },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: true, actualWeight: 18.75, actualReps: 5, rpe: 8.5, rir: 2 },
                                { type: "Backoff", weight: 18.75, reps: 5, completed: true, actualWeight: 18.75, actualReps: 5, rpe: 8.5, rir: 2 }
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
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 8, rir: 2 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 8, rir: 2 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 8, rir: 1 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 8, rir: 1 }
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
                                { type: "Working", weight: 70, reps: 12, completed: true, actualWeight: 70, actualReps: 12, rpe: 7, rir: 3 },
                                { type: "Working", weight: 70, reps: 12, completed: true, actualWeight: 70, actualReps: 12, rpe: 7, rir: 3 },
                                { type: "Working", weight: 70, reps: 12, completed: true, actualWeight: 70, actualReps: 12, rpe: 7, rir: 3 }
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
                                { type: "Top Set", weight: 100, reps: 2, completed: true, actualWeight: 100, actualReps: 2, rpe: 8, rir: 2 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7, rir: 3 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7, rir: 3 },
                                { type: "Backoff", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7, rir: 4 }
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
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 9, rir: 1 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 9, rir: 1 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 9, rir: 1 },
                                { type: "Working", weight: 85, reps: 8, completed: true, actualWeight: 85, actualReps: 8, rpe: 9, rir: 1 }
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
                                { type: "Working", weight: 52.5, reps: 12, completed: true, actualWeight: 52.5, actualReps: 12, rpe: 7, rir: 3 },
                                { type: "Working", weight: 52.5, reps: 12, completed: true, actualWeight: 52.5, actualReps: 12, rpe: 7, rir: 3 },
                                { type: "Working", weight: 52.5, reps: 12, completed: true, actualWeight: 52.5, actualReps: 12, rpe: 7, rir: 3 },
                                { type: "Working", weight: 52.5, reps: 8, completed: true, actualWeight: 52.5, actualReps: 8, rpe: 7, rir: 3 }
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
                                { type: "Top Set", weight: 55, reps: 2, completed: true, actualWeight: 55, actualReps: 2, rpe: 8, rir: 2 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 },
                                { type: "Backoff", weight: 45, reps: 5, completed: true, actualWeight: 45, actualReps: 5, rpe: 7.5, rir: 3 }
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
                                { type: "Working", weight: 80, reps: 5, completed: true, actualWeight: 80, actualReps: 5, rpe: 7, rir: 4 }
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
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 7, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 7, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 7, rir: 5 },
                                { type: "Working", weight: 22.5, reps: 12, completed: true, actualWeight: 22.5, actualReps: 12, rpe: 7, rir: 5 }
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
                                { type: "Top Set", weight: 25, reps: 2, completed: true, actualWeight: 25, actualReps: 2, rpe: 9, rir: 1 },
                                { type: "Backoff", weight: 15, reps: 5, completed: true, actualWeight: 15, actualReps: 5, rpe: 7.5, rir: 2 },
                                { type: "Backoff", weight: 15, reps: 5, completed: true, actualWeight: 15, actualReps: 5, rpe: 7.5, rir: 3 },
                                { type: "Backoff", weight: 15, reps: 5, completed: true, actualWeight: 15, actualReps: 5, rpe: 7.5, rir: 3 }
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
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 7, rir: 3 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 7, rir: 3 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 7, rir: 3 },
                                { type: "Working", weight: 40, reps: 8, completed: true, actualWeight: 40, actualReps: 8, rpe: 7, rir: 3 }
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
                            prescription: "TS: 102.5kg x 2 reps, BO: 82.5kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 102.5, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 82.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 82.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 82.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Weighted Pull Ups",
                            type: "Hypertrophy",
                            currentRM: 100,
                            targetRM: 105,
                            prescription: "87.5kg x 8 reps x 2-4 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 87.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 87.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 87.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 87.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Bench Press",
                            type: "Endurance",
                            currentRM: 75,
                            targetRM: 91,
                            prescription: "55kg x 12 reps x 4 sets",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 55, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 55, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 55, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 55, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
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
                            prescription: "TS: 27.5kg x 2 reps, BO: 17.5kg x 5 reps x 3 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "3-5 min after top set, 2-3 min between backoff sets",
                            sets: [
                                { type: "Top Set", weight: 27.5, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 17.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 17.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Backoff", weight: 17.5, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Strict Press",
                            type: "Hypertrophy",
                            currentRM: 57.5,
                            targetRM: 70,
                            prescription: "42.5kg x 8 reps x 4 sets",
                            targetRPE: 8,
                            targetRIR: 2,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 42.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 42.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 42.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 42.5, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        },
                        {
                            name: "Deadlift",
                            type: "Endurance",
                            currentRM: 140,
                            targetRM: 163,
                            prescription: "72.5kg x 12 reps x 3 sets",
                            targetRPE: 7,
                            targetRIR: 3,
                            rest: "2-3 mins",
                            sets: [
                                { type: "Working", weight: 72.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 72.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                                { type: "Working", weight: 72.5, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Generate weeks 4-12 with progressive overload
for (let week = 4; week <= 12; week++) {
    const weekData = {
        weekNumber: week,
        days: []
    };
    
    // Calculate weight progression (2.5kg increase every 2 weeks)
    const weeksSinceStart = week - 1;
    const squatIncrement = Math.floor(weeksSinceStart / 2) * 2.5;
    const pullUpIncrement = Math.floor(weeksSinceStart / 3) * 2.5;
    const benchIncrement = Math.floor(weeksSinceStart / 3) * 2.5;
    const pressIncrement = Math.floor(weeksSinceStart / 2) * 2;
    const deadliftIncrement = Math.floor(weeksSinceStart / 3) * 2.5;
    const rowIncrement = Math.floor(weeksSinceStart / 4) * 2;
    
    // Day 1: Leg Strength
    weekData.days.push({
        dayNumber: 1,
        name: "Leg Strength",
        focus: ["Leg strength", "Pull hyp", "Push endurance"],
        exercises: [
            {
                name: "Back Squat",
                type: "Strength (Top Set + Backoff)",
                currentRM: 115 + squatIncrement,
                targetRM: 130,
                warmup: "20x8, 40x8, 60x8, 70x5, 90x2",
                prescription: `TS: ${100 + squatIncrement}kg x 2, BO: ${80 + squatIncrement}kg x 5 x 3`,
                targetRPE: 8,
                targetRIR: 2,
                rest: "3-5 min after top set, 2-3 min between backoff sets",
                sets: [
                    { type: "Top Set", weight: 100 + squatIncrement, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 80 + squatIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 80 + squatIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 80 + squatIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Weighted Pull Ups",
                type: "Hypertrophy",
                currentRM: 100 + pullUpIncrement,
                targetRM: 105,
                prescription: `${85 + pullUpIncrement}kg x 8 x 2-4`,
                targetRPE: 8,
                targetRIR: 2,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 85 + pullUpIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 85 + pullUpIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 85 + pullUpIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 85 + pullUpIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Bench Press",
                type: "Endurance",
                currentRM: 75 + benchIncrement,
                targetRM: 91,
                prescription: `${50 + benchIncrement}kg x 12 x 4`,
                targetRPE: 7,
                targetRIR: 3,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 50 + benchIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 50 + benchIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 50 + benchIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 50 + benchIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            }
        ]
    });
    
    // Day 2: Push Strength
    weekData.days.push({
        dayNumber: 2,
        name: "Push Strength",
        focus: ["Push strength", "Leg hypertrophy", "Pull endurance"],
        exercises: [
            {
                name: "Strict Press",
                type: "Strength (Top Set + Backoff)",
                currentRM: 55 + pressIncrement,
                targetRM: 70,
                warmup: "20x8, 30x5, 40x2, 50x2",
                prescription: `TS: ${55 + pressIncrement}kg x 2, BO: ${45 + pressIncrement}kg x 5 x 3`,
                targetRPE: 8,
                targetRIR: 2,
                rest: "3-5 min after top set, 2-3 min between backoff sets",
                sets: [
                    { type: "Top Set", weight: 55 + pressIncrement, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 45 + pressIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 45 + pressIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 45 + pressIncrement, reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Back Squat",
                type: "Hypertrophy",
                currentRM: 115 + squatIncrement,
                targetRM: 130,
                prescription: `${80 + squatIncrement}kg x 8 x 3-4`,
                targetRPE: 8,
                targetRIR: 3,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 80 + squatIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 80 + squatIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 80 + squatIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Rows",
                type: "Endurance",
                currentRM: 60 + rowIncrement,
                targetRM: 80,
                prescription: `${22.5 + rowIncrement}kg x 12 x 4`,
                targetRPE: 7,
                targetRIR: 5,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 22.5 + rowIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 22.5 + rowIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 22.5 + rowIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 22.5 + rowIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            }
        ]
    });
    
    // Day 3: Pull Strength
    weekData.days.push({
        dayNumber: 3,
        name: "Pull Strength",
        focus: ["Pull strength", "Push hypertrophy", "Leg endurance"],
        exercises: [
            {
                name: "Weighted Pull Ups",
                type: "Strength (Top Set + Backoff)",
                currentRM: 100 + pullUpIncrement,
                targetRM: 105,
                warmup: "BW x 8, 10kg x 5, 15kg x 2",
                prescription: `TS: ${22.5 + pullUpIncrement}kg x 2, BO: ${15 + Math.floor(pullUpIncrement * 0.8)}kg x 5 x 3`,
                targetRPE: 8,
                targetRIR: 2,
                rest: "3-5 min after top set, 2-3 min between backoff sets",
                sets: [
                    { type: "Top Set", weight: 22.5 + pullUpIncrement, reps: 2, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 15 + Math.floor(pullUpIncrement * 0.8), reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 15 + Math.floor(pullUpIncrement * 0.8), reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Backoff", weight: 15 + Math.floor(pullUpIncrement * 0.8), reps: 5, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Strict Press",
                type: "Hypertrophy",
                currentRM: 55 + pressIncrement,
                targetRM: 70,
                prescription: `${40 + pressIncrement}kg x 8 x 4`,
                targetRPE: 8,
                targetRIR: 2,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 40 + pressIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 40 + pressIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 40 + pressIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 40 + pressIncrement, reps: 8, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            },
            {
                name: "Deadlift",
                type: "Endurance",
                currentRM: 140 + deadliftIncrement,
                targetRM: 163,
                prescription: `${70 + deadliftIncrement}kg x 12 x 3`,
                targetRPE: 7,
                targetRIR: 3,
                rest: "2-3 mins",
                sets: [
                    { type: "Working", weight: 70 + deadliftIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 70 + deadliftIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null },
                    { type: "Working", weight: 70 + deadliftIncrement, reps: 12, completed: false, actualWeight: null, actualReps: null, rpe: null, rir: null }
                ]
            }
        ]
    });
    
    trainingProgram.weeks.push(weekData);
}
