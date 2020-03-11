// // This is my data 
// var opcode = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 1, 6, 19, 23, 1, 13, 23, 27, 1, 6, 27, 31, 1, 31, 10, 35, 1, 35, 6, 39, 1, 39, 13, 43, 2, 10, 43, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 13, 59, 63, 2, 63, 9, 67, 1, 5, 67, 71, 2, 13, 71, 75, 1, 75, 5, 79, 1, 10, 79, 83, 2, 6, 83, 87, 2, 13, 87, 91, 1, 9, 91, 95, 1, 9, 95, 99, 2, 99, 9, 103, 1, 5, 103, 107, 2, 9, 107, 111, 1, 5, 111, 115, 1, 115, 2, 119, 1, 9, 119, 0, 99, 2, 0, 14, 0];
// // this for loop goes through the length of my data above but it does not increment by 1 it increments by four that way I get each of the individual opcodes but can still effect the rest
// for (i = 0; i < opcode.length; i += 4) {
//     // This is so that I have the original opcode[i] saved to be used and influenced more than once 
//     var zero = opcode[i]
//     //This takes the value of the place of the second number in the set of four
//     var one = opcode[opcode[i + 1]];
//     //This takes the value of the place of the third number in the set of four
//     var two = opcode[opcode[i + 2]];
//     // This gets the place where the new number is going to go
//     var three = opcode[i + 3];
//     // This if statement checks if the original opcode[i] of each opcode set is equal to 1, 2, or 99
//     if (zero === 1) {
//         //If it was equal to one it adds
//         opcode[three] = one + two;
//     } else if (zero === 2) {
//         //if it was equal to 2 it multiplies
//         opcode[three] = one * two;
//         //if it was equal to 99 it ends
//     } else if (zero === 99) {
//         break;
//     }


// }
//part 2
// These are global vars that make the whole thing work they will be changed many times
var noun = 0;
var verb = 0;
//putting the global vars to test the info
var opcodes = [1, noun, verb, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 1, 6, 19, 23, 1, 13, 23, 27, 1, 6, 27, 31, 1, 31, 10, 35, 1, 35, 6, 39, 1, 39, 13, 43, 2, 10, 43, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 13, 59, 63, 2, 63, 9, 67, 1, 5, 67, 71, 2, 13, 71, 75, 1, 75, 5, 79, 1, 10, 79, 83, 2, 6, 83, 87, 2, 13, 87, 91, 1, 9, 91, 95, 1, 9, 95, 99, 2, 99, 9, 103, 1, 5, 103, 107, 2, 9, 107, 111, 1, 5, 111, 115, 1, 115, 2, 119, 1, 9, 119, 0, 99, 2, 0, 14, 0];
// This while loop contains my code from the first one to run through the info but with the new values of noun and verb in places 1 and 2, the while loop will close when noun equals 100
while (noun <= 99) {
    for (i = 0; i < opcodes.length; i += 4) {
        // This is so that I have the original opcode[i] saved to be used and influenced more than once 
        var zero = opcodes[i]
        //This takes the value of the place of the second number in the set of four
        var one = opcodes[opcodes[i + 1]];
        //This takes the value of the place of the third number in the set of four
        var two = opcodes[opcodes[i + 2]];
        // This gets the place where the new number is going to go
        var three = opcodes[i + 3];
        // This if statement checks if the original opcode[i] of each opcode set is equal to 1, 2, or 99
        if (zero === 1) {
            //If it was equal to one it adds
            opcodes[three] = one + two;
        } else if (zero === 2) {
            //if it was equal to 2 it multiplies
            opcodes[three] = one * two;
            //if it was equal to 99 it ends
        }
    }
    //This is to increase verb so when noun gets to its max it is put back to zero and verb goes up by one to test all of verbs numbers
    if (noun == 99) {
        noun = 0;
        ++verb;
    }
    //This is part of my safety net so if something goes wrong in the code and the correct number is not found then when all the values have been tested the loop will end 
    if (verb == 99) {
        break;
    }
    //This checks if the correct number was found on this iteration and if it was the program ends and the number needed to submit is console logged
    if (opcodes[0] == 19690720) {
        console.log(100 * noun + verb)
        break;
    }
    //this increases noun by one so that all of the values of noun can be tested
    ++noun;
    //This resets the data set so that the changed numbers are not changed again
    var opcodes = [1, noun, verb, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 1, 6, 19, 23, 1, 13, 23, 27, 1, 6, 27, 31, 1, 31, 10, 35, 1, 35, 6, 39, 1, 39, 13, 43, 2, 10, 43, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 13, 59, 63, 2, 63, 9, 67, 1, 5, 67, 71, 2, 13, 71, 75, 1, 75, 5, 79, 1, 10, 79, 83, 2, 6, 83, 87, 2, 13, 87, 91, 1, 9, 91, 95, 1, 9, 95, 99, 2, 99, 9, 103, 1, 5, 103, 107, 2, 9, 107, 111, 1, 5, 111, 115, 1, 115, 2, 119, 1, 9, 119, 0, 99, 2, 0, 14, 0];
}