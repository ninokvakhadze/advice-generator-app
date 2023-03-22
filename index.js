const button = document.getElementById("button");
const number = document.getElementById("number");
const text = document.getElementById("text");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {slip:{id,advice}} = await res.json();
  number.innerText = id;
  text.innerText = advice;
}

getAdvice()

button.addEventListener("click",getAdvice)
