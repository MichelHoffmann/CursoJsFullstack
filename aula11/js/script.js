let varA = "A";
let varB = "B";
let varC = "C";
let varAA = varA;

varA = varB;
varB = varC;
varC = varAA;

//SOLUÇÃO MAIS ATUALIZADA
// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
