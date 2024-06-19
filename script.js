const button = document.querySelector(".btn")
const grid = document.querySelector(".grid");

button.addEventListener("click", () => {
    grid.innerHTML = "";
    let number = prompt("Hom nay rows and columns?")
    if (number > 100) {
        number = 100
    }
    createSquares(number)
})

function addRows(number) {
    const rows = document.createElement("div");
    rows.classList.add("rows");
    grid.appendChild(rows);

    for (var i = 0; i < number; i++) {
        addSquares(rows);
      }
}

function addSquares(rows) {
    const square = document.createElement("div");
    square.classList.add("square");
    rows.appendChild(square);

    square.addEventListener("mouseover", (event) => {
        function random_rgba() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        event.target.style.backgroundColor = random_rgba();
    })
}

function createSquares(number) {
    for (var i = 0; i < number; i++) {
        addRows(number);
      }
}

createSquares(16)