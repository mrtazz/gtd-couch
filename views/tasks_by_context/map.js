function(doc)
{
  if (doc.type == "task" && doc.contexts && doc.status != "done")
  {
    for (var i in doc.contexts)
    {
      emit(doc.contexts[i], doc);
    }
  }
};
