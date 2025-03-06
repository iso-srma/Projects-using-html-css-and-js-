// function isPalindrome(num) {
//     let str = num.toString();
//     let revStr = str.split('').reverse().join('');
    
//     if (str === revStr) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let num = 1211;
// if (isPalindrome(num)) {
//     console.log(num + " is a palindrome.");
// } else {
//     console.log(num + " is not a palindrome.");
// }


function isPalindrome() {
    let num = document.getElementById("numberInput").value;
    let str = num.toString();
    let revStr = str.split('').reverse().join('');
    
    if (str === revStr) {
        document.getElementById("result").innerHTML = num + " is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = num + " is not a palindrome.";
    }
}
