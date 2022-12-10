var idade = parseInt(prompt("Digite uma idade"));

if((idade >= 0 ) && ( idade <= 15)){
    alert("Jovem!!");
    }
    else if((idade > 15 ) && ( idade <= 60)){
    alert("Adulto!!");
    }
    
    else if ((idade > 60) && (idade <= 110)) {
    alert("Idoso!!");
    
    }
    else{
        alert("Valor indevido!");
    }