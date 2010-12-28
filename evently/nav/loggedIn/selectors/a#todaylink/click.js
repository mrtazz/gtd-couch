function(){

  // set app object
  var app = $$(this).app;
  /**
   * @brief method to take existing data and concatenate them onto tasks
   *
   * @param data obj containing rows to concatenate
   *
   */
  var query_tasks = function(data)
  {
    var d = new Date();
    var today = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    app.db.view("couchapp/tasks_by_duedate", {
      key: today,
      success: function(resp)
      {
        // combine data
        resp.rows.push.apply(resp.rows, data.rows);
        $("#tasks").trigger("setTasks", resp);
      }
    });
  };

  // query projects and contexts and then call query_tasks
  app.db.view("couchapp/projects_and_contexts", {
    success: query_tasks
  });

  // setup activity indicators
  $("#navul a").removeClass("active");
  $(this).addClass("active");
}
