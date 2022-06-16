function calcWater() {
    const weight = document.getElementById('weight-inform').value;
    const resultWeight = document.getElementById('result');

    let isValid = validate(weight);
    if (isValid == true){
        let idealWeight = parseFloat(weight * 35);
        
        resultWeight.innerHTML = (`Seu consumo ideal é: ${idealWeight} litros de água por dia`);
        console.log(idealWeight);
        // document.getElementById('result').innerHTML()
    }
}

function validate(weight) {
    if (!weight) {
        return alert('Informe seu peso no campo correspondente');
        return false;
    }
    return true;
}