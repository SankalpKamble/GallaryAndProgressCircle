document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const undoButton = document.getElementById('undoButton');
    let selectedCard = null;

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            if (selectedCard === card) {
                // If the clicked card is already selected, minimize it
                card.classList.remove('expanded');
                undoButton.classList.add('hidden');
                selectedCard = null;
                // Scroll to the top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // If another card is already selected, minimize it first
                if (selectedCard !== null) {
                    selectedCard.classList.remove('expanded');
                }
                // Then expand the clicked card
                card.classList.add('expanded');
                selectedCard = card;
                // Show undo button
                undoButton.classList.remove('hidden');
                // Position the undo button
                positionUndoButton(card);
                // Scroll to the center of the selected image
                scrollToCenter(card);
            }
        });
    });

    // Add event listener to undo button
    undoButton.addEventListener('click', function () {
        // Minimize the selected card
        selectedCard.classList.remove('expanded');
        // Hide the undo button
        undoButton.classList.add('hidden');
        // Reset selectedCard variable
        selectedCard = null;
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Function to position the undo button
    function positionUndoButton(selectedCard) {
        const closeButton = document.getElementById('undoButton');
        const cardRect = selectedCard.getBoundingClientRect();
        const closeButtonRect = closeButton.getBoundingClientRect();
        const topOffset = cardRect.top + window.pageYOffset;
        const leftOffset = cardRect.left + window.pageXOffset;
        const closeButtonTop = topOffset + 10; // Adjust for top margin
        const closeButtonLeft = leftOffset + cardRect.width - closeButtonRect.width - 10; // Adjust for right margin
        closeButton.style.top = closeButtonTop + 'px';
        closeButton.style.left = closeButtonLeft + 'px';
    }

    // Function to scroll to the center of the selected image
    function scrollToCenter(selectedCard) {
        const cardRect = selectedCard.getBoundingClientRect();
        const scrollX = cardRect.left + cardRect.width / 2 - window.innerWidth / 2;
        const scrollY = cardRect.top + cardRect.height / 2 - window.innerHeight / 2;
        window.scrollTo({ left: scrollX, top: scrollY, behavior: 'smooth' });
    }
});


let number=document.querySelector(".number");
let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let circle=document.querySelector(".circle");
// var num=450-(450*(input.value/100));
function render(){
    let percentage =input.value;
    let inputValue = input.value;
    
    // Update circle attributes
    circle.style.setProperty('--percentage', percentage);
    
    // Update number display
    number.innerHTML = inputValue + "%";

}