function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/tasks", { success:
    function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
