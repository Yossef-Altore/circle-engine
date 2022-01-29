const imgInIndex = document.getElementById("imgInIndex");
const images = [
  "img/01-imgInIndex.png",
  "img/02-imgInIndex.png",
  "img/03-imgInIndex.png",
  "img/04-imgInIndex.png",
];

let counter = 1;
export function startIntervalForChangingImg() {
  setInterval(() => {
    imgInIndex.src = images[counter];
    counter++;
    if (counter === 4) {
      counter = 0;
    }
  }, 2000);
}
