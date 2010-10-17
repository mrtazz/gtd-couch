function(doc)
{
  if (doc.type == "task")
  {
    emit(doc.contexts, doc);
  }
};
