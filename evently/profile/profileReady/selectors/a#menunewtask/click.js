function() {
  // slide up/down for about text
  var newtask = $("#newtaskwrapper");
  if (newtask.is(":hidden"))
  {
    newtask.slideDown("fast");
  }
  else
  {
    newtask.slideUp("fast");
  }

};
