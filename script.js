// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

function firstReverse (str) {

    var splitInput = str.split("");
    var reverseInput = splitInput.reverse();
    var joinInput = reverseInput.join("");

    // console.log(joinInput);
    return joinInput;
}

firstReverse('coderbyte')

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) {
    
    var factorial = 1;
    
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }

    // console.log(factorial);
    return factorial;
}

FirstFactorial(18);

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {

    var charCount = 0;

    

}