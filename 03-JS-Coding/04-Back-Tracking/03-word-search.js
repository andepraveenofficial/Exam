// Word Search	

/*
Description :

Given a 2D board and a word, find if the word exists in the grid.	
*/

// Pending
const matrix = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
let word = "ABCCED";


let counter = 0;
let wordStartIndex = []
for (let row=0; row<matrix.length; row++){
    for (let col=0; col<matrix[0].length; col++){
        const item = matrix[row][col];
        if ((word[counter]) === item){
            wordStartIndex.push([row, col])
        }
    }
}

console.log(wordStartIndex)