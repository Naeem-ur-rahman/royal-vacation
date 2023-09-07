let rooms = document.querySelectorAll('.room-pop-up');

rooms.forEach(room => {
    let cancel = room.querySelector('.cancel-room-pop-up');
    cancel.addEventListener("click", () => {
        room.classList.remove('active');
    })
});

let card_rooms = document.querySelectorAll('.card-search.room');

card_rooms.forEach(card => {
    let btn = card.querySelector('.up-room');
    let popup = card.querySelector('.room-pop-up')
    btn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});