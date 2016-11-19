"use strict";
/* tabContent part */
var promo1 = P86_TP_forfaits[1]
function openForfait(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//ajout du nom des forfaits
$("#croissiere h3").html(P86_TP_forfaits[1].nom);
$("#hiver h3").html(P86_TP_forfaits[3].nom);
$("#nature h3").html("");
$("#forfait_promo h3").html(P86_TP_forfaits[1].nom);
$("#croissiere h3")
