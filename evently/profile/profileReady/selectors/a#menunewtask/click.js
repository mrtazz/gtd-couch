function() {
  // slide up/down for about text
  var slider = $("#sliderwrapper");
  if (slider.is(":hidden"))
  {
    slider.slideDown("fast");
  }
  else
  {
    slider.slideUp("fast");
  }

};
