const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++){
            // console.log(arr[i]);
            // console.log(arr[j]);
            if(arr[i] + arr[j] === 0)
            return true
        }
    }
    return false
}

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// -> True 

const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if(str[i] === str[j])
            return false;

    return true
}

// console.log(hasUniqueChars('monday'));
// console.log(hasUniqueChars('moonday'));

const isPangram = (str) => {
    let strArr = str.toLowerCase()
    let alp = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for(let i = 0; i < alp.length; i++) {
        if(strArr.indexOf(alp[i]) < 0) {
            return false
        }
    }
    return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("I like cats, but not mice"));
// // -> False

const findLongestWord = (arr) => {
    let longestWord = arr.sort(function(a,b) {
        return b.length - a.length
    })
     word = longestWord[0]
     i = 0
     while( i < word.length){
         i++
     } 
     return i
}
// console.log(findLongestWord(['hi', 'hello']))