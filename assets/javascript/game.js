//declaring variables at the start

let resetButton = document.querySelector("#reset-button");
let resetCounter = document.querySelector("#num-resets");

let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamOneShootButton = document.querySelector("#teamone-shoot-button");

let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

//creating a function that determines if a shot is a goal based on RNG
let goalChance = 0;
function goalChanceGenerator() {
  return Math.floor(Math.random() * 2);
}

resetButton.addEventListener("click", function () {
  console.log("reset button clicked");
  //js for the reset button to add to the reset counter
  let newNumOfResets = Number(resetCounter.innerHTML) + 1;
  resetCounter.innerHTML = newNumOfResets;
  //and to set goals and shot back to 0
  teamOneNumGoals.innerHTML = 0;
  teamOneNumShots.innerHTML = 0;
  teamTwoNumGoals.innerHTML = 0;
  teamTwoNumShots.innerHTML = 0;
});

teamOneShootButton.addEventListener("click", function () {
  console.log("Team one takes a shot!");

  //add to the counter for the number of shot from team one
  let newTeamoneshotnum = Number(teamOneNumShots.innerHTML) + 1;
  teamOneNumShots.innerHTML = newTeamoneshotnum;

  //call the function for the RNG to determing if the shot is a goal
  goalChance = goalChanceGenerator();
  console.log(goalChance);
  //use the RNG to determin if theshot was a goal
  if (goalChance == 1) {
    console.log("GOAL!");
    let newTeamOnegoalnum = Number(teamOneNumGoals.innerHTML) + 1;
    teamOneNumGoals.innerHTML = newTeamOnegoalnum;
  } else {
    console.log("MISS!");
  }
});

teamTwoShootButton.addEventListener("click", function () {
  console.log("Team two takes a shot!");

  //add to the counter for the number of shot from team two
  let newTeamTwoshotnum = Number(teamTwoNumShots.innerHTML) + 1;
  teamTwoNumShots.innerHTML = newTeamTwoshotnum;

  //call the function for the RNG to determing if the shot is a goal
  goalChance = goalChanceGenerator();
  console.log(goalChance);
  //use the RNG to determin if theshot was a goal
  if (goalChance == 1) {
    let newTeamTwogoalnum = Number(teamTwoNumGoals.innerHTML) + 1;
    teamTwoNumGoals.innerHTML = newTeamTwogoalnum;
    console.log("GOAL!");
  } else {
    console.log("MISS!");
  }
});
