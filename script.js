// Liste de messages de Bonne Année
const messages = [
    "Bonne Année 2026 ! Que cette année soit remplie de bonheur et de succès.",
    "Meilleurs vœux pour 2026 ! Que tous tes rêves se réalisent.",
    "Que 2026 t'apporte joie, santé et prospérité. Bonne Année !",
    "Bonne Année 2026 ! Que cette nouvelle année soit merveilleuse pour toi et tes proches.",
    "Félicitations pour une nouvelle année pleine de nouvelles opportunités et de succès. Bonne Année 2025 !"
];

// Fonction pour générer un message de Bonne Année personnalisé
function generateNewYearMessage(nom, genre) {
    const randomIndex = Math.floor(Math.random() * messages.length);

    const prefixes = {
        male: "Cher",
        female: "Chère"
    };

    const prefix = prefixes[genre] || "Cher/Chère"; // valeur par défaut si rien n'est choisi

    return `${prefix} ${nom}, ${messages[randomIndex]}`;
}

// Fonction pour afficher le message
function showMessage() {
    const nameInput = document.getElementById('nameInput').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!nameInput || !gender) {
        document.getElementById('message').textContent = "⚠️ Merci d'entrer un nom et de choisir un genre.";
        return;
    }

    const message = generateNewYearMessage(nameInput, gender);
    document.getElementById('message').textContent = message;
}
