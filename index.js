let nickname = "Israel"
let heroPoints = 10050
let nivel = null

switch (true) {
    case heroPoints <= 2000:
        nivel = "Ferro"
    break;
    case heroPoints >= 2001 && heroPoints <=4000:
        nivel = "Bronze"
    break;
    case heroPoints >= 4001 && heroPoints <=6000:
        nivel = "Prata"
    break;
    case heroPoints >= 6001 && heroPoints <=7000:
        nivel = "Ouro"
    break;
    case heroPoints >= 7001 && heroPoints <=8000:
        nivel = "Platina"
    break;
    case heroPoints >= 8001 && heroPoints <=9000:
        nivel = "Ascendente"
    break;
    case heroPoints >= 9001 && heroPoints <=10000:
        nivel = "Imortal"
    break;
    case heroPoints >= 10001:
        nivel = "Radiante"
    break;
}

console.log("O herói de nome " + nickname + " está no nível de " + nivel)
