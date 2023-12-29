"use strict";

const grid = document.querySelector(".grid");
const btnClear = document.querySelector(".btn--clear");
const btnSize = document.querySelector(".btn--size");
const color = document.querySelector(".color");
let SIZE = 16;
let COLOR = "#0e0e0e";

function createGrid(size) {
   for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      grid.appendChild(row);
   }

   const rows = document.querySelectorAll(".row");
   rows.forEach((row) => {
      for (let i = 0; i < size; i++) {
         const square = document.createElement("div");
         square.classList.add("square");
         row.appendChild(square);
      }
   });
}

createGrid(SIZE);
let isDrawing = false;

function handleMouseDown(event) {
   isDrawing = true;
   const cell = event.target;
   if (cell.classList.contains("square")) {
      cell.style.backgroundColor = COLOR;
   }
}

function handleMouseUp() {
   isDrawing = false;
}

function handleMouseMove(event) {
   if (isDrawing) {
      const cell = event.target;
      if (cell.classList.contains("square")) {
         cell.style.backgroundColor = COLOR;
      }
   }
}

grid.addEventListener("mousedown", handleMouseDown);
grid.addEventListener("mouseup", handleMouseUp);
grid.addEventListener("mouseover", handleMouseMove);

btnClear.addEventListener("click", () => {
   const squares = document.querySelectorAll(".square");
   squares.forEach((square) => {
      square.style.backgroundColor = "#fff";
   });
});

btnSize.addEventListener("click", () => {
   SIZE = Number(
      prompt("What size n do you want the nxn grid to be? (Max 100)")
   );

   while (grid.childElementCount > 1) {
      grid.removeChild(grid.lastChild);
   }

   createGrid(SIZE);
});

color.addEventListener("change", (e) => {
   COLOR = e.target.value;
});
