const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('li');

for(let card of cards){
  card.addEventListener('click', function(){
    const cardId = card.getAttribute('id');
    const cardTxt1 = card.querySelector('li p.bold');
    const cardTxt2 = card.querySelector('li p.author');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('.modal-content img').src = `img/${cardId}.png`;
    modalOverlay.querySelector('.modal-content img').alt = `${cardId}`;
    modalOverlay.querySelector('.bold').innerHTML = cardTxt1.innerHTML;
    modalOverlay.querySelector('.author').innerHTML = cardTxt2.innerHTML;
  });
}

document.querySelector('.modal-close').addEventListener('click', function(){
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('.modal-content img').src = "";
  modalOverlay.querySelector('.modal-content img').alt = "";
  modalOverlay.querySelector('.bold').innerHTML = "";
  modalOverlay.querySelector('.author').innerHTML = "";
});