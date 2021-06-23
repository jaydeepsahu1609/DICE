let dice = document.getElementById('dice');
let currentDie = 0;
let images = new Array();
for (let i = 0; i < 6; ++i) {
    images[i] = new Image();
    let source = (i + 1) + ".png";
    images[i].src = source;
}
const roll = () => {
    dice.style.backgroundImage = "none";
    let rand = 0;

    do {
        rand = Math.ceil(Math.random() * 6);
    } while (rand == 0 && rand != currentDie);

    currentDie = rand;
    let imagepath = "url('" + images[rand - 1].src + "')";
    dice.style.backgroundImage = imagepath;

};