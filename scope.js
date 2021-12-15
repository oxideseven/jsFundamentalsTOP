const x = 1;

function a() {
    const y = 2; // This variable won't be accessible outside this function
    output (y);
}

function b() {
    const z = 3; // Neither will this one.
    output (z);
}

// This lets us type output(x), and we'll get Value: 1; It won't workj with y & z obviously.
function output(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + value;
}