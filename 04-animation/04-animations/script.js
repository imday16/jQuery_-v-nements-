$(function () {


    // $('.carre.bleu').animate(
    //     {
    //         "left" : "300px",
    //         "top" : "25px"
    //     },2000
    // );

    // en 2 étapes
    // $('.carre.bleu')
    //     .animate(
    //         {
    //             "left": "300px"
    //         }, 2000
    //     )
    //     .animate(
    //         {
    //             "top": "25px"
    //         }, 1000
    //     );

    // en 2 étapes avec l'utilisation de la callback
    $('.carre.bleu')
        .animate(
            {
                "left": "300px"
            }, 2000, function () {
                // cette fonction se déclenchera une fois la première animation terminée (callback)
                $('.carre.rouge').animate(
                    {
                        "top": "25px"
                    }, 1000
                )
            }
        );


    $('.carre.rouge').on('click', function () {
        $(this).animate({
            right: '+=10px' /* animation relative */
        }, 500);
    });

    /* Fondus */
    $('.carre.vert').on('click', function () {
        /* fondu sortant (aboutit à un display:none) */
        $(this).fadeOut(3000, function () {
            $(this).fadeIn(3000); /* fondu entrant */
        });
    });

    $('#fondu').on('click', function () {
        $('.carre.vert').fadeToggle(3000);
    });

    $('#fondu2').on('click', function () {
        $('.carre.vert').fadeTo(2000, 0.3); // Atteindre un niveau d'opacité
    });

    // le temps est exprimé en ms, mais supporte aussi les mots 'slow', 'fast'


    /* slideDown(), slideUp() et slideToggle() */


    // setTimeout(function(){

    //     $('#filtre').css('display','block');
    //     $('#fenetre').slideDown(1500);

    // },2000);

    $('#fenetre').on('click', function () {
        $(this).slideUp(1500);
        $('#filtre').css('display', 'none');
    })

    // slideToggle() bascule d'un état à l'autre
    // menu burger

    // $('#saisie').focus(function(){
    //     $(this).css('background','yellow');
    // }); 
    // méthode focus jquery depréciée ( ce qui se passe quand l'élément sélectionné récupère le focus)
    // blur() ( ce qui se passe quand l'élément sélectionné perd le focus)

    $('#saisie').on('focus', function () {
        $(this).css('background', 'yellow');
    });
    $('#saisie').on('blur', function () {
        $(this).css('background', '');
    });

    document.getElementById('saisie').focus();


    setTimeout(function(){
        // Je déclenche l'évènement click sur le bouton fondu avec ma méthode trigger()

        $('#fondu')
        .trigger('click') // trigger/Déclencheur
        .off('click'); // on éteint l'écouteur d'évènement (removeEventListener)

        /* Equivalent en js natif
        let event = new Event('click');
        document.getElementById('fondu').dispatchEvent(event);
        */

    },4000);
    




   /* show(),hide() et toggle()*/
    

});