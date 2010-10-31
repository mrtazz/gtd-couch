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

  return false;
};
