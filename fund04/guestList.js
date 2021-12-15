const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

admitted = [];
refused = [];

// loop starts here
for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused += `${person}, `;
    }
    else {
        admitted += `${person}, `;
    }
}

admitted = admitted.slice(0, admitted.length - 2) + '.';
refused = refused.slice(0, refused.length - 2) + '.';
console.log(`Admitted: ${admitted}`);
console.log(`Refused: ${refused}`);