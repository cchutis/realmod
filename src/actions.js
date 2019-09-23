function loadComments(data) {
    return {type: "COMMENTS", payload: data}
}


function deleteComment(id) {
  return { type: "DELETEDCOMMENTS", payload: id };
}


function toggleView(view) {
    return {type: "SELECTEDVIEW", payload: view}
}

export {
    loadComments,
    toggleView,
    deleteComment
}