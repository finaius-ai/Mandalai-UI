
const initialState = { selectedTab: "meetings",};


const tabs = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return {selectedTab: action.selectedTab};
    default:
      return state
  }
};

export default tabs