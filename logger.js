const currentDate = ()=>{
    return new Date().toTimeString()
}

const currentYear = ()=>{
    return new Date().getFullYear().toString()
}

module.exports ={
    currentDate,
    currentYear
}