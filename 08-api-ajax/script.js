$(function () {

    const APIKEY = '1ff1b732'; // votre clé
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

        function lanceRecherche(event,page = 1)
        // console.log(page);
        let saisie = $('#saisie').val(); // document.querySelector('#saisie').value
        const URLRECHERCHE = BASEURL + 's=' + saisie + '&type=movie';

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: URLRECHERCHE,
            success: function (reponse) {
                $('#resultats').html('');
                console.log(reponse);
                if (reponse.Response.toLowerCase() == 'True') {

                    // pagination
                    $('#pagination).html('');
                    let nbPages = parseInt(reponse.totalResultats / 10); // ex 246/10 =24 soit 25 pages
                    if(reponse.totalResultats % 10 > 0)nbPages++; //246%10 =>6 24+1=25
                    console.log(nbPages);
                    if(nbPages > 1){
                        for(let i=1; i<=nbPages;i++){
                            let bouton = document.createElement('button');
                            $(bouton).attr({
                                'data-page' : i,
                                'class' : 'bouton-pagination'
                            });
                            if(i==page) $(bouton).addClass('active');
                            $(bouton).html(i);
                            $('#pagination').append(bouton);
                        }
                    }                                                                             

                    //Affichage des résultats
                    reponse.Search.forEach(
                        (film) => {
                            let figure = document.createElement('figure');
                            let img = document.createElement('img');
                            let caption = document.createElement('figcaption');
                            // img.setAttribute('src',film.Poster);
                            $(img).attr('src',film.Poster);
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
                $('#resultats').html('Recherche en cours...');
            }
        });


    });




                                      



});                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 