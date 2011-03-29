function(doc)
{
  if (doc.type == "task" && doc.status != "done")
  {
    emit(doc.project, doc);
  }
};
