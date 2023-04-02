// პირობითი ბრძანებები

// 1. ახალი მესიჯი


console.log('სალამი შემოგევლე')
let newMessages = true;
if(newMessages) {
    console.log('შენ გაქვს რამდენიმე წაუკითხავი მესიჯი');
}


// 2. ონლაინ მაღაზია

let userBalance = 100; 
let cartTotal = 130;  

if(userBalance >= cartTotal) {
    console.log('გადახდა წარმატებით შესრულდა');
} else {
    console.log('თქვენ არ გაქვთ საკმარისი თანხა');
}


// 3. სტუდენტი გამოცდაზე

let testScore = 75;

if(testScore >= 95) {
    console.log('გილოცავ შენ მოხვდი ნოვატოში');
} else if (testScore >= 70) {
    console.log('გილოცავ შემ მოხვდი კემბრიჯის უნივერსიტეტში');
} else if (testScore >= 50) {
    console.log('გილოცავ შენ მოხვდი გეპეიში');
}


// 4. ფასდაკლებების სისტემა


{
    let adminSale = 20; 
    let frequentClientSale = 15; 
    let studentSale =10; 

    let userBalance = 50;
    let cartTotal = 60;
    if(userBalance >= cartTotal) {
        console.log('გადახდა წარმატებით შესრულდა');
    } else {
        console.log('თქვენ არ გაწვთ საკმარისი თანხა');
    }

    let userIsAdmin = false;
    let userIsFrequentClient = false;
    let userIsStudent = true;
 
    if(userIsAdmin) {
        console.log(20);
    } else if(userIsFrequentClient) {
        console.log(15);
    } else if(userIsStudent) {
        console.log(10);
    }
}    


// 5. თბილისი - ბათუმი


let fuel = 150;

if(fuel >= 10 && fuel < 20) {
    console.log('ამ ბენზინით ჩახვალ იგოეთამდე');
} else if(fuel >= 20 && fuel < 30) {
    console.log('ამ ბენზინით ჩახვალ გორამდე');
} else if(fuel >= 30 && fuel < 50) {
    console.log('ამ ბენზინით ჩახვალ ხაშურამდე');
} else if(fuel >= 50 && fuel < 80) {
    console.log('ამ ბენზინით ჩახვალ ქუთაისამდე');
} else if(fuel = 80) {
    console.log('ამ ბენზინით ჩახვალ ბათუმამდე');
}

// 6. თბილისი - ბათუმი - თბილისი

{
    let fuel = 150;

    if(fuel >= 80 && fuel < 110) {
        console.log('ეს ბენზინი ჩაგიყვანს ქუთაისამდე')
    } else if(fuel >= 110 && fuel < 130) {
        console.log('ეს ბენზინი ჩაგიყვანს ხაშურამდე')
    } else if(fuel >= 130 && fuel < 150) {
        console.log('ეს ბენზინი ჩაგიყვანს გორამდე')
    } else if(fuel >= 150 && fuel < 160) {
        console.log('ეს ბენზინი ჩაგიყვანს თბილისამდე')
    }
}
