/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  const t = parseInt(time)
  if (t < 12){
    return "Good Morning"
  }
  if (t >= 12 && t <= 17){
    return "Good Afternoon"
  } 
  if (t > 17 && t < 24){
    return "Good Evening"
  }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg
}
