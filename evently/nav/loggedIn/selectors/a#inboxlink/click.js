function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/box", { key : "inbox",
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
