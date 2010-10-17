function(doc){
  if(doc.type == "project")
  {
    emit(null, doc);
  }
};
