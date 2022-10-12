export const TripsReducer = (state, action) => {
  switch (action.type) {
    case 'change_seats':
      let tripsWithoutSelected = state.trips.filter(
        (trip) => trip.id !== action.idTrip
      );
      let selectedTrip = state.trips.filter(
        (trip) => trip.id === action.idTrip
      );
    
      selectedTrip[0].seats = selectedTrip[0].seats + parseInt(action.seats);

      return { trips: [...tripsWithoutSelected, selectedTrip[0]] };
    default:
      return state;
  }
};
