
// ask a question and tell it what to do with yes or no.
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);

// Here is it as an arrow function, the ask function is the same but the call changes.
function ask(question, yes, no) {
    if (confirm(question)) yes(); // confirm pops up a ok/cancel box.
    else no();
}

    // neater as an arrow function.
ask( // call the function
    "Do you agree?", // the first argumennt, for the 'question parameter
    () => console.log("You agreed."), // the second argument for the 'yes' parameter
    () => console.log("You canceled the execution.") //the third argument for the 'no' parameter
);

//here it is more compact but also localized (not global); 
//add let ask; before hand to make it global.

//let ask;

let ask = (question, yes, no) => confirm(question) ? yes() : no();
    ask(
        'Do you agree?',
        () => console.log('You agreed'),
        () => console.log('You interrupted execution'),
    );