$(document).ready(function(){
  const sweetScroll = new SweetScroll();
  $('.header').height($(window).height());
  var navBar = $(".navigation ul");
  var headerHeight = $(".hero:first").height();

  var project_open = false;
  var isTop = true;
  $(".project").on('click',function(){
    if(project_open == false){
      $(this).addClass("open");
      project_open = true;
    }
    else{
      $(this).removeClass("open");
      project_open = false;
    }
  });
  $(window).on('scroll resize',function(){
    var prefix = "full";
    var heightTop = window.pageYOffset;
    if(heightTop > headerHeight){
      navBar.addClass(prefix);
      isTop = true;
    }
    else{
      navBar.removeClass(prefix);
      isTop = false;
    }
  });
});
