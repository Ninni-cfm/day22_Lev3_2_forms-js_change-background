// initialize background-color
changeBackgroundColor();

function changeBackgroundColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    // console.log("rgb(" + red + "," + green + "," + blue + ")");

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}