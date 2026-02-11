const nome = process.argv[2];
const classe = process.argv[3];
const nivel = parseInt(process.argv[4]);

if (!nome || !classe || isNaN(nivel)) {
    console.log("Uso correto: node agente.js [NOME] [CLASSE] [NIVEL]");
    process.exit(1);
}

let rank = "";

if (nivel >= 1 && nivel <= 10) {
    rank = "Recruta";
} else if (nivel >= 11 && nivel <= 20) {
    rank = "Investigador";
} else if (nivel >= 21) {
    rank = "Especialista";
} else {
    rank = "Indeterminado";
}

console.log("\n===== Cadastro de Agente =====");
console.log(`Nome:   ${nome}`);
console.log(`Classe: ${classe}`);
console.log(`Nível:  ${nivel}`);
console.log(`Rank:   ${rank}`);
console.log("==============================\n");