document.getElementById('oblicz').addEventListener("click", function () {
    const waga = parseFloat(document.getElementById("waga").value);
    let wzrost = parseFloat(document.getElementById("wzrost").value);
    const wynikDiv = document.getElementById("wynik");
    const wynik = document.getElementById("wynik2");
    const interpretacja = document.getElementById("interpretacja");

    if(!waga || waga <= 0 || !wzrost || wzrost <= 0){
        alert("Proszę wprowadzić poprawne dane.");
        return;
    }

    wzrost = wzrost / 100;

    const bmi = waga / (wzrost * wzrost);
    wynik.textContent = `BMI: ${bmi.toFixed(2)}`;   //Math.round()


    if(bmi < 18.5){
        interpretacja.textContent = "Interpretacja: Niedowaga.";
    }else if(bmi >= 18.5 && bmi < 24.9){
        interpretacja.textContent = "Interpretacja: Waga prawidłowa.";
    }else if(bmi >= 25.0 && bmi < 29.9){
        interpretacja.textContent = "Interpretacja: Nadwaga.";
    }else{
        interpretacja.textContent = "Interpretacja: Otyłość.";
    }

    wynikDiv.style.display = "block";
});
