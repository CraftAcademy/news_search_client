const rootReducer = (state = {}, action) => {
  if (action.type === 'SET_ARTICLES') {
    return {
      ...state,
      articlesList: action.payload
    }
  } else {
    return state
  }
}
export default rootReducer