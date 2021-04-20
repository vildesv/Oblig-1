// Controller
function svar(denne, nummer) {

    if(antall < 5){

        if(nummer == 1 && svar1 == true){svartext = "Du har allerede svart på dette spørsmålet."}
        else if(nummer == 2 && svar2 == true){svartext = "Du har allerede svart på dette spørsmålet."}
        else if(nummer == 3 && svar3 == true){svartext = "Du har allerede svart på dette spørsmålet."}
        else if(nummer == 4 && svar4 == true){svartext = "Du har allerede svart på dette spørsmålet."}
        else if(nummer == 5 && svar5 == true){svartext = "Du har allerede svart på dette spørsmålet."}
        
        if(nummer == 1 && svar1 == false){
            svar1 = true;
            antallLeggTil();
            svartext = `Du svarte ${denne} på spørsmål ${nummer}`;
        }
        if(nummer == 2 && svar2 == false){
            svar2 = true;
            antallLeggTil();
            svartext = `Du svarte ${denne} på spørsmål ${nummer}`;
        }
        if(nummer == 3 && svar3 == false){
            svar3 = true;
            antallLeggTil();
            svartext = `Du svarte ${denne} på spørsmål ${nummer}`;
        }
        if(nummer == 4 && svar4 == false){
            svar4 = true;
            antallLeggTil();
            svartext = `Du svarte ${denne} på spørsmål ${nummer}`;
        }
        if(nummer == 5 && svar5 == false){
            svar5 = true;
            antallLeggTil();
            svartext = `Du svarte ${denne} på spørsmål ${nummer}`;
        }
        
        
    }
    else if(antall == 5) {ferdigText = "Quizen er over";}
    else{
        svartext = "Quizen er over";
    }

    updateView()
}

function reset() {

    antall = 0;
    svar1 = false;
    svar2 = false;
    svar3 = false;
    svar4 = false;
    svar5 = false;

}

function antallLeggTil(){
    return antall++;
}