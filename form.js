/**
 * Created by rgueye on 2015-11-27.
 */
"use strict";
//CODE JAVASCRIPT DU FORMULAIRE

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

//code pour nombre de participants soit superieur ou egal a 1
    var minimum = 0;
    var number = parseInt();
    for (var i = 0; i>= 1; i++)

    if(document.formulaire.part.value == "0")  {
        alert("Veuillez inscrire le nombre de participants!");
        document.formulaire.part.focus();
        return false;
    }

var prix = 100;

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

//CODE JAVASCRIPT DU PANIER


function LignePanier (code, qte, prix)
{
    this.codeArticle = code;
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function()
    {
        return this.codeArticle;
    }
}

function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(code, qte, prix)
    {
        var index = this.getArticle(code);
        if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function(code)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getCode()) return i;
        return -1;
    }
    this.supprimerArticle = function(code)
    {
        var index = this.getArticle(code);
        if (index > -1) this.liste.splice(index, 1);
    }
}


$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
//ajout du nom des forfaits
$('#tab-1 p').text(P86_TP_forfaits[0].description);
$('#tab-1 h3').text(P86_TP_forfaits[0].nom);
$('#tab-2 p').text(P86_TP_forfaits[8].description);
$('#tab-2 h3').text(P86_TP_forfaits[8].nom);
$('#tab-3 p').text(P86_TP_forfaits[3].description);
$('#tab-3 h3').text(P86_TP_forfaits[3].nom);
$('.descriptionForfait li').first().text(P86_TP_forfaits[0].debut_saison);
$('.descriptionForfait li:nth-child(2)').text(P86_TP_forfaits[0].mois_basse_saison);
$('.descriptionForfait li:nth-child(3)').text('Prix du forfaits :' + ' '+ '$' +' '+ P86_TP_forfaits[0].prix_basse_saison);
$('#tab-2 .descriptionForfait li').first().text(P86_TP_forfaits[8].debut_saison);
$('#tab-2 .descriptionForfait li:nth-child(2)').text(P86_TP_forfaits[8].mois_basse_saison);
$('#tab-2 .descriptionForfait li:nth-child(3)').text('Prix du forfaits :' + ' ' + '$'+' ' + P86_TP_forfaits[8].prix_basse_saison);
//fin de l'ajout des forfait dans tab_content
