// il programma calcola il prezzo del biglietto del treno
// in base all'età e ai km che l'utente vuole percorrere
// se l'utente è minorenne sconto 20%
// se l'utente è over 65 sconto 40%


// al click del bottone crea calocolo il prezzo del biglietto

var creaBtn = document.getElementById("btnCrea");

creaBtn.addEventListener("click", function () {

  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;

  var nomeUtente = nome + " " + cognome;

  console.log(nomeUtente);

  var km = document.getElementById("km").value;

  console.log(km);

  var eta = document.getElementById("categoria").value;

  console.log(eta);

  // calcolo del prezzo del BIGLIETTO

  var euroAlKm = 0.21;
  var prezzoFinale;

  if (eta == "Minorenne") {
    prezzoFinale = km * euroAlKm * 80 /100;
  } else if (eta == "Over65") {
    prezzoFinale = km * euroAlKm * 60 /100;
  } else {
    prezzoFinale = km * euroAlKm;
  }

  // creo in modo random il numero del treno

  var numMaxtreno = 100000;
  var numMinTreno = 90000;

  var numeroTreno = Math.floor(Math.random() * (numMaxtreno - numMinTreno +1)) + numMinTreno;


  // creo in modo random il numero della carrozza del treno

  var numMaxcarrozza = 14;
  var numMincarrozza = 1;

  var numeroCarrozza = Math.floor(Math.random() * (numMaxcarrozza - numMincarrozza +1)) + numMincarrozza;


  // Autput per l'utente

  document.getElementById('nomePasseggero').innerHTML = nomeUtente;

  document.getElementById('numeroTreno').innerHTML = numeroTreno;

  document.getElementById('carrozza').innerHTML = numeroCarrozza;

  document.getElementById('prezzoBiglietto').innerHTML = prezzoFinale.toFixed(2) + " euro";

  document.getElementById('categoriaUtente').innerHTML = eta;

  // creo una classe per far vedere i dati nascosti

  document.getElementById('bigliettoTreno').className = "bigliettoVisibile";

});

// al click del bottone annulla elimino tutti i dati inseriti

var creaBtn = document.getElementById("btnAnnulla");

creaBtn.addEventListener("click", function () {

  var nome = document.getElementById("nome").value = "Nome";
  var cognome = document.getElementById("cognome").value = "Cognome";
  var km = document.getElementById("km").value = " ";
  var eta = document.getElementById("categoria").value = "Maggiorenne";

  // reinserisco la classe creata in html (.biglietto) e
  // tolgo la classe creata con js(.bigliettoVisibile)

  document.getElementById('bigliettoTreno').className = "biglietto";

});
