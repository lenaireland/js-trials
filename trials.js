// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInfo(acctHolder, acctNumber, busName) {
  console.log(`Account Holder Name: ${acctHolder}`);
  console.log(`Account Holder Number: ${acctNumber}`);
  console.log(`Business Name: ${busName}`);
}

// Add function to print all addresses, including a header
function showAddresses(address_array) {
  console.log('Addresses:');

  for (let address of address_array) {
    console.log(address);
  }
}

// Add function to print phone types and numbers
function showPhoneNums(phNumbers) {
  console.log('Phone Numbers:');

  for (let keyValue of phNumbers) {
    console.log(`${keyValue[0]}: ${keyValue[1]}`);
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const accountTransactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
  accountTransactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);

// Add function to show balance status
function showBalanceStatus(balance) {
  if (balance < 0) {
    console.log('YOU ARE OVERDRAWN');
  } else if (balance >= 0 && balance < 20) {
    console.log('Warning: You are close to zero balance');
  } else {
    console.log('Thank you for your business.');
  }
}

// Add function to show transactions
function showTransactions(transactions, balance) {
  console.log(`Beginning Balance: ${balance}`);

  let type;

  for (let [date, value] of transactions) {
    if (value >= 0) {
      type = 'Deposit';
    } else if (value < 0) {
      type = 'Withdrawal';
    }

    balance += value;

    console.log(`${date}: ${type} of ${value}.  Total balance: ${balance}`);
  }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




