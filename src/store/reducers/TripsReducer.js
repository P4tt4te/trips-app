export const TripsReducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return { count: parseInt(action.input1) + parseInt(action.input2) };
      case "multi":
        return { count: parseInt(action.input1) * parseInt(action.input2) };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };