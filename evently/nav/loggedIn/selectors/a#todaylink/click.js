function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/box", { key : "today",
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
