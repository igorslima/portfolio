var doc = $('html, body');

// fazer um scroll suave
$('.scroll-suave').click(function() {
	doc.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
});

// Abrir side-nav mobile
$(function(){
    $(".button-collapse").sideNav();
    console.log("show");
});

// Fechar side-nave mobile
 $(function(){
     $(".close-nav").sideNav("hide");
     console.log("hide");
 });