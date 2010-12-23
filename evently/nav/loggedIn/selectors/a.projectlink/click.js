function(){
  // pass data to setTasks event
  var project = $(this).attr("name");
  $$(this).app.db.view("couchapp/tasks_by_project", {
    key: project,
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
  $("#navul a").removeClass("active");
  $(this).addClass("active");
}
