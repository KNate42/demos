const fields = document.querySelector('#booking-fields');
const date = document.querySelector('#event-date');
const guests = document.querySelector('#event-guests');
const link = document.querySelector('#booking-link');
const template = new URL(link.href);
const message = template.searchParams.get('text');

function updateMessage() {
  const [year, month, day] = date.value.split('-');
  const formattedDate = day ? [day, month, year].join('.') : '';
  const guestCount = guests.validity.valid ? guests.value : '';
  const text = message
    .replace('Дата: ', 'Дата: ' + formattedDate)
    .replace('Число гостей: ', 'Число гостей: ' + guestCount);

  link.href = template.origin + template.pathname + '?text=' + encodeURIComponent(text);
}

fields.addEventListener('input', updateMessage);
link.addEventListener('click', (event) => {
  if (!date.reportValidity() || !guests.reportValidity()) {
    event.preventDefault();
    return;
  }

  updateMessage();
});
window.addEventListener('pageshow', updateMessage);
fields.hidden = false;
