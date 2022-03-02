var num = [
    '/',
    '*',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '0',
    '00',
    '.',
];

var Selector = document.querySelector('.calculator');
num.forEach(e => {
    Selector.innerHTML = `<span class="num" onclick="calc.txt.value=''"><i>${e}</i></span>`;
}
)