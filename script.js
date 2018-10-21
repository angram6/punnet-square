var allelePairs = [
    ['',''],
    ['',''],
    ['',''],
    ['','']
]

var parent1Allele1 = '';

var parent1Allele2 = '';

var parent2Allele1 = '';

var parent2Allele2 = '';

var topLeftBox = [
    document.getElementById('allele-top-left-1'),
    document.getElementById('allele-top-left-2')
];

var topRightBox = [
    document.getElementById('allele-top-right-1'),
    document.getElementById('allele-top-right-2')
];

var bottomLeftBox = [
    document.getElementById('allele-bottom-left-1'),
    document.getElementById('allele-bottom-left-2')
];

var bottomRightBox = [
    document.getElementById('allele-bottom-right-1'),
    document.getElementById('allele-bottom-right-2')
];

var parent1Inputs = [
    document.getElementById('input-top-1'),
    document.getElementById('input-top-2')];
var parent2Inputs = [
    document.getElementById('input-left-1'), 
    document.getElementById('input-left-2')];

var calculateButton = document.getElementById('calculate-btn');

var percentageList = document.getElementById('percentage-list');


calculateButton.onclick = function(){
    generateAlleleNames() // beginning of program
}

function renderAlleles(){
    topLeftBox[0].innerHTML = allelePairs[0][0];
    topLeftBox[1].innerHTML = allelePairs[0][1];
    topRightBox[0].innerHTML = allelePairs[1][0];
    topRightBox[1].innerHTML = allelePairs[1][1];
    bottomLeftBox[0].innerHTML = allelePairs[2][0];
    bottomLeftBox[1].innerHTML = allelePairs[2][1];
    bottomRightBox[0].innerHTML = allelePairs[3][0];
    bottomRightBox[1].innerHTML = allelePairs[3][1];
} 

function isDominant(allele) {
    if( allele == allele.toUpperCase()) return true
    else return false
}

//Makes the different combination of allele pairs from parent1 & parent2
function generateAlleleNames(){ 
    parent1Allele1 = parent1Inputs[0].value
    parent1Allele2 = parent1Inputs[1].value
    parent2Allele1 = parent2Inputs[0].value
    parent2Allele2 = parent2Inputs[1].value

    allelePairs[0][0] = parent1Allele1
    allelePairs[0][1] = parent2Allele1

    allelePairs[1][0] = parent1Allele2
    allelePairs[1][1] = parent2Allele1

    allelePairs[2][0] = parent1Allele1
    allelePairs[2][1] = parent2Allele2

    allelePairs[3][0] = parent1Allele2
    allelePairs[3][1] = parent2Allele2

    allelePairs[0].sort()
    allelePairs[1].sort()
    allelePairs[2].sort()
    allelePairs[3].sort()


//     if(isDominant(parent1Allele1)){
//         allelePairs[0][0] = parent1Allele1 
//         allelePairs[0][1] = parent2Allele1
        
//     } else {
//         allelePairs[0][1] = parent1Allele1
//         allelePairs[0][0] = parent2Allele1
//     }

//    if(isDominant(parent1Allele2)){
//         allelePairs[1][0] = parent1Allele2
//         allelePairs[1][1] = parent2Allele1
//     } else {
//         allelePairs[1][1] = parent1Allele2
//         allelePairs[1][0] = parent2Allele1
//     }   

//     if(isDominant(parent1Allele1)){
//         allelePairs[2][0] = parent1Allele1
//         allelePairs[2][1] = parent2Allele2
//     } else {
//         allelePairs[2][1] = parent1Allele1
//         allelePairs[2][0] = parent2Allele2
//     }  

//     if(isDominant(parent1Allele2)){
//         allelePairs[3][0] = parent1Allele2
//         allelePairs[3][1] = parent2Allele2
//     } else {
//         allelePairs[3][1] = parent1Allele2
//         allelePairs[3][0] = parent2Allele2
//     }

    renderAlleles()
    calculatePercentages()
} 


function calculatePercentages(){
    percentageList.innerHTML='';
    var genotypes = {};
    
    var genotypeTopLeft = allelePairs[0][0] + allelePairs[0][1];
    var genotypeTopRight = allelePairs[1][0] + allelePairs[1][1];
    var genotypeBottomLeft = allelePairs[2][0] + allelePairs[2][1];
    var genotypeBottomRight = allelePairs[3][0] + allelePairs[3][1];

    if ( !genotypes[genotypeTopLeft] ) genotypes[genotypeTopLeft] = 1 
    else genotypes[genotypeTopLeft] +=1;

    if ( !genotypes[genotypeTopRight] ) genotypes[genotypeTopRight] = 1 
    else genotypes[genotypeTopRight] +=1;

    if ( !genotypes[genotypeBottomLeft] ) genotypes[genotypeBottomLeft] = 1 
    else genotypes[genotypeBottomLeft] +=1;

    if ( !genotypes[genotypeBottomRight] ) genotypes[genotypeBottomRight] = 1 
    else genotypes[genotypeBottomRight] +=1;

    console.log(genotypes);

    for (var key in genotypes) {
        var item = document.createElement('p')
        var percentage = genotypes[key]/4 
        item.innerHTML= key + ' = ' + percentage*100 + '%'
        percentageList.appendChild(item)
    }
    
}

// function sort(){

// var letters = ['a','s','d','f','E','g','h','j','k','l','Q','A']

// console.log(letters)

// letters.sort()

// console.log(letters)

// }

// sort()