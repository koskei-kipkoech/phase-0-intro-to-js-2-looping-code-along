function writeCards(names, event){
    let thanYouCard = [];
    for (let i = 0; i < names.length; i++){
        thanYouCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thanYouCard;
}

function countDown(startingNumber){
    while (startingNumber>= 0){
        console.log(startingNumber);
        startingNumber--;
    }
}
let name = ["Guadalupe","Ollie","Aki"];
let event = "surprise"

console.log(writeCards(name,event ));
countDown(5)
