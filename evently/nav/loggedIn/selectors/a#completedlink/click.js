function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/tasks_by_status",
    { key: "done",
      success: function(resp)
      {
        $("#tasks").trigger("setTasks", resp);
      }
  });
}
