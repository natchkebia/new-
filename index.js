// 1. იუთუბის კომენტარი

let userLoggedIn = true
let videosCommentable = true
const userCanComment = userLoggedIn && videosCommentable
console.log(userCanComment)

// 2. სოც ქსელი 

let userIsLoggedIn = true
let userIsBlocked = false
const userCanPost = userIsLoggedIn && !userIsBlocked
console.log(userCanPost)

// 3. ონლაინ მაღაზია

let balance = 100
let userCartTotal = 150
const paymentComplete = balance >= userCartTotal
console.log(paymentComplete)

// 4. კომენტაის წაშლა

let userIsAdmin = false
let userIsModerator = false
let userIsCommentAuthor = true
const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor
console.log(userCanDelete)

// 5. ატომური ბომბი

let presidentKey = false
let primeMinisterKey = false
let generalOfArmiesKey = false
let masterKey = true
const bombWillLaunch = (presidentKey && presidentKey && generalOfArmiesKey) || masterKey
console.log(bombWillLaunch)