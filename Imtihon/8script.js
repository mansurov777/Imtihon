const greet = (name, language) => {
    if (language === "uz") {
        return `Salom, ${name}!`;
    } else if (language === "en") {
        return `Hello, ${name}!`;
    } else {
        return `Hi, ${name}!`;
    }
};