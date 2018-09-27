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
function printAccount(acctHolder, acctNumber, busName) {
  console.log(`Account Holder Name: ${acctHolder}`);
  console.log(`Account Holder Number: ${acctNumber}`);
  console.log(`Business Name: ${busName}`);
}

// Add function to print all addresses, including a header
function showAddresses(addressArray) {
  console.log('Addresses:');

  for (let address of addressArray) {
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
let startBalance = 1000;

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

    return balance;
  }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info

const accountInfo = {
  accountHolder: accountHolder,
  accountNumber: accountNumber,
  businessName: businessName,
  addresses: addresses,
  phoneNumbers: phoneNumbers,
  accountTransactions: accountTransactions,
  startBalance: startBalance
};

// Function to add customer attributes
function addProperties(melon = 'Cantaloupe', numPets = 0) {
  accountInfo.melon = melon;
  accountInfo.numPets = numPets;
}

// Add attributes for this user
addProperties('Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan

let income = 100000;

// Function to return loan rate
function calcLoanRate(annualIncome) {
  let preferred = false;
  let rate = 0.04;

  if (accountInfo.melon === 'Casaba' || accountInfo.numPets > 5) {
    preferred = true;
  }

  if (annualIncome < 100000 && preferred === false) {
    rate = 0.08;
  } else if (annualIncome < 100000 && preferred === true) {
    rate = 0.05;
  } else if (annualIncome >= 100000 && annualIncome < 200000 && preferred === false) {
    rate = 0.07;
  }

  return [preferred, rate];
}

// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function printReport() {
  let endbalance = showTransactions(accountTransactions, startBalance);
  let [isPreferred, loanrate] = calcLoanRate(income);

  console.log(`${accountInfo.accountHolder}`);
  // this line isn't working because need to loop through map items
  console.log(`${accountInfo.phoneNumbers}`);
  console.log(`Starting balance: $${startBalance}, Ending balance: $${endbalance}`);

  if (isPreferred === true) {
    console.log(`Congratulations on being a premiere customer!`); 
  }
}


// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




