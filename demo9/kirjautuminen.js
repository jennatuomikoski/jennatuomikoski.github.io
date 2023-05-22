onkoKirjautunut = () => {
  
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById('tervetuloTeksti').textContent += localStorage.getItem("kayttajatunnus");
        document.getElementById("kirjautumisLomake").style.display = "none";
        document.getElementById("kirjauduUlos").style.display = "inline-block";
        document.getElementById("kirjauduNappi").style.display = "none";
    } else {
        document.getElementById("kirjauduUlos").style.display="none";
        document.getElementById("kirjauduNappi").style.display="inline-block";
    }
}
kirjaudu = () => {
    localStorage.setItem("kayttajatunnus", document.getElementById("kayttajatunnus").value);
    localStorage.setItem("kirjautunut", "kylla"); 
    onkoKirjautunut();
    
}
kirjauduUlos = () => {

        document.getElementById("kirjauduUlos").style.display="none";
        document.getElementById("kirjauduNappi").style.display="inline-block";
        document.getElementById("kirjautumisLomake").style.display="inline-block";
        document.getElementById("tervetuloTeksti").textContent = "Tervetuloa";
        localStorage.removeItem("kayttajatunnus");
        localStorage.removeItem("kirjautunut");
        window.location.href = "index.html";   
        location.reload(); 
}

document.addEventListener("DOMContentLoaded", onkoKirjautunut);