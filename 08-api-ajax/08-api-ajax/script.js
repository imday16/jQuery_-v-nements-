$(function () {

    const APIKEY = '89bc8c70'; // votre clé
    const BASEURL = `https://www.omdbapi.com/?apikey=${APIKEY}&`;


    /*
        $.ajax(); // Version générique
        $.get(); // Ajax GET
        $.post(); // Ajax POST
    */

    /* Activation du bouton sur saisie */
    $('#saisie').on('input', function () {
        if ($(this).val().length >= 1) {
            // activer le bouton chercher
            $('#recherche').prop('disabled', false);

        }
        else {
            // désactiver le bouton chercher
            $('#recherche').prop('disabled', true);
        }
    });

    /* Lancer la recherche sur click du bouton */
    $('#recherche').on('click', lanceRecherche);



    function lanceRecherche(event, page = 1) {
        // console.log(page);
        let saisie = $('#saisie').val(); // document.querySelector('#saisie').value
        const URLRECHERCHE = BASEURL + 's=' + saisie + '&type=movie&page=' + page;

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: URLRECHERCHE,
            success: function (reponse) {
                $('#resultats').html('');
                console.log(reponse);
                if (reponse.Response.toLowerCase() == 'true') {

                    // Pagination
                    $('#pagination').html('');
                    let nbPages = parseInt(reponse.totalResults / 10); // ex 246/10 => 24
                    if (reponse.totalResults % 10 > 0) nbPages++; // 246%10 => 6  24+1 = 25 pages
                    console.log(nbPages);
                    if (nbPages > 1) {
                        for (let i = 1; i <= nbPages; i++) {
                            let bouton = document.createElement('button');
                            $(bouton).attr({
                                'data-page': i,
                                'class': 'bouton-pagination btn btn-sm'
                            });

                            if (i == page) $(bouton).addClass('active');
                            $(bouton).html(i);
                            $('#pagination').append(bouton);
                        }

                    }

                    // clic sur un bouton de pagination
                    $(".bouton-pagination").on('click', function (event) {
                        let pageCible = $(this).attr('data-page');
                        // console.log("je veux la page "+pageCible);
                        lanceRecherche(event, pageCible);
                    });

                    // Affichage des résultats
                    /* 
                    for(let i = 0; i< Search.length; i++){
                        let film = Search[i];
                        let figure = document.createElement('figure');
                        let img = document.createElement('img');
                        let caption = document.createElement('figcaption');
                        // img.setAttribute('src',film.Poster);
                        // $(img).attr('src',film.Poster);
                        // $(img).attr('alt',film.Title);
                        $(img).attr({
                            'src' : film.Poster,
                            'alt': film.Title
                        });
                        // figure.appendChild(img);
                        $(figure).append(img);
                        $(caption).html(`${film.Title} (${film.Year})`);
                        $(figure).append(caption);
                        $('#resultats').append(figure);
                    }
                    */

                    reponse.Search.forEach(
                        // function(film){
                        (film) => {
                            let figure = document.createElement('figure');
                            let img = document.createElement('img');
                            let caption = document.createElement('figcaption');
                            // img.setAttribute('src',film.Poster);
                            // $(img).attr('src',film.Poster);
                            // $(img).attr('alt',film.Title);
                            $(img).attr({
                                'src': film.Poster,
                                'alt': film.Title
                            });
                            // figure.appendChild(img);
                            $(figure).append(img);
                            $(caption).html(`${film.Title} (${film.Year})`);
                            $(figure).append(caption);
                            $('#resultats').append(figure);
                        });

                } else {
                    $('#resultats').html('Pas de résultats');
                }
            },
            beforeSend: function () {
                $('#resultats').html('<img src="dark-loader.gif" class="loader">');
            }
        });

        // $.get()
        // $.get(URLRECHERCHE, {}, function(reponse){}, 'json');
        /*
            $.ajax({
                method :'GET',
                url : URLRECHERCHE,
                data: {},
                success : function(reponse){},
                dataType : 'json'    
            });

        */

        // $.post()
        // $.post(URLRECHERCHE, {}, function(reponse){}, 'json');
    }


    $.get('copyright.txt', {}, function (reponse) {
        $('footer .row .col').html(reponse);
    }, 'text');




}); // Fin du DOM chargé