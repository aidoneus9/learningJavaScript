'use strict';
/*
// <143. Simple Array Methods>
// ✍️ methods are simply functions that we can call on objects. So basically, they are functions attached to objects. So if we have array methods, that means that arrays themselves are also objects and so these array methods are simply functions that are attached to all arrays that we create in JavaScript.
// 📝 why all arrays have access to this methods: prototypal inheritance

// SLICE 🗡️
// ⚠️ this does not mutate the original arr array. Instead it returns a new array, so a copy of the array, but only with the extracted parts.
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
// -1 is always just the last element of any array
console.log(arr.slice(1, -2)); // ['b', 'c']
// except the last two

// simply create a shallow copy of any array
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// 👉 previously...
// creating new array, and then expanding the original array into that
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']
// personal preference; the only time you really need to use the slice method is when you want to chain multiple methods together, so calling one after the other

// SPLICE
// ⚠️ it does actually change the original array, so it mutates the array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// original array
// console.log(arr); // ['a', 'b']

// In practice, most of the time the value that the splice method returns, doesn't even interest us. All we are usually interested in is to just delete one or more elements from an array using splice.
// and one pretty common use case is to simply remove the last element of an array
// arr.splice(-1);
// console.log(arr); // ['a', 'b', 'c', 'd']

// 📎 MDN documentation
// ⚠️ the second parameter is called deleteCount(not the begin parameter): the number of elements that we want to delete
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); // ['a', 'd']

// REVERSE 🙃
// ⚠️` does actually mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];
console.log(arr2.reverse()); // ['f', 'j', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'j', 'g', 'h', 'i', 'j']

// CONCAT 🖇️
// doesn't mutate the original array
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// 👉 previously...
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// personal preference

// JOIN 🪡
console.log(letters.join(' - ')); // a - b - c - d - e - f - j - g - h - i - j
*/

// <144. The new at Method>
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// 📌 getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64
// console.log(arr.at(-2)); // 11
// at method: get the last element of an array || start counting from the end of an array || do something called 'method chaining'
// []: quickly get a value from an array(ex. first element)

// ➕ also works on strings
console.log('choco'.at(0)); // c

// <145. Looping Arrays: forEach>
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

// forEach 🛞
// 1. to loop over the array, and in each iteration it will execute the callback function
// 2. as the forEach method calls the callback function in each iteration, it will pass in the current element of the array as an argument

console.log('---- FOREACH ----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
// 👉 this is exactly the concept that I explained in the last section, when I said that we use a callback function to tell another higher-order function exactly what it should do, and so in this case we tell forEach that in each iteration, it should log one of these two strings here to the console. So we give the forEach method instructions by giving it a callback function which contains these instructions.

// 📌 access to a counter variable
// ⚠️ notice that the order of the parameters is different in both scenarios
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// ✍️ one fundamental difference between the two of them is that YOU CANNOT BREAK OUT OF A FOREACH LOOP. So the continue and break statements do not work in a forEach loop at all. So instead, forEach will always loop over the entire array and there is nothing that you can do about it.
// 👉 if you really need to break out of a loop, then you have to keep using the for of loop. But other than that, it really comes down to your personal preference.

// <146. forEach With Maps and Sets>
// Map 🧭
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set 🎫
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// USD: USD
// GBP: GBP
// EUR: EUR
// what this means is that the key here is exactly the same as the value because a set doesn't have keys and it doesn't have indexes, either. And so there is no value that would make sense for the key.

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
// _(underscore): in JavaScript, it means a throwaway variable, a variable that is completely unnecessary

// <147. PROJECT: "Bankist" App>
// 💡 one object for each account and you could ask why not use a map instead of an object. The thing is that we're gonna pretend that all these data is coming from a Web API. And whenever we get data from an API, this data usually comes in a form of objects.

// <148. Creating DOM Elements>

// BANKIST APP
// https://bankist.netlify.app/

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ✍️ Now we could simply start writing our code out here in the global context. However,that is not a good practice. So whenever we do something like this, it's always best to create a function.
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // The first thing is to essentially empty the entire container, and only then we start adding new elements.
  // ⚠️ textContent simply returns the text itself, while HTML returns everything, including the HTML. So all the HTML tags will be included.
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // ⚠️ create a COPY: using the SLICE method and not the spread operator; here we are in the middle of a chain.

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type    movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // insertAdjacentHTML(): this method accepts two strings. The first string is the position in which we want to attach the HTML. The second argument is the string containing the HTML that we want to insert.
    // 📎 MDN
  });
};
// because this function should receive one array of movements and then work with that data. So in this case, that's the movements that it should display in the user interface. And so it's a good practice to pass the data into a function, instead of, for example, having this function work with a global variable. That would work as well, but it's a lot better to pass that data directly into the function.
// 👉 Instead of working with global variables, start passing the data that function needs actually into that function.

// console.log(containerMovements.innerHTML);
// we can also use innerHTML to read data

// <150. Data Transformations: map, filter, reduce>
// ✍️ these are the methods that we use to CREATE NEW ARRAYS based on transforming data from other arrays

// 🍫 map: yet another method that we can use to loop over arrays. So, map is actually similar to the forEach method, but with the difference that map creates a brand new array based on the original array. So essentially the map method takes an array, loops over that array, and in each iteration, it applies callback function that we specify on our code to the current array element.
// 👉 usually way more useful than in forEach method, because forEach simply allows us to do some work with each array element. But map on the other hand, builds us a brand new array containing the results of applying an operation to the original array.

// 🍫 filter: is used to filter for elements in the original array which satisfy a certain condition.

// 🍫 reduce: is used to boil down all the elements of the original array into ONE SINGLE VALUE(not new array)(snowball effect)

// <151. The map Method>
// convert movements from euros to US dollars
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// for of loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// ✍️ keep in mind why we actually get access to these 2 parameters here(286). All we do here is to pass this callback function into the map method. But we do not call this function by ourselves. It is the map method who we'll call this function for each of the array elements in the movement array. Each time that the map method calls or callback, it will simply pass in the current array element as well as the current index and the whole array.
// ✍️ there is a big, big difference between the map method and the forEach method. So before, we printed each line individually to the console, as we were looping over the array. So in each of the iteration, we performed some action that was then visible in the console and we can call this a side effect. So the forEach method creates SIDE EFFECTS. But now, here with this map method, all we did was to return each of the strings from the callback, and so basically they got added into a new array. And then finally we logged that entire array to the console and NOT THE ELEMENTS ONE BY ONE. And so here in this map method we did not create a side effect in each of the iteration. All we did was to build a brand new array.

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
//   }
// }); // it's completely acceptable to have 2 return statements or even more in the same function as long as only one of them is executed
console.log(movementsDescriptions);

/*
// <152. Computing Usernames>
// (250)
const createUsernames = function (user) {
  const username = user
    .toLowerCase() // returns a string
    .split(' ') // available on all strings
    .map(name => name[0]) // ['s', 't', 'w']
    // so we transform name to name at the first position
    .join(''); // stw
  return username;
};
console.log(createUsernames('Steven Thomas Williams'));
*/
// 📌 Now we actually want to compute one username for each of the account holders in our accounts array. 👉 we do not want to create a new array in this situation, all we want to do is to modify the object, so the elements that already exist in the accounts array(197). And so what we want is to simply loop over this array here, and then do something. And so for that, we use forEach.

// ✍️ instead of simply receiving one user, what we want to do is to receive all the accounts. So basically an array of account.
// 👉 each function should actually receive the data that it should work with, instead of using a global variable. We do not want to rely on the accounts array that we already have. But instead, we want to pass it into the function.

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // in this case, the side effects are gonna be to change, so to mutate the original accounts array
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// in this function, we do not return anything, because what we're doing here is to produce a side effect. So we are doing something to this account object here(324), and so there is no need to return anything.
createUsernames(accounts);

const updateUI = function (acc) {
  // 🔖 Display movements
  displayMovements(acc.movements);
  // This method(function) expects a movement argument(as we hovered this function name, VS Code shows it to us).

  // 🔖 Display balance
  calcDisplayBalance(acc);

  // 🔖 Display summary
  calcDisplaySummary(acc);
};

// <153. The filter Method>
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// same with...
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// <154. The reduce Method>
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// This works because in each call of callback function, the accumulator will be the current sum of all the previous values. And so we will really keep adding to this accumulator in each iteration of the loop.
// Finally, we also need to RETURN this value here from the callback. And so this is how the new accumulator can then be used in the next iteration of the loop. So in each loop iteration, we return the updated accumulator(so the current one) + the new current value, and so like this, we can then keep adding to it in the next iteration.
// console.log(balance); // 3840 (one single number)

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// same with...
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
// We always need an external variable(364) whenever we want to use a for loop, and that's fine if you only need one loop, but it starts to become really cumbersome and unpractical when we use many loops for doing many operations.

// below (250)
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
  // (202)
  // label: all the things where we simply want to put some text 📝
};

// 🤔 Why we can set, this property here on this account object that we receive, and it will then set that right here on these objects that we have here?
// 👉 the reason is that all of these references do actually point to the exact same objects in the memory heap. So when we access this account, one object here, so down in the login function, where we create this currentAccount variable, this is of course, not really a copy of the object itself. This is simply another variable which points to the same, so to the original object in the memory heap. So this currentAccount object is exactly one of these objects that we have right here. So one of the objects of the account array. They are the exact same object. They simply have different name. Here it is called account1, but then down here it might be called the currentAccount. Then we use that currentAccount to pass it into this calcDisplayBalance function, and so then inside of that function, it will have even another name. So here it will be called acc, but it's still the same object. It's still pointing to the same place in the heap, so in the memory. Therefore, setting the balance property here on acc(acc.balance), is exactly the same as setting it up there where we first defined the objects.

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Maximum value
// reduce is for boiling down the array into just one single value, BUT THAT VALUE CAN BE WHATEVER WE WANT. So it doesn't have to be a sum. It could be a multiplication or even something completely different, like a string or an object
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
// ⚠️ That's always the big question that we have to ask when we use reduce. So up here(363), when we wanted to add all the numbers together, the purpose of the accumulator was to keep track of the current sum. And so here, the accumulator will be the one that will keep track of the current maximum value.

// <156. The Magic of Chaining Methods>
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr); 🪛
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
// we could chain many other methods here as well, as long as they return NEW ARRAYS. filter returns a new array, the same goes for map, but reduce, will return a value. So here we could now not have chained a map or a filter after this. So we can only chain a method after another one, if the first one returns an array.

// 🪛 FOR DEBUG: we can inspect the current array at any stage of the pipeline using the third parameter of the callback function.

// ⚠️ 1. We should not overuse chaining. So we should try to optimize it, because chaining tons of methods one after the other can cause a real performance issues if we have really huge arrays. So if we have a huge chain of methods, chained one after the other, we should try to compress all the functionality that they do into as little methods as possible
// ex. sometimes we create way more map methods then we actually need, where we could just do it all in just one map call. So when you chain methods like this, keep looking for opportunities of keeping up your code's performance.
// ⚠️ 2. It is a bad practice to chain methods that mutate the underlying original array. And an example of that is the splice method. So you should not chain a method like the splice or the reverse method(in a large scale application).
// It's usually always a good practice to avoid mutating arrays.

// <158. The find Method>
// retrieve one element of an array based on a condition
const firstWithdrawal = movements.find(mov => mov < 0);
// Like the filter method, the find method also needs a callback function that returns a Boolean.
// Unlike the filter method, the find method will actually not return a new array but it will only return the FIRST element in the array that satisfies this condition(the first element in the array for which this operation here becomes true).
console.log(movements);
console.log(firstWithdrawal); // -400

// Fundamental differences between the find and the filter
// 1.The filter method returns all the elements that match the condition while the find method only returns the first one.
// 2. The filter method returns a new array while find only returns the element itself and not an array.

console.log(accounts); // array which contains 4 objects where each of them is one account
// 😊 using find, we can basically find an object in the array based on some property of that object

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// usually the goal of the find method is to just find exactlyl one element, and therefore we usually set up a condition where only one element can satisfy that condition(that's why we used the equal operator)

// ✏️ for of loop

// <159. Implementing Login>

// Event handler
let currentAccount; // It's good thing to have this big important information(464) outside of this function, so that we can then remember it for other actions in our application. For example, when we transfer money, then we need know from which account that money should go.

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
  //   console.log('LOGIN');
  // }
  // Optional chaining(?.): the pin property will only be read in case that the currentAccount actually exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 🔖 Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // (style.css) opacity: 0 -> lock the user in -> opacity: 100(default)
    containerApp.style.opacity = 100;
    // containerApp: the element that we selected previously, which has this app class. This element, we will manipulate the style and in particular, the opacity style.
    // Remember that it's also good to use classes for this, but in this case, it's really just one style.

    // 🔖 Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // because the assignment operator works from right to left, inputLoginPin will become the empty string. Then empty string will also be assigned to inputLoginUsername.
    inputLoginPin.blur(); // input fields lose their focus

    // 🔖 Update UI
    updateUI(currentAccount);
  }
});
// hitting enter === clikcing

// <160. Implementing Transfers>
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // because this one is also a form, and so without this, if we clicked here, then that will reload the page
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// <161. The findIndex Method>
// findIndex returns the index of the found element and not the element itself.

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23): only search for a value that is in the array.
    // findIndex(): we can create a complex condition, and it can be anything that returns true or false.

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// ✍️
// 1. Both the find and findIndex methods get access to also the current index and the current entire array. So as always, besides the current element, these other two values are also available. But in practice, I never found these useful.
// 2. Both the find and findIndex methods were added to JavaScript in ES6. And so they will not work in like super old browsers.

// <162. some and every>
console.log(movements);

// INCLUDES: EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
// same with...
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// (528)
// it only grants a loan if there is at least one deposit with at least 10% of the requested loan amount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Clear input fields
    inputLoanAmount.value = '';
  }
});

// EVERY
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// DRY PRINCIPLE: Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// <163. flat and flatMap>

//  🪜↘️🪜↘️ flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8] -> the flat method only goes one level deep when flattening the array
console.log(arrDeep.flat(1)); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// ❓ The bank itself wants to calculate the overall balance of all the movements of all the accounts.
// -> 1. we have all these movements stored in arrays
// -> 2. these arrays are inside the objects in the accounts array

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements); // [Array(8), Array(8), Array(8), Array(5)]
const allMovements = accountMovements.flat();
console.log(allMovements); // (29)
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance); // 17840

// ⛓️ Chaining methods
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840
// -> using a map first, and then flattening the result is a pretty common operation

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); // 17840
// ⚠️ flatMap ONLY GOES ONE LEVEL DEEP and we cannot change it

// <164. Sorting Arrays>
// 🔤
// 🅰️🅱️ Strings
const owners = ['Zeus', 'Hera', 'Hades', 'Eros'];
console.log(owners.sort()); // ['Eros', 'Hades', 'Hera', 'Zeus']
console.log(owners); // ['Eros', 'Hades', 'Hera', 'Zeus'] <- ⚠️ MUTATED

// 1️⃣2️⃣3️⃣ Numbers
console.log(movements);
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70] <- the result is not what we are expecting; the sort method does the sorting based on strings(1, 2, 3, ...)

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// 1️⃣2️⃣3️⃣ Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; // the number here doesn't really matter as long as it's greater than 0.
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// 3️⃣2️⃣1️⃣ Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// ✏️ strings

// ✍️ if you have a mixed array(strings and numbers), this is not gonna work

// (226)
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// <165. More Ways of Creating and Filling Arrays>

// Manually create an array
const a = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Programmatically create an array
// Empty arrays + fill method
const x = new Array(7);
console.log(x); // [비어 있음 × 7]; whenever we only pass in one argument, then it creates a new empty argument with that length

// ⚠️ we cannot really use this x array for anything. For example, we cannot call the map() method on it to now fill it up
console.log(x.map(() => 5)); // [비어 있음 × 7]

// 👉 There is one method that we can call on this empty array: the fill() method

// x.fill(1); // MUTATE: [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3); // specify a begin parameter: [비어 있음 × 3, 1, 1, 1, 1]
x.fill(1, 3, 5); // the final index is not included: [비어 있음 × 3, 1, 1, 비어 있음 × 2]
console.log(x);

a.fill(23, 4, 6);
console.log(a); // [1, 2, 3, 4, 23, 23, 7]

// Array.from
// Array.from(); // Array here is a function and then on this function object, we call the from() method -> first pass in an object with the length property, then the second argument is a mapping function
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1); // _: a throwaway variable; we do not need this(715) current value at all
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// ✏️ try Array.from() to generate an array with 100 random dice rolls

// Iterables(array-like structure: strings, maps or sets) can be converted to real arrays using Array.from()
// + the result of using querySelectorAll(): returns NodeList, something like an array which contains all the selected elements -> it doesn't have most of the array methods(ex. map(), reduce()) -> need to convert the NodeList to an array

// 🤔 let's pretend that all of the movements only stored in the user interface. But we do not have them somewhere in our code. So we don't have an array containing these values.
// -> But now, let's say we want to calculate their sum. And so therefore we need to somehow get them first from the user interface and then do the calculation based on that.

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  // console.log(movementsUI); // (8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]
  // console.log(movementsUI.map(el => Number(el.textContent.replace('€', '')))); // we can use now the second argument of the Array.from() a function here(728), which remember the mapping callback

  console.log(movementsUI);

  // Another way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// 📝 Recap
// We used a Array.from() to create an array from the result of the querySelectorAll() which is a NodeList, which is not really an array, but an array-like structure.
// -> That array-like structure can easily be converted to an array using Array.from().
// -> As a second step, we even included a mapping function, which then transforms that initial array to an array exactly as we want it. So basically converting the raw element to its text content and replacing the Euro sign with nothing.
// -> In the end, we end up exactly with the array of numbers that we intended.

// <166. Summary: Which Array Method to Use?>

// <167. Array Methods Practice>

// 1.
// const bankDepositSum = accounts.map(acc => acc.movements).flat()
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum); // 25180

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // ⛄ 0(accumulator): use this to reduce the array down to anything that we want.
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // 6 (774)
//  .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0); // 0 (774)

console.log(numDeposits1000); // 6

// ⚠️ count++ (x)
let b = 10;
// console.log(b++); // 10

// 💡 -> Prefixed ++ operator
console.log(++b); // 11
console.log(b); // 11

// 3
// create an OBJECT which contains the sum of the deposits and of the withdrawals

/*
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums; // ✍️ remember that in an arrow function, the value is only automatically, so implicitly returned when we don't have a function body with curly braces {}. But right now, we do here. Therefore, we have to explicitly, so to manually return the accumulator from the function. So that's how the reduce method works. We always have to return the accumulator from each iteration.
    },
    { deposits: 0, withdrawals: 0 } // ⛄ initial value of the accumulator: empty object or (786)
  );

console.log(sums); // {deposits: 25180, withdrawals: -7340}

// 🧱 Distructure the object
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals); // 25180 -7340
*/

// ✏️ Do this with arrays: recreate any of the examples with map, filter and reduce to use only the reduce method

// 4.
// create a simple function to convert any string to a title case
// title case: all the words in a sentence are capitalized except for some of them
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    // exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
