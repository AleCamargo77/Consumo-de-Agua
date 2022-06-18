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
        // resultWeight.innerHTML = (`Seu consumo ideal é de ${idealWeight} litros de água por dia, ${idealCups} copos de 310ml ou ${idealBottles} garrafinhas de 500ml`);
        // console.log(idealWeight);
        // resultWeight.style.background = "#57b2de";
        // resultCont.classList.add("resultContainer");
        // console.log('resultContainer')
        // if (tela.style.display === 'none') {
        //     tela.style.display === 'block';
        //  } else {
        //      resultContainer.style.display === 'none';
        //  }
        resultWeight.innerHTML = `Seu consumo ideal é: ${idealWeight} litros por dia`;
        resultCups.innerHTML = `${idealCups} copos de 310ml`;
        resultBottles.innerHTML = `${idealBottles} garrafinhas de 500ml`;
    }
}

function validate(weight) {
    if (!weight) {
        return alert('Informe seu peso no campo correspondente');
        return false;
    }
    return true;
}