function calcWater() {
    const weight = document.getElementById('weight-inform').value;
    const resultWeight = document.getElementById('resWater');
    const resultCups = document.getElementById('resultCups');
    const resultBottles = document.getElementById('resultBottles');
    const resultCont = document.getElementById('resultContainer');
  
    let isValid = validate(weight);
    if (isValid == true){
        let idealWeight = (weight * 35 /1000).toFixed(1);
        let idealCups = Math.round(weight * 35 / 310);
        let idealBottles = Math.round(weight * 35 / 500); 
        resultWeight.innerHTML = `${idealWeight}`;
        resultCups.innerHTML = `${idealCups} copos de 310ml  `;
        resultBottles.innerHTML = `${idealBottles} garrafinhas de 500ml`;
        document.getElementById('div').style.display = "block";
    }
}

function validate(weight) {
    if (!weight || weight < 0) {
        document.getElementById('div').style.display = "none";
        setTimeout(() => {
            alert('Informe seu peso correto no campo correspondente');
        }, 600);      
        return false;
    }
    return true;
}

function clearValues() {
    // resultCont.style.display = 'none';
    const weight = document.getElementById('weight-inform').value;
    const resultWeight = document.getElementById('resWater');
    const resultBottles = document.getElementById('resultBottles');
    const resultCups = document.getElementById('resultCups');
    resultWeight.innerHTML = "";
    resultBottles.innerHTML = "";
    resultCups.innerHTML = ""; 

} 






