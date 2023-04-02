// ლოგიკური ოპერატორები

// 1. იუთუბის კომენტარი

let userLoggedIn = true;
let videosCommentable = true;
const userCanComment = userLoggedIn && videosCommentable;
console.log(userCanComment);

// 2. სოც ქსელი 

let userIsLoggedIn = true;
let userIsBlocked = false;
const userCanPost = userIsLoggedIn && !userIsBlocked;
console.log(userCanPost);

// 3. ონლაინ მაღაზია

let balance = 100;
let userCartTotal = 150;
const paymentComplete = balance >= userCartTotal;
console.log(paymentComplete);

// 4. კომენტაის წაშლა

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;
const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete);

// 5. ატომური ბომბი

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;
const bombWillLaunch = (presidentKey && presidentKey && generalOfArmiesKey) || masterKey;
console.log(bombWillLaunch);

// 6. პინ კოდი

const userPinCode = 1234;
const currentPinCode  = userPinCode;
const newPinCode = 4321;
const retypeNewPinCode = newPinCode;
const pinChangeComplete = currentPinCode && userPinCode && newPinCode && retypeNewPinCode;
console.log(pinChangeComplete >= 1);

// 7. GAME OVER

let health = 0;
let lives = 0;
const gameOver = (health <= 0) && (lives <= 0);
console.log(gameOver);


// 8. ყავა

let capsuleCount = 10;
let capsulePrice = 2;
let userBalance = 1.99;
let creditCardStatus = userBalance >= capsulePrice;
const paymentCompletee = userBalance - capsulePrice;
console.log(creditCardStatus);


// 9. Hotel booking
{
    let availableRooms = 10; 
    let roomPrice = 40; 
    let discount = 20; 
    let userBalance = 200; 
    let userHasDiscount = true; 
    let userRoomCount = 5; 
    if(userHasDiscount) {
        console.log((userRoomCount * roomPrice) / 100 * discount);
    }
    const paymentComplete = userBalance - (roomPrice * userRoomCount) + userHasDiscount >=0 && userRoomCount <= availableRooms ;
    console.log(paymentComplete);
}