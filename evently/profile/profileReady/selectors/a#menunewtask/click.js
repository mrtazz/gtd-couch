function() {
  // slide up/down for about text
  var slider = $("#newtaskwrapper");
  if (slider.is(":hidden"))
  {
    slider.slideDown("fast");
  }
  else
  {
    slider.slideUp("fast");
  }

};
