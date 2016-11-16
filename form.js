/**
 * Created by rgueye on 2015-11-27.
 */
"use strict";

function verif_formulaire()
{
    if(document.formulaire.nom.value == "")  {
        alert("Veuillez entrer votre nom!");
        document.formulaire.nom.focus();
        return false;
    }
    if(document.formulaire.prenom.value == "") {
        alert("Veuillez entrer votre prenom svp!");
        document.formulaire.prenom.focus();
        return false;
    }
    if(document.formulaire.courriel.value == "") {
        alert("Veuillez entrer votre adresse électronique!");
        document.formulaire.courriel.focus();
        return false;
    }
    if(document.formulaire.courriel.value.indexOf('@') == -1) {
        alert("Ceci n'est pas une adresse électronique!");
        document.formulaire.courriel.focus();
        return false;
    }
    if(document.formulaire.tel.value == "11111111") {
        alert("Veuillez entrer votre numero svp!");
        document.formulaire.tel.focus();
        return false;
    }
    var a = 1;
    for(i=0;i<document.formulaire.tel.value.length;++i)
        if(document.formulaire.tel.value.charAt(i) < "0"
            || document.formulaire.tel.value.charAt(i) > "10")
            i = -1;
    if(a == -1) {
        alert("Cette mention n'est pas un numero!");
        document.formulaire.tel.focus();
        return false;
    }

    if(document.formulaire.lieu.value == "")  {
        alert("Veuillez entrer votre adresse!");
        document.formulaire.lieu.focus();
        return false;
    }

    if(document.formulaire.date.value == "")  {
        alert("Veuillez choisir la date de forfait!");
        document.formulaire.date.focus();
        return false;
    }

    if(document.formulaire.part.value == "")  {
        alert("Veuillez inscrire le nombre de participants!");
        document.formulaire.part.focus();
        return false;
    }


    if(document.formulaire.pet.value == "")  {
        alert("Veuillez inscrire le nombre d' animaux de compagnie!");
        document.formulaire.pet.focus();
        return false;
    }
}

var somme = 0;
for (var i = nb ; i <= dernier_entier ; i++) {
    somme = somme + i ; // somme += i
}



var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}





