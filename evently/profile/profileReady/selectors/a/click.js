function() {
  // slide up/down for about text
  var newtask = $("#newentry");
  if (newtask.is(":hidden"))
  {
    newtask.slideDown("fast");
  }
  else
  {
    newtask.slideUp("fast");
  }

};
