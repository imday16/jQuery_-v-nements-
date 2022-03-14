$(function () {

    // Méthode datepicker() de jQuery UI
    $('#maDate').datepicker();

    $('#barre').progressbar({
        value: 42
    });

    $('#redimension').resizable({
        minWidth: 100,
        minHeight: 100,
        maxWidth: 400,
        maxHeight: 600
    });


    $('.enfant').draggable({
        // containment : "parent", // mot clé parent
        containment: "#parent", // id parent
        snap: ".enfant", // effet aimanté
        snapMode: "outer",
        grid: [50, 50],
        cursor : 'grab'
    });


    // listes triables, et interchangeables
    $('#afaire, #fait').sortable({
        connectWith : '.taches',
        placeholder : 'tache' // nom de la classe
    });


    $('#panel').on('click',function(){

        /* toggle()  show()/hide() */
        $('#lateral').toggle(
            "slide",
            {
                direction : "left"
            },
            1000
        ).animate({
                'background-color' : 'green'
            },1500)
        ;

        // left, right, up, down

    });


});