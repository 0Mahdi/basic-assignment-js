//Problem No : 1

function seerToMon(seers){
    if ( typeof seers != 'number'){
        return 'Please give a number'
    };
    if (seers<40) {
       return 'Please give a big number' 
    };
    
    let maund = seers / 40;
    return maund;
};

//Test Cases
let maunds = seerToMon(1220);
console.log('My seers in maund', maunds);


//Problem No : 2


function totalSales(shirt, pant, shoes) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;

    //Clothes Calculation
    const shirtQuantity = shirt * shirtPrice;
    const pantQuantity = pant * pantPrice;
    const shoesQuantity = shoes * shoesPrice;

    //adding all clothes 
    const totalClothes = shirtQuantity + pantQuantity + shoesQuantity;

    return totalClothes;
};

//Test Cases
const totalValue = totalSales (5, 5, 10);
console.log('All clothes are total value',totalValue);


//Problem 3


function deliveryCost(quantity) {
    if (quantity <= 100) {
      return quantity * 100;
    } else if (quantity <= 200) {
      return 10000 + (quantity - 100) * 80;
    } else {
      return 10000 + 80 * 100 + (quantity - 200) * 50;
    }
  }
  
// Test cases
const totalCost = deliveryCost(150)
console.log('Total delivery cost', totalCost);

//Problem 4

function perfectFriend(friendsArray) {
    for (let i = 0; i < friendsArray.length; i++) {
      let name = friendsArray[i];
      let charCount = countDistinctCharacters(name);
      if (charCount === 5) {
        return name;
      }
    }
    return null;
};
  
function countDistinctCharacters(str) {
    let distinctCharacters = {};
    for (let i = 0; i < str.length; i++) {
      distinctCharacters[str[i]] = true;
    }
    return Object.keys(distinctCharacters).length;
};
  
// Test case
var friends = ["Ali", "Bob", "Jacky", "Ella", "Hena"]; 
var perfectFriends = perfectFriend(friends);
  
console .log ("Perfect Friend is", perfectFriends);
  