console.log("Sending...");
function sendAnalytics(data) {
  console.log(data);
}
sendAnalytics("here is datas");

const ag = (a: string, b: number = 1) => console.log(a, b); //1 is a default argument. Has to be last
const pront: (a: number | string) => void = (output) => console.log(output);

const booton = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
