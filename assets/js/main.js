

$( document ).ready(function() {
	
 $('.hamburger').click(function() {
    $('.menu').css('display',"initial");
    $('.hamburger').css('display',"none");
    $('.x').css('display',"initial");
 });

 $('.x').click(function() {
      $('.menu').css('display',"none");
      $('.hamburger').css('display',"initial");
      $('.x').css('display',"none");
 });

 	$('.carousel').carousel({
		interval: 3000
	});
 

 /* Modal Content */ 

  $('.about-project-modal-sm').on('show.bs.modal', function (event) {

   var button = $(event.relatedTarget) 
   var title = button.data('title')
   var projectText = button.data('text')
   var imageUrl1 = button.data('img1')
   var imageUrl2 = button.data('img2')
   var imageUrl3 = button.data('img3')
   var carouselUrl1 = button.data('cimg1')
   var carouselUrl2 = button.data('cimg2')
   var carouselUrl3 = button.data('cimg3')
   var carouselUrl4 = button.data('cimg4')

    var modal = $(this)
    modal.find('.projectTitleText').text(title)
    modal.find('.aboutProjectsText .aboutProjectsParagraph').text(projectText)
    modal.find('.modalImage1').attr('src', imageUrl1)
    modal.find('.modalImage2').attr('src', imageUrl2)
    modal.find('.modalImage3').attr('src', imageUrl3)
    modal.find('.carouselImage1').attr('src', carouselUrl1)
    modal.find('.carouselImage2').attr('src', carouselUrl2)
    modal.find('.carouselImage3').attr('src', carouselUrl3)
    modal.find('.carouselImage4').attr('src', carouselUrl4)
  });

/* Animation Bug Fix */

 $('.projectViewsButtonOne').click(function () {

  var stopTransform = $(this).parents('.overlay').addClass('noTransform');

  $('.about-project-modal-sm').on('show.bs.modal', function (e) {
       $(stopTransform).addClass('noTransform');
  });
     $('.about-project-modal-sm').on('hidden.bs.modal', function (e) {
     $(stopTransform).removeClass('noTransform');
});

 }) 


 /* Safari Bug Fix */


if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

$('.controlStyles').removeClass('hvr-grow');
$('a').removeClass('hvr-float');
$('a').removeClass('hvr-grow');
$('img').removeClass('hvr-float');

}
 
 
$(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

}); 


})
