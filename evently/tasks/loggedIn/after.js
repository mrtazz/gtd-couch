function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/all", { success:
    function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
