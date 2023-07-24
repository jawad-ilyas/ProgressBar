const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const circle = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progressBar');

let currentCircle = 1;
// console.log(circle.length);

next.addEventListener('click', () => {
  currentCircle++;
  if (currentCircle > circle.length) {
    currentCircle = circle.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentCircle--;
  if (currentCircle < 1) {
    currentCircle = 1;
  }
  update();
});

function update() {
  circle.forEach((items, index) => {
    if (index < currentCircle) {
      items.classList.add('active');
    } else {
      items.classList.remove('active');
    }
  });
  const active = document.querySelectorAll(".active")
  console.log()
  progressBar.style.width = (active.length-1) / (circle.length-1) * 85 + "%"; 
  if (currentCircle == 1) {
    prev.disabled = true;
  }
  else if(currentCircle == circle.length)
  {
    next.disabled = true;
  }
  else
  {
    prev.disabled = false;
    next.disabled = false;
  }
}
