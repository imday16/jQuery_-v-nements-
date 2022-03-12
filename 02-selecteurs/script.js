$(function () {

    // Selection par balise
    let maSpan = $('span');

    $('span').css('background', 'blue'); // css() est une méthode jQuery
    $('span').css({
        'color': 'white',
        'padding': '5px',
        'margin': '10px 0',
        'display': 'block'
    });

    // Selection par id
    $('#section').css('border', '1px solid black');


    // Selection par classe
    $('.avion').css('border', '2px solid orange');

    /* je peux sauter des lignes et cumuler l'appel des méthodes */
    $('.avion')
        .eq(1)
        .css('background', 'cyan');

    $('.avion:eq(2)').css('color', 'red');

    // la méthode on() équivaut à l'addEventListener()
    // l'écoute de l'évènement click concerne chaque paragraphe (pas besoin d'écrire manuellement la boucle)
    $('p').on('click', function () {

        $(this).css('background', 'lime');

    });


    // let mesParagraphes = document.querySelectorAll('p');
    // for(let i=0; i < mesParagraphes.length; i++){
    //     mesParagraphes[i].addEventListener('click',function(){
    //         this.style.background = 'lime';
    //     })
    // }



});