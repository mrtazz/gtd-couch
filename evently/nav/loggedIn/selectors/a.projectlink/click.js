function(){
  // pass data to setTasks event
  var project = $(this).html();
  $$(this).app.db.view("couchapp/tasks_by_project", {
    key: project,
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
