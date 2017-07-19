function jumpto(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top - 50},'slow');
}

$( document ).ready(function() {
    jumpto("myCarousel");
});