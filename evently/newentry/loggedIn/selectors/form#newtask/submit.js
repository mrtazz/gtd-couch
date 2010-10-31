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
      project : f.project,
      type : "task"
    };
    if (doc.project == "")
    {
      doc["box"] = "inbox";
    }
  $$(form).app.db.saveDoc(doc, {
    success : function(r) {
    }
  });
  $(':input', form)
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
  $('#projectselect').find('option:first').attr('selected', 'selected').parent('select');

  return false;
};
