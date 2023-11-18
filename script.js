const adviceId = document.querySelector(".id");
const adviceText = document.querySelector(".adviceText")
const diceBtn = document.querySelector(".diceBtn")
const mainContainer = document.querySelector(".mainContainer")

let api = "https://api.adviceslip.com/advice"
async function getAdvice() {
    const response = await fetch(api);
    const advice = await response.json();
    console.log(advice);
    adviceId.innerText = `ADVICE #${advice.slip.id}`
    adviceText.innerHTML = `<p>" ${advice.slip.advice}"<p>`
}
diceBtn.addEventListener('click',getAdvice)
getAdvice()

