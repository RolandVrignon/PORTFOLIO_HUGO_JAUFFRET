jQuery(function($){
    $('.project').click(function(elem){
        elem.preventDefault();
        var id = this.id;
        $('.project.active').removeClass("active");
        $('#'+id+'.project').addClass("active");
        $('.visual.active').removeClass("active d-flex justify-content-end");
        $('#'+id+'.visual').addClass("active d-flex justify-content-end");
        $('.summary.active').removeClass("active");
        $('#'+id+'.summary').addClass("active");
    });
});

$(document).ready(function(){
  // Activate Carousel
  $("#carouselExampleIndicators, #carouselExampleIndicators2, #carouselExampleIndicators3, #carouselExampleIndicators4, #carouselExampleIndicators5, #carouselExampleIndicators6, #carouselExampleIndicators7, #carouselExampleIndicators8").carousel({interval: 0});
});

jQuery(function number($) {
  $(".number").append(1);

  $(".carousel-control-prev").click(function(){
    var visual = $(".visual.active li.active").attr("data-slide-to");
    var LastVisual = $(".visual.active li:last-child").attr("data-slide-to");
    var FirstVisual = $(".visual.active li:first-child").attr("data-slide-to");

    var visu = parseInt(visual, 10);
    var LastVisu = parseInt(LastVisual, 10);
    var FirstVisu = parseInt(FirstVisual, 10);
      if (visu === FirstVisu ) {
        $(".project.active .number").html(LastVisu);
      } else {
        $(".project.active .number").html(visu-1);
      }
  });

  $(".carousel-control-next").click(function(){
    var visual = $(".visual.active li.active").attr("data-slide-to");
    var LastVisual = $(".visual.active li:last-child").attr("data-slide-to");
    var FirstVisual = $(".visual.active li:first-child").attr("data-slide-to");

    var visu = parseInt(visual, 10);
    var LastVisu = parseInt(LastVisual, 10);
    var FirstVisu = parseInt(FirstVisual, 10);
      if (visu === LastVisu ) {
        $(".project.active .number").html(FirstVisu);
      } else {
        $(".project.active .number").html(visu+1);
      }
    });
});
