export function Reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "isCompleted":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {...item,isCompleted: !item.isCompleted};
        } else {
          return item;
        }
      });
  }
}
