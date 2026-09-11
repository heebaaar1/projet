var prompt = require('prompt-sync')();
const tickets=[];
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

function menuPrincipal() {
    let choix;

    do {
        console.log("=================================");
        console.log("        RAILWAY MANAGER");
        console.log("=================================");
        console.log();
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");
        console.log();

        choix = prompt("Votre choix :");

        switch (choix) {
            case "1":
                affichertrajets();
                break;

            case "2":
                acheterTicket();
                break;

            case "3":
                afficherTickets();
                break;

            case "4":
                annulerTicket();
                break;

            case "5":
                rechercherTicket();
                break;

            case "6":
                 filtrerTrajets();
                break;

            case "7":
                trierParPrix();
                break;

            case "0":
                console.log("Au revoir !");
                break;

            default:
                console.log("Choix invalide.");
        }

        console.log();

    } while (choix !== "0");
}
menuPrincipal();
function affichertrajets() {
    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];

        console.log("#" + trip.id, trip.departure + " → " + trip.destination);
        console.log("départ : " + trip.departureTime);
        console.log("arrivée : " + trip.arrivalTime);
        console.log("places disponibles : " + trip.availableSeats);
        console.log();
    }
}
function acheterTicket() {
    let passengerName = prompt("Nom du passager :");
    let tripId = Number(prompt("Identifiant du trajet :"));
    let trip = null;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === tripId) {
            trip = trips[i];
            break;
        }
    }

    if (trip === null) {
        console.log("Trajet introuvable.");
        return;
    }

    if (trip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    let seatNumber = 1;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === tripId) {
            seatNumber++;
        }
    }

    let ticket = {
        id: tickets.length + 1,
        passengerName: passengerName,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    trip.availableSeats--;

    tickets[tickets.length] = ticket;

    console.log("Ticket acheté avec succès.");
    console.log();
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " + trip.departure + " → " + trip.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
}
function afficherTickets() {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    console.log("=== TICKETS ===");
    console.log();

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let trip;

        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === ticket.tripId) {
                trip = trips[j];
                break;
            }
        }

        console.log("Ticket #" + ticket.id);
        console.log("Passager : " + ticket.passengerName);
        console.log("Trajet : " + trip.departure + " → " + trip.destination);
        console.log("Place : " + ticket.seatNumber);
        console.log("Prix : " + ticket.price + " DH");
        console.log();
    }
}
function annulerTicket() {
    let ticketId = Number(prompt("Identifiant du ticket :"));

    let ticketIndex = -1;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketId) {
            ticketIndex = i;
            break;
        }
    }
    if (ticketIndex === -1) {
        console.log("Ticket introuvable.");
        return;
    }
    let ticket = tickets[ticketIndex];

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === ticket.tripId) {
            trips[i].availableSeats++;
            break;
        }
    }
    tickets.splice(ticketIndex, 1);

    console.log("Ticket annulé avec succès.");
}
function rechercherTicket() {
    let passengerName = prompt("Nom du passager :");

    let trouve = false;

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];

        if (ticket.passengerName === passengerName) {

            let trip = null;

            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === ticket.tripId) {
                    trip = trips[j];
                    break;
                }
            }

            console.log("Ticket #" + ticket.id);
            console.log("Passager : " + ticket.passengerName);
            console.log("Trajet : " + trip.departure + " → " + trip.destination);
            console.log("Place : " + ticket.seatNumber);
            console.log("Prix : " + ticket.price + " DH");
            console.log();

            trouve = true;
        }
    }

    if (!trouve) {
        console.log("Aucun ticket trouvé pour ce passager.");
    }
}
function filtrerTrajets() {
    let departure = prompt("Ville de départ :");

    let trouve = false;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure === departure) {
            console.log(
                trips[i].departure + " → " +
                trips[i].destination + " : " +
                trips[i].price + " DH"
            );

            trouve = true;
        }
    }

    if (!trouve) {
        console.log("Aucun trajet trouvé.");
    }
}
function trierParPrix() {

    for (let i = 0; i < trips.length - 1; i++) {

        let min = i;

        for (let j = i + 1; j < trips.length; j++) {

            if (trips[j].price < trips[min].price) {
                min = j;
            }
        }

        let temp = trips[i];
        trips[i] = trips[min];
        trips[min] = temp;
    }

    for (let i = 0; i < trips.length; i++) {
        console.log(
            trips[i].departure + " → " +
            trips[i].destination + " : " +
            trips[i].price + " DH"
        );
    }
}
