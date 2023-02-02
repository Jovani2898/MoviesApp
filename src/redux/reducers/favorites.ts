const initialState = {
  favorites: [],
};

export const FavoritesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    default:
      return state;
  }
};
