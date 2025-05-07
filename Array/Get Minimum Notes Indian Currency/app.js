// const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500];

const getMinimumNumberOfNotes = (amount) => {
    // when we get the minimum number of currency array in descending order
    const arr = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    const noteCount = {};

    for(let i=0; i<arr.length; i++) {
        const note = arr[i];

        if(amount >= note) {
            const count = parseInt(amount / note);
            noteCount[note] = count;

            amount = amount % note;
        }
    }

    for(const note in noteCount) {
        console.log(`${note} : ${noteCount[note]}`);
    }
}

getMinimumNumberOfNotes(58);

