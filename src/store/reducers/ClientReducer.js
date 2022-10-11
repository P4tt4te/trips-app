export const ClientReducer = (state, action) => {
  switch (action.type) {
    case 'change_username':
      return { username: action.username, trips: state.trips };
    case 'add_trip':
      return { username: state.username, trips: [...state.trips, action.trip] };
    case 'remove_trip':
      console.log(action.tripId);
      let newtrips = state.trips.filter((trip) => trip.id !== action.tripId);
      return { username: state.username, trips: newtrips };
    default:
      return state;
  }
};
