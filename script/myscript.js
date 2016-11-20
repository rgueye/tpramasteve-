"use strict";
/* tabContent part */
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
$('.descriptionForfait li').first().text(P86_TP_forfaits[0].debut_saison);
$('.descriptionForfait li:nth-child(2)').text(P86_TP_forfaits[0].mois_basse_saison);
$('.descriptionForfait li:nth-child(3)').text('Prix du forfaits :' + ' ' + P86_TP_forfaits[0].prix_basse_saison);
$('#tab-2 .descriptionForfait li').first().text(P86_TP_forfaits[8].debut_saison);
$('.descriptionForfait li:nth-child(2)').text(P86_TP_forfaits[8].mois_basse_saison);
//fin de l'ajout des forfait dans tab_content



