$(function(){

    // la méthode on() : méthode générique d'écoute des évènements js
    $('#section').on('click', coloriage);

    // en jQuery this devient $(this)
    function coloriage(){
        $(this).css({
            'background' : 'green',
             'color' : 'white'
        });
    }
    


    // méthode hover()  // mouseover
    //$('.avion').hover(function(){

     //   $(this).css('background','orange');

    //});
    // mouseenter(), mouseleave()
    // mouseover , mouseout

    $('.avion')
    .on('mouseover',function(){

        $(this).css('background','orange');

    })
    .on('mouseout',function(){

        $(this).css('background','');

    });
    
    /*

        .classList.add() ==> .addClass()
        .classList.remove() ==> .removeClass()
        .classList.contains() ==> .hadClass()
        .classList.toggle() ==> .toggleClass()

        .setAttribute('src','image.jpg'); ==> attr('src','image.jpg') setter
        .getAttribute('src');                 attr('src')      getter

        .innerHTML  ==>  html ('<strong>contenu</stong>'); balises html sont comprises
                    ==>  html() getter
        .innerText   ==>    text ('contenu');
                    ==>  text();  getter 



        En jQuery
        .prop('checked'); // boolean  /getter
        .prop('checked',true);   setter
    */
    
        $('#section').html('<strong>contenu</strong>');

        $('#decoche').on('click',function(){
            $("#case").prop('checked',false);
        })

});