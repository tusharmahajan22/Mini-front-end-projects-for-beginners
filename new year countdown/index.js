const daye1 = document.getElementById("day");
const houre1 = document.getElementById("hour");
const mine1 = document.getElementById("min");
const sece1 = document.getElementById("sec");

const newyeartime = new Date("Jan 1,2024 00:00:00").getTime();

updatecountdown();

function updatecountdown() {
  const now = new Date().getTime();
  const gap = newyeartime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  daye1.innerText = d;
  houre1.innerText = h;
  mine1.innerText = m;
  sece1.innerText = s;
  setTimeout(updatecountdown, 1000);
}
