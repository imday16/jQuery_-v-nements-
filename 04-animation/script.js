$(function(){

    //$('.carre.bleu').animate(
    //    {
    //       "left":"300px",
    //        "top" :"25px"
    //    },2000

    //);

    // en deux étapes 
    $('.carre.bleu')
        .animate(
            {
                "left":"300px",
            
            },2000

        )
        .animate(
            {
                "top" :"25px"
            },1000
        );

    // en 2 étapes avec l'utilisateur de la callback


    $('.carre.bleu')
    .animate(
           {
               "left":"300px"
              
            },2000, function(){
                //cette fonction se déclenchera une fois la première animation terminée
                $('.carre.rouge').animate(
                   {
                    "top" :"25px"
                   } ,1000
                )
            }
    
        );

    $('.carre.rouge').on('click',function(){
        $(this).animate({
            right : '+=10px'  /* animation relative */
        },500);
    })

    $('.carre.vert').on('click',function(){

        /*fondu sortant (aboutit à un display:none) */
        $(this).fadeOut(3000, function(){
            $(this).fadeIn(3000); /* fondu entrant */
              
        });
    });

    $('#fondu').on('click',function(){
        $('.carre.vert').fadeToggle(3000);
    });

    $('#fondu2').on('click',function(){
        $('.carre.vert').fadeTo(3000,0.3); // Atteindre un niveau d'opacité
    });
    // le temps est exprimé en ms, mais supporte aussi les mots 'slow', 'fast'

    /* slideDown(), slideUp() et slideToggle()  */

    setTimeout(function(){
        $('#filtre').css('display','block');
        $('#fenetre').slideDown(1500);
    },2000);

    $('#fenetre').on('click',function(){
        $(this).slideUp(1500);
        $(' #filtre').css('display')
    })


});