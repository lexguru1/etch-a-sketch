const input = document.querySelector("#input");
console.log(input);
const gridContainer = document.querySelector(".grid-main-container");
console.log(gridContainer);

const defaultSize = 64;
const gridArr = [];
for (let i = 1; i <= defaultSize * defaultSize; i++) {
  gridArr.push(i);
}
//console.log(gridArr);

for (i in gridArr) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "grey";
  });
  gridContainer.appendChild(gridItem);
}

const button = document.querySelector("#button");
console.log(button);

button.addEventListener("click", () => {
  const gridItems = document.getElementsByClassName("grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "white";
  }
});

const rainbow = document.querySelector("#rainbow");
console.log(rainbow);

rainbow.addEventListener("click", () => {
  const gridItems = document.getElementsByClassName("grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    const randomGen = Math.ceil(Math.random() * 255);
    gridItems[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${randomGen},${randomGen},${randomGen})`;
    });
  }
});
