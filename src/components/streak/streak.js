import { checkChallenge, getAllChallenges, getAllGoals } from '../../services/goal-service';
// export async function lol() {
//     const challenges = await getAllGoals();
//     console.log(challenges[0].challenges[0].date)
//     return challenges
// }

export async function selectTasks() {
    const challenges = await getAllGoals();
    // console.log(challenges)
    // console.log("test")
    challenges.forEach(challenge => {
        challenge.challenges.forEach(challenge => {
            
            console.log(challenge)
        })
    });
}

export function colorStreak() {

}