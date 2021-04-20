var divApp = document.getElementById('app');

// Model
var svartext = '';
var antall = 0;
var ferdigText = '';
var svar1 = false;
var svar2 = false;
var svar3 = false;
var svar4 = false;
var svar5 = false;



// View
updateView()

function updateView() {
    html= `

    <h1>Norges Quiz</h1>
    <div id="sp1">
        <h2>Spørsmål 1: Hva heter hovedstaden i Norge?</h2>
            <p onclick="svar('feil', 1)">A) Trondheim</p>
            <p onclick="svar('riktig!', 1)">B) Oslo</p>
            <p onclick="svar('feil', 1)">C) Bergen</p>
    </div>

    <div id="sp2">
        <h2>Spørsmål 2: Hva er navnet på Norges høyeste fjell?</h2>
            <p onclick="svar('riktig!', 2)">A) Galdhøpiggen</p>
            <p onclick="svar('feil', 2)">B) Gaustatoppen</p>
            <p onclick="svar('feil', 2)">C) Glittertind</p>
    </div>

    <div id="sp3">
        <h2>Spørsmål 3: Hva er Norges nasjonalrett?</h2>
            <p onclick="svar('feil', 3)">A) Grandiosa</p>
            <p onclick="svar('feil', 3)">B) Smalahove</p>
            <p onclick="svar('riktig!', 3)">C) Fårikål</p>
    </div>
    
    <div id="sp4">
        <h2>Spørsmål 4: Når og hvor ble Grunnloven undertegnet?</h2>
            <p onclick="svar('feil', 4)">A) 1914, Eidskog</p>
            <p onclick="svar('riktig!', 4)">B) 1814, Eidsvoll</p>
            <p onclick="svar('feil', 4)">C) 1844, Eidsfoss</p>
            <p onclick="svar('feil', 4)">D) 1814, Oslo</p>
    </div>

    <div id="sp5">
        <h2>Spørsmål 5: Hvem er egentlig Kongen av Gulset?</h2>
            <p onclick="svar('feil', 5)">A) Kong Harald</p>
            <p onclick="svar('feil', 5)">B) Jonis Josef</p>
            <p onclick="svar('feil', 5)">C) Kåre Kniv</p>
            <p onclick="svar('riktig!', 5)">D) Vilde Svenkesen</p>
    </div>

    <div id="svarTekst">${svartext}</div>
    <div>${ferdigText}</div>
    <button onclick="reset()"></button>

    `;

divApp.innerHTML = html;

}

// Controller ligger i egen fil...



/* Oppgaven skal inneholde: 
Skal være i Mvc (model, view, controller) [x]
Minst 1 Eventhandler (onclick etc.) [x]
Minst 1 If-setning  (med && eller || , eller begge)
Minst en funksjon som returnerer en verdi
Minst en funksjon som bruker parameter [x]
(ps. de to siste KAN være samme funksjon)
Minst 3 unit tester til sammen av funksjonene du bruker (ikke test mot view)
Send GitHub repolink og .io linken til både oblig og testene på mail til oblig@getacademy.no */