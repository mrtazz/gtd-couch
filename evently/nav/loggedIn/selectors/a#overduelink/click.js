function(){

  // set app object
  var app = $$(this).app;
  // calculate date for yesterday
  var today = Date.parse( ((new Date()).getMonth() + 1) + "/"
                          + (new Date()).getDate() + "/"
                          + (new Date()).getFullYear()
                        );
  var aday = (60 * 60 * 25) * 1000; // 60 sec * 60 min * 24h * 1000msec
  var yesterday = today - aday;
  /**
   * @brief method to take existing data and concatenate them onto tasks
   *
   * @param data obj containing rows to concatenate
   *
   */
  var query_tasks = function(data)
  {
    app.db.view("couchapp/tasks_by_duedate", {
      startkey: 0,
      endkey: yesterday,
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
