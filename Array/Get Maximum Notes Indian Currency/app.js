const getMaximumNumberNotes = (amount) => {
    const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500];
    const currencyNote = {};

    for(let i=0; i<arr.length; i++) {
        let note = arr[i];

        if(amount >= note) {
            const count = parseInt(amount / note);
            currencyNote[note] = count;

            amount = amount % count;
        }
    }

    for(let note in currencyNote) {
        console.log(`${note} : ${currencyNote[note]}`);
    }
}

getMaximumNumberNotes(58);