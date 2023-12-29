"use strict";

const container = document.querySelector(".container");
const SIZE = 36;

for (let i = 0; i < SIZE; i++) {
   const row = document.createElement("div");
   row.classList.add("row");
   container.appendChild(row);
}

const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
   for (let i = 0; i < SIZE; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
   }
});

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
      console.log("mousemove");
      const cell = event.target;
      if (cell.classList.contains("square")) {
         cell.classList.add("square--colored");
      }
   }
}

container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);
container.addEventListener("mouseover", handleMouseMove);
