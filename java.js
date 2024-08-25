const allcards = document.querySelectorAll('.card');
let firstcard = null,
    secondcard = null;
let canclick = true;
let score = 0;
allcards.forEach((card) => {
    card.addEventListener("click", handelCardClick);
});



function handelCardClick() {
    if (!canclick) return;

    if (this.classList.contains('flip')) return;

    this.classList.add('flip');

    if (!firstcard) firstcard = this;
    else if (!secondcard) secondcard = this;
    // Check if the two flipped cards match
    let img1 = firstcard ? firstcard.firstElementChild.src : null;
    let img2 = secondcard ? secondcard.firstElementChild.src : null;


    if (img1 === img2) {
        console.log('matching.....');
        firstcard = null;
        secondcard = null;

        score++;
        if (score === 9) handelgameover();
    }

    else if (img1 && img2) {
        canclick = false;
        setTimeout(() => {
            firstcard.classList.remove('flip');
            secondcard.classList.remove('flip');
            firstcard = null;
            secondcard = null;
            canclick = true;
        }, 1000)
    }

}
// GAME OVER 
function handelgameover() {
    setTimeout(() => {
        let reval = confirm("You Win 😍😍\n Play Again");
        if (reval === true) {
            location.reload();
        }
    }, 1000)
}
// SHUFLE CARD 

allcards.forEach(card => {
    let randpass = Math.floor(Math.random() * 48);
    card.style.order = randpass;
})
