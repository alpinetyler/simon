const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = []

let nextSequence = () => {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  console.log(gamePattern)
}
