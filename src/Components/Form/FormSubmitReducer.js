export const storedData = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DATA':
      let updatedState = [...state];
      updatedState.push(action.payload);
      return updatedState;
    default:
      return state;
  }
};
