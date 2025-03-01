function calculo_saldo_vitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;   
}

function resultado(saldo) {
    let rankeada = saldo;
    let nivel = "";
    if (rankeada <= 10) {
        nivel = "Ferro";
    } else if (rankeada > 10 && rankeada <= 20) {
        nivel = "Bronze";
    } else if (rankeada > 20 && rankeada <= 50) {
        nivel = "Prata";
    } else if (rankeada > 50 && rankeada <= 80) {
        nivel = "Ouro";
    } else if (rankeada > 80 && rankeada <= 90) {
        nivel = "Diamante";
    } else if (rankeada > 90 && rankeada <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel;
    
}

let vitorias = 200;
let derrotas = 100;
let saldo_vitorias = calculo_saldo_vitorias(vitorias, derrotas);
let nivel = resultado(saldo_vitorias);

console.log("O Herói tem de saldo de " + saldo_vitorias + " e está no nível " + nivel);

