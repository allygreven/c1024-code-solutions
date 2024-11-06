'use strict';
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('$openModal query not available');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('$dismissModal query not available');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog query not available');
$openModal.addEventListener('click', () => {
  $dialog.showModal();
});
$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
