// Liste de messages de Bonne Année
const messages = [
    "Bonne Année! Que cette année soit remplie de bonheur et de succès.",
    "Meilleurs vœux ! Que tous tes rêves se réalisent.",
    "Que cette année t'apporte joie, santé et prospérité. Bonne Année !",
    "Bonne Année  ! Que cette nouvelle année soit merveilleuse pour toi et tes proches.",
    "Félicitations pour une nouvelle année pleine de nouvelles opportunités et de succès. Bonne Année !"
];

// Fonction pour générer un message de Bonne Année personnalisé
function generateNewYearMessage(nom, genre,year) {
    const randomIndex = Math.floor(Math.random() * messages.length);

    const prefixes = {
        male: "Cher",
        female: "Chère"
    };

    const prefix = prefixes[genre] || "Cher/Chère"; // valeur par défaut si rien n'est choisi

    return `${prefix} ${nom}, ${messages[randomIndex]},${year}`;
}

// Fonction pour afficher le message
function showMessage() {
    const nameInput = document.getElementById('nameInput').value;
    const yearInput = document.getElementById('yearInput').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!nameInput || !gender) {
        document.getElementById('message').textContent = "⚠️ Merci d'entrer un nom, de choisir le genre de la personne et d'indiquer la date.";
        return;
    }

    const message = generateNewYearMessage(nameInput, gender);
    document.getElementById('message').textContent = message;
}
