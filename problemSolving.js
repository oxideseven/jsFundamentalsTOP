// New variable:
    // name: What do we call it?
    // type: What kind of data is it gonna contain?
    // initVal: Does it need/have a starting value?

    // Create a variable called <name>> of type <type> that starts with a value <initVal>
    // name = initVal

// Output:
    // message: text to write to user.

    // Output the text <message>
    // console.log(message)

// Input
    // variable: where answer from user will be stored.
    // message: question being asked of the user.

    // Ask the user question <message> and store the answer <variable>
    // let variable = prompt('message');

// while loop
    // sentry: variable that will control loop
    // inistialization code: code that initializes sentry
    // condition: loop repeats if condition is true
    // change code: code to change sentry so condition can be triggered

    // Initialize <sentry> with <initialization code> then continue loop as long as <condition> is true. Inside loop, change <sentry> with <change code>.
    // let sentry = initialization code; 
    // while (sentry <= condition) {sentry + change code}

    // Great while loop example; keepGoing

    correct = 'goodpassword';
    tries = 0;

    keepGoing = true;
    while (keepGoing) {
        tries = tries + 1;
        console.log(`Try #: ${tries}`);
    
        guess = prompt("what's the password? ",'');
        if guess == correct;
            console.log('good jeorb.');
            keepGoing = false
        
        else if tries >= 3;
            console.log('you done goofed, launching the missles');
            keepGoing = false
    }

// for loop
    // sentry: interger variable that will control loop
    // start: interger value of sentry at begining
    // finish: interger value of sentry at end
    // change: interger to add to sentry at each pass

    // begin with <sentry> at <start> and add <change> to <sentry> on each pass until <sentry> is larger or equal to <finish>
    // for (let sentry = start; sentry <= finish; sentry + change){}  


// Write a program that asks for 2 numbers and adds them together. NO CODE, only algorithm.

    // create a variable, call it num1
    // create a variable, call it num2
    // create a variable, call it sum
    // ask the user for a number, store it in num1
    // ask the user for a number, store it in num2
    // add num1 to num2, store it in sum.
    // tell the user "the sum is:" output sum.

// Set the above as comments, then write code for each comment.
    
    // create a variable, call it num1
    let num1;

    // create a variable, call it num2
    let num2;

    // create a variable, call it sum
    let sum;

    // ask the user for a number, store it in num1
    num1 = prompt('gimme a number','');

    // ask the user for a number, store it in num2
    num2 = prompt('gimme a number','');

    // add num1 to num2, store it in sum.
    sum = pasreInt(num1) + parseInt(num2);

    // tell the user "the sum is:" output sum.
    console.log(`The sum is: ${sum}`)


    //More pseudoCode; explaning code of a vending machine
    // WHEN the user inputs money:

    //     IF the bill is too crumpled to read,
    //         provide an error message,
    //         and return the bill.

    //     ELSE,
    //         Add it to the balance

    // WHEN the user selects an item:

    //     IF they haven't put in enough money,
    //         ask for more.

    //     IF the item is out of stock,
    //         ask them to make a new selection.

    //     ELSE,
    //         determine change,
    //         dispense change,
    //         zero out the balance,
    //         and dispense the item.

    // WHEN the user hits the "cancel" button:

    //     IF the user has input money without making a purchase,
    //         return the money,
    //         and zero out the balance
