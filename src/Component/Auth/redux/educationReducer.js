
  const EduReducer = (state =[], action) => {
    console.log(action.payload);
    switch (action.type) {
      case "ADD-TO-BLOCK":
        console.log("PAYLOAD", action.payload);
        state.push(action.payload);
        console.log(state)
        return  state;
    
      default:
        return state;
    }
  };
  export default EduReducer;
  