const {passengers} = require("./data");

const newPassengers = passengers.map(passenger => {
    return `${passenger.name} tem ${2019 - passenger.birthYear} anos`;
});

const founds = passengers.map (passenger => {
    const reserveName = [].map
        .call(passenger.name, letter => letter)
        .reverse()
        .join("");
    
    if (reserveName.toLowerCase()=== passenger.name.toLowerCase())
        return `isso é um palindromo: ${passenger.name}`;
});

console.log (founds);