const defaultState = {
    comments: [],
    deletedComments: 0,
    selectedView: 'comments'
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {

    case "COMMENTS":
      return { ...prevState, comments: action.payload };

    case "DELETEDCOMMENTS":
        const updatedComments = prevState.comments.filter(comment => {
          if (comment.id === action.payload) {
            return null;
          } else {
            return comment;
          }
        });
      return { ...prevState, deletedComments: prevState.deletedComments + 1, comments: updatedComments };

    case "SELECTEDVIEW":
        return { ...prevState, selectedView: action.payload };

    default:
      return prevState;
  }
}

export default reducer;
