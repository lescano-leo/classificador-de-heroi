let nickname = "Mestre dos Magos";
let XP = 15000;
let rank = "";
let cardHeroi = [nickname, XP, rank];

switch (true) {
    default:        
        cardHeroi[2] = "Ferro";
        break;
    case cardHeroi[1] > 1000 && cardHeroi[1] <= 2000:
        cardHeroi[2] = "Bronze";
        break;
    case cardHeroi[1] > 2000 && cardHeroi[1] <= 5000:
        cardHeroi[2] = "Prata";
        break;
    case cardHeroi[1] > 5000 && cardHeroi[1] <= 6000:
        cardHeroi[2] = "Ouro";
        break;
    case cardHeroi[1] > 6000 && cardHeroi[1] <= 7000:
        cardHeroi[2] = "Platina";
        break;
    case cardHeroi[1] > 7000 && cardHeroi[1] <= 8000:
        cardHeroi[2] = "Diamante";
        break;
    case cardHeroi[1] > 8000 && cardHeroi[1] <= 9000:
        cardHeroi[2] = "Lendário";
        break;
    case cardHeroi[1] > 9000 && cardHeroi[1] <= 10000:
        cardHeroi[2] = "Imortal";
        break;
    case cardHeroi[1] > 10000:
        cardHeroi[2] = "Divino";
        break;
}

const Message = "O herói " + cardHeroi[0] + " está no rank " + cardHeroi[2] + " com " + cardHeroi[1] + " XP";
console.log(Message);