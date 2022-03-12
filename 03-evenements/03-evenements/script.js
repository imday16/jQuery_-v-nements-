$(function () {

    // la méthode on() : méthode générique (addEventListener) d'écoute des évènements js
    $('#section').on('click', coloriage);

    // en jQuery this devient $(this)
    function coloriage() {
        $(this).css({
            'background': 'green',
            'color': 'white'
        });
    }


    // methode hover() // mouseover
    // $('.avion').hover(function(){

    //     $(this).css('background','orange');

    // });
    // mouseenter(),mouseleave()
    //  mouseover  , mouseout

    $('.avion')
        .on('mouseover', function () {

            $(this).css('background', 'orange');

        })
        .on('mouseout', function () {

            $(this).css('background', '');

        });

    /*
     .classList.add()  ==> .addClass()
     .classList.remove()   .removeClass()
     .classList.contains() .hasClass()
     .classList.toggle()   .toggleClass()

     .setAttribute('src','image.jpg);  ==> attr('src','image.jpg')  setter
     .getAttribute('src');                 attr('src')    getter

     .innerHTML     ==> html('<strong>contenu</strong>'); balises html sont interprêtées (setter)
                    ==> html()  getter
     .innerText     ==> text('contenu'); setter
                    ==> text(); getter

     en jQuery
     .prop('checked'); // boolean   / getter
     .prop('checked',true);   setter
    */

    $('#section').html('<strong>contenu</strong>');

    $('#decoche').on('click', function () {

        // mode toggle
        if ($('#case').prop('checked')) {
            $('#case').prop('checked', false);
        }
        else{
            $('#case').prop('checked', true);
        }
    })



});