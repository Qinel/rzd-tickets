document.getElementById('searchForm').addEventListener('submit', searchTickets);

let availableTickets = [
    { from: "moscow", to: "stpetersburg", date: "2025-06-01", price: "1500 руб", id: 1 },
    { from: "moscow", to: "ekaterinburg", date: "2025-06-05", price: "2500 руб", id: 2 },
    { from: "stpetersburg", to: "moscow", date: "2025-06-02", price: "1800 руб", id: 3 },
    { from: "ekaterinburg", to: "moscow", date: "2025-06-10", price: "2200 руб", id: 4 }
];

function searchTickets(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Фильтруем доступные билеты по выбранным критериям
    const filteredTickets = availableTickets.filter(ticket =>
        ticket.from === from && ticket.to === to && ticket.date === date
    );

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Очищаем результаты

    if (filteredTickets.length === 0) {
        resultsContainer.innerHTML = '<p>Нет доступных билетов на выбранную дату.</p>';
    } else {
        filteredTickets.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.classList.add('ticket');
            ticketElement.innerHTML = `
                <h3>Из ${ticket.from} в ${ticket.to}</h3>
                <p>Дата: ${ticket.date}</p>
                <p>Цена: ${ticket.price}</p>
                <button onclick="viewTicket(${ticket.id})">Купить</button>
            `;
            resultsContainer.appendChild(ticketElement);
        });
    }
}

function viewTicket(ticketId) {
    const ticket = availableTickets.find(t => t.id === ticketId);
    document.getElementById('ticketDetails').innerText = `
        Из: ${ticket.from} в ${ticket.to}
        Дата: ${ticket.date}
        Цена: ${ticket.price}
    `;
    document.getElementById('ticketModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('ticketModal').style.display = 'none';
}

function buyTicket() {
    alert('Поздравляем, билет куплен!');
    closeModal();
}
