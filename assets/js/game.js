/**
 * 2C = trebol
 * 2D = diamante
 * 2H = corazon
 * 2V = pica
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specialCard = ['J', 'Q', 'K', 'A'];

const createDeck = () =>{
    for( let i = 2; i <= 10; i++ ){
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specialCard) {
            deck.push(special + type);
        }
    }
    

    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

createDeck();

//Funcion que permite tomar una carta
const hitCad = () =>{
    if(deck.length === 0){
        throw 'No hay cartas en la baraja'; //throw muesta un error por consola
    }
    
    const card = deck.pop(); //Remueve el ultimo elemento del arreglo
    
    console.log(deck);
    console.log(card); //debe ser de la baraja y dejar de existir en la baraja
    return card;
};

//valor de la carta
const cardValue = (card) =>{
    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}

const value = cardValue( hitCad() );
console.log({value});

//DOM




















//deck = [];
//ESTO SE REPITE POR CANTIDAD DE CARTAS y vacia el deck
// for (let i = 0; i <= 100; i++) {
//     hitCad();
// }
//hitCad();

/**
 * FORMA LARGA DE RESOLVERLO
// const cardValue = (card) =>{
//     const value = card.substring(0, card.length - 1);
//     //let point = 0;

//     // if(isNaN(value)){
//     //     point = (value === 'A') ? 11 : 10; //si el valor es A, el valor es 11, si no es 10
//     // }else{
//     //     point = value * 1; //toma el primer valor de la carta y la convierte en number * 1
//     // }

//     // console.log(point);
// }
 */
