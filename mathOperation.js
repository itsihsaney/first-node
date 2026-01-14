const name = "Ihsan";
const luckyNumber = 7;

function add (a,b) {
    return a+b
}

function substract (a,b){
    return a-b
}

module.exports.add = add ;
module.exports.substract = substract ;
module.exports.name = name ;

module.exports ={
     add ,
     substract ,
     name 
}



