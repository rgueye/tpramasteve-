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
$("#croissiere h3").html(P86_TP_forfaits[1].nom);
$("#hiver h3").html(P86_TP_forfaits[3].nom);
$("#nature h3").html("");

$("#croissiere h3")
