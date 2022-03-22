
let timer
let deleteFirstPhoto



async function start(){
   try{
    const response=await fetch('https://dog.ceo/api/breeds/list/all')
    const data= await response.json();

    createBreedList(data.message);

   } catch(error){
       console.log('Notice:There is an error with Fetching, Please retry again after checking your network')

   }
}

start()

function createBreedList(breedList){
document.getElementById("breed").innerHTML=
`
<select onchange="loadImagesBreed(this.value)">
            <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function(breed){
        return `<option> ${breed} </option>`
        }).join('')}
        </select>
`
}

async function loadImagesBreed(dog){
    if(dog!=="Choose a dog breed"){
       const response=await fetch(`https://dog.ceo/api/breed/${dog}/images`);
       const data= await response.json();
       createSlide(data.message)
     
    }

}

function createSlide(image){
    let currentPosition=0
    clearInterval(timer);
    clearTimeout(deleteFirstPhoto);

    if(image.length>1){


    document.getElementById('slideshow').innerHTML=
    `
    <div class="slide" style="background-image:url('${image[0]}')"></div>
    <div class="slide" style="background-image:url('${image[1]}')"></div>
    `
     currentPosition+=2
     if(image.length===2)currentPosition=0
     timer=setInterval(nextSlide, 3000)
    }else{
        document.getElementById('slideshow').innerHTML=
    `
    <div class="slide" style="background-image:url('${image[0]}')"></div>
    <div class="slide"></div>
    `
    }
     
     function nextSlide(){
         document.getElementById('slideshow').insertAdjacentHTML("beforeend", `<div class="slide" style="background-image:url('${image[currentPosition]}')"></div>`)
         deleteFirstPhoto=setTimeout(function(){
             document.querySelector(".slide").remove()
         },1000)
         if(currentPosition+1>=image.length){
        currentPosition=0;
         }else{
             currentPosition++; 
         }
     }
}
 




/* const express=require('express');
const app=express();

app.listen(3000, ()=>
    console.log('You are connected to 3000'));
    app.use(express.static('public')) */







/* class bankAccount{
    constructor(name, bankBalance=0.0){
        this.name=name;
        this.bankBalance=bankBalance
    }
    deposit(amount){
        this.bankBalance+=amount
    }
    withdraw(amount){
        if(this.bankBalance<=amount || this.balance<=0){
            console.log(`${this.name}'s balance is not enough. Your balance is ${this.bankBalance}`)
            return;
        } else{
            this.bankBalance-=amount;
        }
    }
    checkBalance(amount){
        console.log(`${this.name}'s balance is ${this.bankBalance}`);
    }

}

class Savings extends bankAccount{
    constructor(name,bankBalance=1000){
        super(name, bankBalance);
        this.interest=0.70;
        
    }
    getInterest(periodsMonths){
        return this.interest * this.bankBalance *(periodsMonths/12);
    }
    condition(amount){
        if(amount<=999){
            console.log(`You can not save it. Your balance is${this.bankBalance}`)
        }else{
            console.log(`You save it successfully.`)
        }
    }

}

const bertrand=new bankAccount("Busokoza");
bertrand.withdraw(7000);

const frank=new bankAccount('Frank');

frank.deposit(5000);
frank.checkBalance()
frank.deposit(4000);
frank.deposit(5000);
frank.withdraw(6000);
frank.withdraw(1000);
frank.deposit(3000);
frank.checkBalance();
frank.withdraw(20000)

const yannick=new Savings('Jonny');
yannick.condition(4000);
yannick.getInterest(1000);
yannick.checkBalance();
yannick.deposit(9000);
yannick.checkBalance();
yannick.withdraw(6000);
yannick.checkBalance();
yannick.getInterest(6); 
yannick.condition(200);

const { write } = require('fs');
const http=require('http');

const port=3000;
const fs=require('fs')
const server=http.createServer(function(req, res){
    res.write(200, {'content':'type/html'});
    fs.readFile("index.html", function(error){
        if(error){
            res.writeHead(404);
            res.write('There is an error, the server cannot be found');
        }else{
            res.write('You are connected to the server')
        }
        res.write(end);
    })

})

server.listen(function(error){
    if(error){
        console.log(`You cannot get connected to this` +port)
    }else{
        console.log(`You are connected to this ` +port);
    }
})


 class transferMoney{
    constructor(name, balance=0.0, location){
        this.name=name;
        this.balance=balance;
        this.location=location;
    }
    sendMoney(amount){
        if(amount>=this.balance){
            console.log(`We're sorry you can not this amount. Retry again`)
        }else{
            this.balance-=amount;
        }
    }
    receiveMoney(currentAmount=0.0){
        console.log(`${this.balance+=currentAmount}`);
        if(currentAmount>=10000){
            console.log(`Thank you for sending that big amount.Hope you safe there in ${this.location}`)
         
        }

    }
    withdrawCash(money){
        if(money>=this.balance){
            console.log(`we'are sorry. You're asking much more than what you have. Retry. Your balance is ${this.balance}`)
        }else{
            console.log(`You successfully made operation of ` +money +`Your new balance is ${this.balance}`);
        }
    }
    deposit(amount){
        this.balance+=amount;
    }
    checkBalance(){
        console.log(`${this.name}'s wealth is ${this.balance}`);
    }
}

const sent=new transferMoney("Busokoza", 8000, "Boston");
const frank=new transferMoney("Franck",9000,"California");

sent.receiveMoney(12000);
sent.deposit(90000);
sent.withdrawCash(50000);
frank.checkBalance();
frank.sendMoney(10000);
frank.receiveMoney(10000);  
 
const x=100;
const y=60;
 
if((x===100)||(y===100)||(x+y==100)){
console.log('true')
}else{
    console.log('false');
}

function fileExtension(str){
return str.slice(str.lastIndexOf('.'));
}

console.log(fileExtension('index.html'));
console.log(fileExtension('index.js'))

const today=new Date();

const date= today.getFullYear()+ " - "+(today.getMonth()+1) +" - "+today.getDate();
console.log(date); 

const todayDate=(date=new Date())=>{

    const day=date.getDa()+1;
    const months= date.getMonth()+1;
    const years=date.getFullYear()
  
    return `${day}/${months}/${years}`;
}

console.log(todayDate());



 */

/* class Bank{
    constructor(name, location, hobbies){
        this.name=name;
        this.location=location;
        this.hobbies=hobbies
        this.age=27;
    }
    get(){
        console.log("Hello All of you")
    }
    set(age){
        return this.age;
    }
}

Bank.prototype.method=function(greeting){
    console.log(`You have the age of my grandFather`);
}
const allNames=new Bank('busokoza', "Boston", "football");
console.log(allNames.method());


console.log(Object.keys(allNames));
 */

/* 
let newObject= {
    favorite:'blue',
}

function newOne(object){
    object.color="red";
}


newOne(newObject);

console.log(newObject.color); */

/* class Calculator{
    constructor(first, second){
        this.first=first;
        this.second=second;

    }
 add(){
 return this.first+=this.second

    }

substract(){

    return this.first-=this.second
}
 multiply (){
     return this.first*=this.second
 }
    
 divide(){
     return this.first/=this.second
 }
}

const val=new Calculator()
console.log(val.add(10, 15)); */

