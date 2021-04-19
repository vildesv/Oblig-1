var divApp = document.getElementById('app');

// Model
var svartext = '';






// View
updateView()

function updateView() {
    html= `

    <h1>Norges Quiz</h1>
    <div id="sp1">
        <h2>Spørsmål 1: Hva heter hovedstaden i Norge?</h2>
            <p onclick="svar('Feil')">A) Trondheim</p>
            <p onclick="svar('Riktig!')">B) Oslo</p>
            <p onclick="svar('Feil')">C) Bergen</p>
    </div>

    <div id="sp2">
        <h2>Spørsmål 2: Hva er navnet på Norges høyeste fjell?</h2>
            <p onclick="svar('Riktig!')">A) Galdhøpiggen</p>
            <p onclick="svar('Feil')">B) Gaustatoppen</p>
            <p onclick="svar('Feil')">C) Glittertind</p>
    </div>

    <div id="sp3">
        <h2>Spørsmål 3: Hva er Norges nasjonalrett?</h2>
            <p onclick="svar('Feil')">A) Grandiosa</p>
            <p onclick="svar('Feil')">B) Smalahove</p>
            <p onclick="svar('Riktig!')">C) Fårikål</p>
    </div>
    
    <div id="sp4">
        <h2>Spørsmål 4: Når og hvor ble Grunnloven undertegnet?</h2>
            <p onclick="svar('Feil')">A) 1914, Eidskog</p>
            <p onclick="svar('Riktig!')">B) 1814, Eidsvoll</p>
            <p onclick="svar('Feil')">C) 1844, Eidsfoss</p>
            <p onclick="svar('Feil')">D) 1814, Oslo</p>
    </div>

    <div id="sp5">
        <h2>Spørsmål 5: Hvem er egentlig Kongen av Gulset?</h2>
            <p onclick="svar('Feil')">A) Kong Harald</p>
            <p onclick="svar('Feil')">B) Jonis Josef</p>
            <p onclick="svar('Feil')">C) Kåre Kniv</p>
            <p onclick="svar('Riktig!')">D) Vilde Svenkesen</p>
    </div>

    <div id="svarTekst">${svartext}</div>

    `;

divApp.innerHTML = html;

}

// Controller ligger i egen fil...


/* Oppgaven skal inneholde: 
Skal være i Mvc (model, view, controller)
Minst 1 Eventhandler (onclick etc.)
Minst 1 If-setning  (med && eller || , eller begge)
Minst en funksjon som returnerer en verdi
Minst en funksjon som bruker parameter 
(ps. de to siste KAN være samme funksjon)
Minst 3 unit tester til sammen av funksjonene du bruker (ikke test mot view)
Send GitHub repolink og .io linken til både oblig og testene på mail til oblig@getacademy.no */