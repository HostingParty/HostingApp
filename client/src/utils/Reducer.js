// This reducer will update the User within the global scope. Accepts action which has properties of type and payload
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
