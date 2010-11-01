function(){
  // pass data to setTasks event
  var context = $(this).html();
  $$(this).app.db.view("couchapp/tasks_by_context", {
    key: context,
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
}
