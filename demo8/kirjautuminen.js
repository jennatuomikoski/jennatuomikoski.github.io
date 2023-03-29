document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === 'kyllä') {
        document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos").style.display = "block";
        document.getElementById("kirjaudu_nappi").style.display = "none";
    } else {
        document.getElementById("kirjaudu_ulos").style.display = "none";
    }
}
function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}
