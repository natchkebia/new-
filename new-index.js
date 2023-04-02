// ინფორმაციის ტიპები

// 1. მისალმების ტექსტი

let userFirstName = 'თამარ';
console.log('სალამი ' + userFirstName);


// 2. ონლაინ მაღაზია


let userBalance = 100;
let cartTotal = 140; 
let x = cartTotal - userBalance
console.log(x)
if(userBalance >= cartTotal) {
    console.log('გადახდა წარმატებით შესრულდა');
} else {
    console.log('თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ ჩარიცხოთ' + x + 'ლარი ოპერაციის დასასრულებლად');
}


// 3. გამოცდის ქულა


let maxScore = 100; 
let barrier = 51;
let studentScore = 87;

if(studentScore >= barrier) {
    console.log('გილოცავთ, თქვენ გადალახეთ' + barrier + 'ქულიანი ბაიერი' + (studentScore / maxScore) + 'ქულით');
} else {
    console.log('ვწუხვარ, თქვენ ვერ გადალახეთ' + barrier + 'ბარიერი' + (studentScore / maxScore) + 'ქულით');
}

// დავალებაში ასე იყო მაგრამ x რატო უნდა გავყოთ y-ზე ვერგავიგე, როცა უბალოდ x ითაც კეთდება და ორივე ვერსია გავაკეთე რავიცი :D
// ვწუხვარ, თქვენ ვერ გადალახეთ z ქულიანი ბარიერი x/y ქულით” 
// სადაც z არის ბარიერის ქულა,  x არის სტუდენტის მიერ მიღებული ქულა და y არის მაქსიმალური ქულა.

if(studentScore >= barrier) {
    console.log('გილოცავთ, თქვენ გადალახეთ' + barrier + 'ქულიანი ბაიერი' + studentScore + 'ქულით');
} else {
    console.log('ვწუხვარ, თქვენ ვერ გადალახეთ' + barrier + 'ბარიერი' + studentScore + 'ქულით');
}


// 4. მიტანის სერვისი

let shippingIsPossible = true; 
const shipping = shippingIsPossible ? 'თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდლომია' : 'თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის';
console.log(shipping)
 
// ან
if(shippingIsPossible) {
    console.log('თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდლომია');
} else {
    console.log('თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის')
}

// 5. პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი
{
    let userLoggedIn = true; 
    let userFirstName = 'თამარ'; 
    let userIsFemale = true;
    let userSex = userIsFemale ? 'ქალბატონო' : 'ბატონო';

    if(userLoggedIn) {
        console.log('სალამი' + userSex + userFirstName);
    } else {
        console.log('დროებით' + userSex + userFirstName)

    }
}


// 6. ChatGPT-ის ლიმიტომეტრი

let userQuestions = ['რა მეშველება?', 'რა მეშველება?', 'რა მეშველება?', 'რა მეშველება?', ':D'];
userQuestions[24] = 'კაცმა არისიც რა გამოვა';
console.log(userQuestions);
if(userQuestions.length == 25) {
    console.log('შემდეგი კითხვის დასმას შეძლებთ 3 საათში');
}

// 7. ფიტნეს აპლიკაცია

let userWeights = [80, 78, 75, 70,];
let goal = 60;
console.log('შედეგის მიღწევამდე დაგრჩა' + (userWeights[userWeights.length - 1] - goal) + 'კილო');


// 8. როგორ სწავლობს ჩემი ბიჭი?

let gigosTestResults = [45, 50, 47, 78, 49, 29, 63, 92, 79, 85];
if((gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) > 0 && (gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) < 10) {
    console.log('რავიცი ნიჭიერია მაგრამ ზამაცი');
} else if((gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) > 10) {
    console.log('კარგი შვილი გყავთ ქალბატონო');
} else if((gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) <= 0 ) {
    console.log('უხ გიგო გიგო');
}


// 9. როგორ სწავლობს ჩემი ბიჭი? ვერსია 2

let gigosResults = [45, 50, 47, 78, 49, 29, 63, 92, 79, 85];
console.log(gigosResults[gigosResults.length - 1] - gigosResults[0]);


// 10. ეროვნულები

{
    let gigosResults = [40, 25, 78, 39];
    let barrier = 25;
    if((gigosResults[0] <= 25 || gigosResults[1] <= 25 || gigosResults[2] <= 25|| gigosResults[3]) <= 25) {
        console.log('ჩაიჭერი ძმაო')
    } else {
        console.log('ჩააბარეეე')
    }
}
