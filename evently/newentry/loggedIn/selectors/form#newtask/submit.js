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
      project : $('select#taskprojectselect option:selected').val(),
      contexts : $.map($('select#taskcontextselect :selected'),
                              function(e) { return $(e).text(); }),
      type : "task",
      status: "wip"
    };
  for (i in doc["tags"])
  {
    doc["tags"][i] = $.trim(doc["tags"][i]);
  }
  // save document to couch
  $$(form).app.db.saveDoc(doc,
  {
    success : function(r) { }
  });
  //clear forms
  $(':input', form)
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
  $('#projectselect').find('option:first').attr('selected', 'selected').parent('select');

  return false;
};
