// Liste de messages de Bonne Année
const messages = [
    "Bonne Année 2025 ! Que cette année soit remplie de bonheur et de succès.",
    "Meilleurs vœux pour 2025 ! Que tous vos rêves se réalisent.",
    "Que 2025 vous apporte joie, santé et prospérité. Bonne Année !",
    "Bonne Année 2025 ! Que cette nouvelle année soit merveilleuse pour vous et vos proches.",
    "Félicitations pour une nouvelle année pleine de nouvelles opportunités et de succès. Bonne Année 2025 !"
];

// Fonction pour générer un message de Bonne Année personnalisé
function generateNewYearMessage(nom) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return `Cher/Chère ${nom}, ${messages[randomIndex]}`;
}

// Fonction pour afficher le message
function showMessage() {
    const nameInput = document.getElementById('nameInput').value;
    const message = generateNewYearMessage(nameInput);
    document.getElementById('message').textContent = message;
}
