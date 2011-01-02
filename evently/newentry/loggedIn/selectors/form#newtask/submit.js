function() {
  var form = $(this),
    app = $$(form).app,
    f = form.serializeObject(),
    doc = {
      created_at : new Date(),
      owner : $$("#profile").profile.name,
      title : f.title,
      notes : f.notes,
      tags : f.tags.split(","),
      project : $('select#taskprojectselect option:selected').val(),
      contexts : $.map($('select#taskcontextselect :selected'),
                              function(e) { return $(e).text(); }),
      type : "task",
      status: "wip"
    };
  doc.duedate = Date.parse(f.duedate);
  for (var i in doc.tags)
  {
    doc.tags[i] = $.trim(doc.tags[i]);
  }
  // save document to couch
  app.db.saveDoc(doc,
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
