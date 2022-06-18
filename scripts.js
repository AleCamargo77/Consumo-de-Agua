function calcWater() {
    const weight = document.getElementById('weight-inform').value;
    const resultWeight = document.getElementById('resWater');
    const resultCups = document.getElementById('resultCups');
    const resultBottles = document.getElementById('resultBottles');
    const resultCont = document.getElementById('resultContainer');
  
    let isValid = validate(weight);
    if (isValid == true){
        let idealWeight = (weight * 35 /1000).toFixed(2);
        let idealCups = Math.round(weight * 35 / 310);
        let idealBottles = Math.round(weight * 35 / 500); 
        resultWeight.innerHTML = `Seu consumo ideal é: ${idealWeight} litros por dia`;
        resultCups.innerHTML = `${idealCups} copos de 310ml  `;
        resultBottles.innerHTML = `${idealBottles} garrafinhas de 500ml`;
        document.getElementById('div').style.display = "block";
    }
}

function validate(weight) {
    if (!weight) {
        return alert('Informe seu peso no campo correspondente');
        return false;
    }
    return true;
}

function clearValues() {
    const weight = document.getElementById('weight-inform').value;
    const resultWeight = document.getElementById('resWater');
    const resultBottles = document.getElementById('resultBottles');
    const resultCups = document.getElementById('resultCups');
    resultWeight.innerHTML = "";
    resultBottles.innerHTML = "";
    resultCups.innerHTML = ""; 
} 






