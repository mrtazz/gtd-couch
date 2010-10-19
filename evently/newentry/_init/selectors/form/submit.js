function() {
  var form = $(this),
    f = form.serializeObject(),
    doc = {
      created_at : new Date(),
      owner : $$("#profile").profile,
      title : f.title,
      notes : f.notes,
      tags : f.tags.split(","),
      duedate : f.duedate,
      project : f.project,
      type : "task"
    };
  $$(form).app.db.saveDoc(doc, {
    success : function(r) {
      $.log("Success!");
    }
  });

  return false;
};
