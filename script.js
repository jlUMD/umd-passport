const popup = document.getElementById('badge-popup');
const popupName = document.getElementById('popup-name');
const popupClose = document.getElementById('popup-close');
const passportList = document.getElementById('passport-list');

let pendingBadge = null;     // the badge currently showing in the pop-up
let pendingButton = null;    // the button that was clicked

document.querySelectorAll('.badge-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('earned')) return;   // already got it
    pendingBadge = button.getAttribute('data-badge');
    pendingButton = button;
    popupName.textContent = pendingBadge;
    popup.classList.remove('hidden');
  });
});

popupClose.addEventListener('click', () => {
  addBadgeToPassport(pendingBadge);
  pendingButton.classList.add('earned');
  popup.classList.add('hidden');
});

function addBadgeToPassport(badgeName) {
  const item = document.createElement('li');
  item.textContent = `${badgeName} — earned ${new Date().toLocaleDateString()}`;
  passportList.appendChild(item);
}