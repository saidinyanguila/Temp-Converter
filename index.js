//F = (C * 9/5) + 32
//C = (F - 32) * 5/9 

let convert = () => {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    let units = document.getElementById('units').value;

    if (units == 'f') {
        let ans = (Number(input) - 32) * 5/9;
        output.innerText = ans + '°C';
    }
    else if (units == 'c') {
        let ans = (Number(input) * 9/5) + 32;
        output.innerText = ans + '°F';
    }
}