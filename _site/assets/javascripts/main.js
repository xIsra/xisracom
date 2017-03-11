document.addEventListener("DOMContentLoaded", () => {
  const sweetScroll = new SweetScroll();
}, false);

$(document).ready(function(){
  var project_open = false;
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
});
