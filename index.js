function wakeDog(dogName, dogBreed) {
  return 'Wake ${dogName} the ${dogBreed}';
}

function leashDog(dogName, dogBreed) {
  return 'Leash ${dogName} the ${dogBreed}';
}

function walkToPark(dogName, dogBreed) {
  return 'Walk to the park with ${dogName} the ${dogBreed}';
}

function throwFrisbee(dogName, dogBreed) {
  return.log 'Throw the frisbee for ${dogName} the ${dogBreed}';
}

function walkHome(dogName, dogBreed) {
  console.log 'Walk home with ${dogName} the ${dogBreed}';
}

function unleashDog(dogName, dogBreed) {
  console.log 'Unleash ${dogName} the ${dogBreed}';
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let routineArray = [];
  for (let i = 0; i < routine.length; i++) {
    routineArray.push(routine[i](dogName, dogBreed));
  }
  return routineArray;
}