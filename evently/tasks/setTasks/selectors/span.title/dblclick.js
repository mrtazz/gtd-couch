function()
{
  $.log("Double Click!");
  var formwrapper = $(this).parent().children("div.taskeditor");
  if (formwrapper.is(":hidden"))
  {
    formwrapper.slideDown("fast");
  }
  else
  {
    formwrapper.slideUp("fast");
  }
};
