function(doc)
{
  if (doc.type == "task" && doc.contexts)
  {
    for (var i in doc.contexts)
    {
      emit(doc.contexts[i], doc);
    }
  }
};
