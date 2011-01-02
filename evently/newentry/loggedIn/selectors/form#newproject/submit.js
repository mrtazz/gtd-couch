function() {
  var form = $(this),
    f = form.serializeObject(),
    doc = {
      created_at : new Date(),
      owner : $$("#profile").profile.name,
      title : f.title,
      notes : f.notes,
      tags : f.tags.split(","),
      duedate : f.duedate,
      contexts : $.map($('select#projectcontextselect :selected'),
                              function(e) { return $(e).text(); }),
      type : "project"
    };
  $$(form).app.db.saveDoc(doc, {
    success : function(r) {
    }
  });
  $(':input', form)
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');

  // update navigation
  var app = $$(this).app;
  app.db.view("couchapp/projects_and_contexts", {
    success: function(resp)
    {
      $("#nav").trigger("loggedIn", resp);
      $("#newentry").trigger("loggedIn", resp);
    }
  });

  return false;
};
