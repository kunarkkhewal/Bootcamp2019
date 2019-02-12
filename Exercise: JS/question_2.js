var palindrome = prompt("Enter string to check Palindrome: ");

var newString = reverseString(palindrome);

function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

if(palindrome == newString){
    alert("Entered string is palindrome!!!");
}else{
    alert("Sorry, String is not Palindrome");
}