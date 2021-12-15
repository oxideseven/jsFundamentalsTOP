const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');
    
select.onchange = function() {
    const choice = select.value;

    switch (choice) {
    
    case 'January':
        h1.textContent = 'January';
        break;
    case 'February':
        h1.textContent = 'February';
        break;
    case 'March':
        h1.textContent = 'March';
        break;
    case 'April':
        h1.textContent = 'April';
        break;
    case 'May':
        h1.textContent = 'May';
        break;
    case 'June':
        h1.textContent = 'June';
        break;
    case 'July':
        h1.textContent = 'July';
        break;
    case 'August':
        h1.textContent = 'August';
        break;
    case 'September':
        h1.textContent = 'September';
        break;
    case 'October':
        h1.textContent = 'October';
        break;
    case 'November':
        h1.textContent = 'November';
        break;
    case 'December':
        h1.textContent = 'December';
        break;
    }

    if (choice === 'February' || choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
        days = 30;
    }
    else {
        days = 31;
    }

    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31,'January');