function(doc)
{
  if (doc.type == "task" && doc.status)
  {
    emit(doc.status, doc);
  }
}
