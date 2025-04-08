const str = "abcd";

const halfDivideString = (str) => {
    let x = "";
    let y = "";

    for(let i=0; i<str.length; i++) {
        if(str.length % 2 !== 0) {
            console.log("can't divide the string because of odd length");
            return;
        }
        else if(i< str.length/2) {
            x += str.charAt(i);
        }
        else if(i >= str.length/2) {
            y += str.charAt(i);
        }
    }

    console.log(x);
    console.log(y);
}

halfDivideString(str);