let squares = document.getElementsByClassName("available");
let togglebtn = document.getElementById("toggle");
togglebtn.addEventListener("click", toggle);

let image = document.getElementById("image");

let isClicked = false;

function toggle() {
    isClicked = !isClicked;
    if (!isClicked) loop()
}

async function loop() {
    for (let i = 0; i < squares.length; i++) {
        if (isClicked) {
            squares[i-1].classList.add("selected");
            squares[i-1].classList.remove("available");
            if (i == 0) {
                image.src = "./img/desert.jpg"
            } else if (i == 1) {
                image.src = "./img/alon1.jpg"
            } else if (i == 2) {
                image.src = "./img/fog.jpg"
            } else if (i == 3) {
                image.src = "./img/good1.jpg"
            } else if (i == 4) {
                image.src = "./img/hope.jpg"
            } else if (i == 5) {
                image.src = "./img/index.jpg"
            } else if (i == 6) {
                image.src = "./img/wasteland.jpg"
            } 
            return
        } else {
            squares[i].classList.add("active");
            await sleep(200)
            squares[i].classList.remove("active");
        }
    }
    loop()

}

loop();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}