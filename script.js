"use strict";

const grid = document.querySelector(".grid");
const btnClear = document.querySelector(".btn--clear");
const btnSize = document.querySelector(".btn--size");
let SIZE = 16;

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
      cell.classList.add("square--colored");
   }
}

function handleMouseUp() {
   isDrawing = false;
}

function handleMouseMove(event) {
   if (isDrawing) {
      const cell = event.target;
      if (cell.classList.contains("square")) {
         cell.classList.add("square--colored");
      }
   }
}

grid.addEventListener("mousedown", handleMouseDown);
grid.addEventListener("mouseup", handleMouseUp);
grid.addEventListener("mouseover", handleMouseMove);

const squares = document.querySelectorAll(".square");
btnClear.addEventListener("click", () => {
   squares.forEach((square) => {
      if (square.classList.contains("square--colored")) {
         square.classList.remove("square--colored");
      }
   });
});

btnSize.addEventListener("click", () => {
   SIZE = Number(
      prompt("What size n do you want the nxn grid to be? (Max 100)")
   );
   grid.innerHTML = "";
   createGrid(SIZE);
});
