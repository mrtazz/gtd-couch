function() {
  // hide other input menus
  $("#newcontextwrapper").hide();
  $("#newtaskwrapper").hide();
  // slide up/down for about text
  var slider = $("#newprojectwrapper");
  if (slider.is(":hidden"))
  {
    slider.slideDown("fast");
  }
  else
  {
    slider.slideUp("fast");
  }

};
