function animateGiftBox() {
    const giftBox = document.getElementById('gift-box');
    giftBox.classList.add('vibrate');

    setTimeout(() => {
        window.location.href = 'birthday.html';
    }, 3000);
}
