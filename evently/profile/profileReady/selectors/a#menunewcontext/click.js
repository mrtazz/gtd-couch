function() {
  // hide other input menus
  $("#newprojectwrapper").hide();
  $("#newtaskwrapper").hide();
  // slide up/down for about text
  var slider = $("#newcontextwrapper");
  if (slider.is(":hidden"))
  {
    slider.slideDown("fast");
  }
  else
  {
    slider.slideUp("fast");
  }

};
