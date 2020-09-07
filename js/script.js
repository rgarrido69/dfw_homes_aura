$(function(){
    $(".dropdown-item").click(function(){
        var icon_text =$(this).html();
        $(".dropdown-toggle").html(icon_text);
    })
})

setCarouselHeight('#carousel-example');

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});