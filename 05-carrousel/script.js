$(function(){

    let mesImgs = $('#reglette img');
    console.log(mesImgs);
    let nbImgs = mesImgs.length;

    function reorder(){
        for(let k=0; k < nbImgs; k++){
            mesImgs.eq(k).css('order',k);
        }
    }
    reorder(); // je numérote mes images avec la propriété order

    let compteurSlides = 0;
    let timer = setInterval(carrousel, 4000);

    
    function carrousel(){
        
        $('#reglette').animate(
            {
                'left' : '-100%'
            },1000,function(){
                $('#reglette').css('left',0);
                mesImgs.eq(compteurSlides).css('order',compteurSlides+nbSlides);
                compteurSlides++;
            }
        );
        if(compteurSlides == nbImgs){  // j'ai fait un tour de carrousel
            compteurSlides = 0;
            reorder();
        }
    }

    $('#reglette')
    .on('mouseover',function(){
        clearInterval(timer);
    })
    .on('mouseout',function(){
        timer = setInterval(carrousel, 2000);
    });







}); // Dom chargé