function(){
  // pass data to setTasks event
  $.log("inbox tasks");
  $$(this).app.db.view("couchapp/box", { key : "inbox",
    success: function(resp)
    {
      $.log(resp);
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
