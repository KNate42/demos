const copyButton = document.querySelector('.copy-address');
const city = document.querySelector('#address-city');
const street = document.querySelector('#street');
const copyStatus = document.querySelector('#copy-status');

if (navigator.clipboard?.writeText && copyButton && city && street && copyStatus) {
  const address = `${city.textContent.trim()}, ${street.textContent.trim()}`;
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    copyStatus.textContent = '';
    try {
      await navigator.clipboard.writeText(address);
      copyStatus.textContent = 'Адрес скопирован';
    } catch {
      copyStatus.textContent = 'Не удалось скопировать адрес';
    }
  });
}
