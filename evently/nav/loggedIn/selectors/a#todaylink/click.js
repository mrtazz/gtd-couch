function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/today", {
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
