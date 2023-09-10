document.addEventListener('DOMContentLoaded', function () {
  // Dichiaro le variabili
  let name;
  let km;
  let age;
  let finalPrice;
  let offer;
  let carrozza;
  let codiceCP;

  const priceXKm = 0.21;
  const discountUnder = 20;
  const discountOver = 40;

  // Seleziona il container con id "appare"
  const appareContainer = document.getElementById('appare');

  // Funzione per il calcolo del prezzo del biglietto
  function calculateTicketPrice() {
    // Ottieni i dati dal form
    name = document.getElementById('name').value;
    km = parseFloat(document.getElementById('km').value);
    age = document.getElementById('age').value;

     // Verifica se tutti i campi sono stati compilati correttamente
  if (!name || isNaN(km) || km <= 0 || age === '') {
    alert('Compila tutti i campi in modo corretto.');
    return; // Esci dalla funzione se i dati non sono validi
  }

    // Esegui il calcolo del prezzo del biglietto
    finalPrice = priceXKm * km;
    offer = 'Biglietto standard';

    if (age === 'under') {
      finalPrice *= 1 - (discountUnder / 100);
      offer = 'Sconto Under';
    } else if (age === 'over') {
      finalPrice *= 1 - (discountOver / 100);
      offer = 'Sconto Over';
    }

    // Genera numeri casuali per Carrozza e Codice CP
    carrozza = Math.floor(Math.random() * 16) + 1;
    codiceCP = Math.floor(Math.random() * 10000) + 90000;

    // Aggiorna il riepilogo del biglietto
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.innerHTML = `
      <div class="container">
        <h3 class="text-uppercase my-3">Dettaglio passeggeri</h3>
        <div class="row border">
          <div class="col-4">
            <h4>Nome passeggero</h4>
            <span>${name}</span>
          </div>
          <div class="col">
            <h4>Offerta</h4>
            <span>${offer}</span>
          </div>
          <div class="col">
            <h4>Carrozza</h4>
            <span>${carrozza}</span>
          </div>
          <div class="col">
            <h4>Codice CP</h4>
            <span>${codiceCP}</span>
          </div>
          <div class="col">
            <h4>Costo Biglietto</h4>
            <span>€${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    `;

    // Rimuovi la classe "d-none" dal container con id "appare"
    appareContainer.classList.remove('d-none');
  }

  // Funzione per annullare l'operazione e ripristinare lo stato iniziale
  function resetTicket() {
    // Resetta i campi del form
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').selectedIndex = 0;

    // Svuota il riepilogo del biglietto
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.innerHTML = '';

    // Aggiungi la classe "d-none" al container con id "appare"
    appareContainer.classList.add('d-none');
  }

  // Seleziona il pulsante "Genera"
  const generateButton = document.querySelector('.generator-button');

  // Seleziona il pulsante "Annulla"
  const resetButton = document.querySelector('.reset-button');

  // Aggiungi un ascoltatore per il clic sul pulsante "Genera"
  generateButton.addEventListener('click', calculateTicketPrice);

  // Aggiungi un ascoltatore per il clic sul pulsante "Annulla"
  resetButton.addEventListener('click', resetTicket);

});