let circlesAmount = document.querySelector("#circlesAmount");
let circlesRadius = document.querySelector("#CirclesRadius");
let xSpeed = document.querySelector("#xSpeed");
let ySpeed = document.querySelector("#ySpeed");
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");

let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius, a, b, d) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.a = a;
  this.b = b;
  this.d = d;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = `rgb(${a},${b},${d})`;
    c.stroke();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circleArray = [];
function createCircles(amount, TheRadius, xSpeed, ySpeed) {
  for (let i = 0; i < amount; i++) {
    let radius = TheRadius;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * xSpeed;
    let dy = (Math.random() - 0.5) * ySpeed;
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let d = Math.floor(Math.random() * 255);

    circleArray.push(new Circle(x, y, dx, dy, radius, a, b, d));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

addBtn.addEventListener("click", () => {
  let am = parseInt(circlesAmount.value, 10);
  let rad = parseInt(circlesRadius.value, 10);
  let xS = parseInt(xSpeed.value, 10);
  let yS = parseInt(ySpeed.value, 10);
  if (am <= 0 || isNaN(am)) {
    return (circlesAmount.value = "must be number and > 0");
  }
  if (rad <= 0 || isNaN(rad)) {
    return (circlesRadius.value = "must be number and > 0");
  }
  if (isNaN(xS)) {
    return (xSpeed.value = "must be a number");
  }
  if (isNaN(yS)) {
    return (ySpeed.value = "must be a number");
  }
  changeControlDiv();
  createCircles(am, rad, xS, yS);
  circlesAmount.value = "";
  circlesRadius.value = "";
  xSpeed.value = "";
  ySpeed.value = "";
});

clearBtn.addEventListener("click", () => {
  location.reload();
});
let canvasControlDiv = document.getElementById("controlCanvas");
function changeControlDiv() {
  canvasControlDiv.style.opacity = "0.1";
}
canvasControlDiv.addEventListener("mouseenter", () => {
  canvasControlDiv.style.opacity = "1";
});
