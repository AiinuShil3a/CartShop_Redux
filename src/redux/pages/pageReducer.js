const initialState = {
    home: true
}

const pageReducer = (state = initialState, action) => {
    console.log('Action:', action);
    switch (action.type) {
      case "HOME":
        return { home: true };
      case "CART":
        return { home: false };
      default:
        return state;
    }
  };
  

export default pageReducer;
