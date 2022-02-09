const math= function number(num,num2){
    let result=num+num2;
    return result
}

//console.log(math(10,11))

const addNumber=(a,b)=> (a+b)

//console.log(addNumber(30,40))

const addNumber2=() =>{
    let num=40;
    let num2=40;
    let result=num+num2;
    return result
}


//console.log(addNumber2())

const squre= () =>{
    let num=30;
    let result=num*num;
    return result
}
//console.log(squre())

const squre2=num =>{
    let result=num*num;
    return result
}
//console.log(squre2(4))

const squre3=num=>num*num
//console.log(squre3(4))

const friendName=["Zayed Khan","Nipun","Eliyas Kanchon","Dipjol","Eliyas Kobra"]
//friendName.map(friends => console.log("Hi "+friends))
const biggerName= friendName.filter(person => person.length>10 )
//console.log(biggerName)
const biggerName2=friendName.find((person) => person.length>10)
console.log(biggerName2)