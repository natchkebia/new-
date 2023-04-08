// შესავალი იტერაციებში

// 1. ყველა კენტი რიცხვი 2000-მდე

for(let oddNumber = 1; oddNumber <= 2000; oddNumber += 2) {
    console.log(oddNumber)
}

// 2. ყველა ლუწი რიცხვი -2000 მდე

for(let evenNumber = -2000; evenNumber < 0; evenNumber +=2) {
    console.log(evenNumber)
}


// 
for(let game = 0; game <= 100; game++) {
    if(game == 10) {
        console.log('გილოცავთ, თქვენ გაიარეთ 10 კილომეტრიანი ჩექფოინთი')
    }  else if(game > 10 && game == 25 ) {
        console.log('გილოცავთ, თქვენ გაიარეთ 25 კილომეტრიანი ჩექფოინთი')
    } else if(game > 25 && game == 75) {
        console.log('გილოცავთ, თქვენ გაიარეთ 75 კილომეტრიანი ჩექფოინთი')
    } else if(game > 75 && game == 90) {
        console.log('გილოცავთ, თქვენ გაიარეთ 90 კილომეტრიანი ჩექფოინთი')
    }
    console.log(game)
}


// 4. კენტი რიცხვების ჯამი

{
    let Number = 0
    for(let oddNumber = 1; oddNumber <= 25000; oddNumber +=2){
        Number = Number + oddNumber
    }
    console.log(Number)
}


// 5. ჯამი და ჯამი

{
    let Number = 0;

    for(let oddNumber = 501; oddNumber <= 800; oddNumber +=2) {
        Number = Number + oddNumber
    }
    console.log(Number)

    for(let evenNumber = 1000; evenNumber <= 2000; evenNumber +=2) {
        Number = Number + evenNumber
    }
    console.log(Number)
}

// 6. მათემატიკური ფაქტორიალი

let number = 1;
for(let x = 5; x > 1; x-- ) {
    number = number * x
}
console.log(number)


// 7. 300-is გამყოფები

let num = 300;
for (let x = 0; x <= num; x++) {
    if (num % x == 0) {
        console.log(x);
    }
}

// 8. რიცხვის გამყოფები
{
    let digits = 0
    let number = 10
    for(let x = 0; x <= number; x++) {
    if(number % x == 0) {
        digits = digits + x
    }
    } console.log(digits)
}


// 9. მარტივი რიცხვი

// მარტივი რიცხვი ეწოდება რიცხვს, რომელიც იყოფა მხოლოდ 1-სა და თავის თავზე.

let x = 10;
let isPrime = true;

for(let i = 2; i < x; i++) {
    if( x % 2 == 0) {
        isPrime = false;
    }
}  if(isPrime == true) {
    console.log(`${x} მარტივი რიცხვია`)
} else {
    console.log(`${x} შედგენილი რიცხვია`)
}


