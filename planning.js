// Liste projets avec noms et durées en heures
const projets = [
    { nom: "P1-Planning de formation", duree: 20 },
    { nom: "P2-Booki", duree: 117 },
    { nom: "P3", duree: 103 },
    { nom: "P4", duree: 42 },
    { nom: "P5", duree: 1 },
    { nom: "P6", duree: 104 },
    { nom: "P7", duree: 100 },
    { nom: "P8", duree: 1 },
    { nom: "P9", duree: 84 },
    { nom: "P10", duree: 74 },
    { nom: "P11", duree: 80 },
    { nom: "P12", duree: 64 },
    { nom: "P13", duree: 115 },
    { nom: "P14", duree: 116 }
];

// Date début de formation
const dateDebut = new Date("2023-10-07");

// Fonction pour ajout d'1 projet au planning
function ajouterProjetAuPlanning(mois, jours, projet, dates) {
    const table = document.querySelector("table");
    const row = table.insertRow(-1);
    const moisCell = row.insertCell(0);
    const joursCell = row.insertCell(1);
    const projetCell = row.insertCell(2);
    const datesCell = row.insertCell(3);

    moisCell.textContent = mois;
    joursCell.textContent = jours;
    projetCell.textContent = projet;
    datesCell.textContent = dates;
}

// Calcul et affichage du planning
let currentDate = dateDebut;
for (const projet of projets) {
    const mois = currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    const jours = Math.ceil(projet.duree / 2.85); //  heures de travail par jour
    const dateFin = new Date(currentDate);
    dateFin.setDate(dateFin.getDate() + jours - 1);
    const dates = `${currentDate.toLocaleDateString('fr-FR')} - ${dateFin.toLocaleDateString('fr-FR')}`;

    ajouterProjetAuPlanning(mois, jours, projet.nom, dates);

    // MàJ date de début pour le prochain projet
    currentDate = new Date(dateFin);
    currentDate.setDate(currentDate.getDate() + 1);
}