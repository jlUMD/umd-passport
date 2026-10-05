const popup = document.getElementById('badge-popup');
const popupName = document.getElementById('popup-name');
const popupClose = document.getElementById('popup-close');
const passportList = document.getElementById('passport-list');

const TOTAL_SLOTS = 6;
let pendingBadge = null;
let pendingButton = null;

// Fill the passport with empty slots when the page loads
for (let i = 0; i < TOTAL_SLOTS; i++) {
  const slot = document.createElement('li');
  slot.className = 'slot';
  passportList.appendChild(slot);
}

document.querySelectorAll('.badge-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('earned')) return;
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
  // use the first empty slot, or add a new page spot if all are full
  let spot = passportList.querySelector('.slot');
  if (!spot) {
    spot = document.createElement('li');
    passportList.appendChild(spot);
  }

  spot.className = 'stamp';
  spot.textContent = '';

  const name = document.createElement('span');
  name.className = 'stamp-name';
  name.textContent = badgeName;

  const date = document.createElement('span');
  date.className = 'stamp-date';
  date.textContent = new Date().toLocaleDateString();

  spot.appendChild(name);
  spot.appendChild(date);
}