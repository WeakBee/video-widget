$(".klik").click(function(){
    $(".outer-widget").hide();
    $(".widget-output").show();
});
  
$(".c-widget-outer").click(function(){
    $(".outer-widget").hide();
});
$(".c-widget-output").click(function(){
    $(".widget-output").hide();
    $(".outer-widget").show();
});