export const ClientReducer = (state, action) => {
  switch (action.type) {
    case 'change_username':
      return {
        username: action.username,
        selectedTrip: state.selectedTrip,
        trips: state.trips,
      };
    case 'add_trip':
      let tripExist = state.trips.findIndex(
        (trip) => trip.trip.id === action.trip.id
      );
      if (tripExist === -1) {
        return {
          username: state.username,
          selectedTrip: state.selectedTrip,
          trips: [...state.trips, { trip: action.trip, seats: action.seats }],
        };
      } else {
        let tripsWithoutSelected = state.trips.filter(
          (trip) => trip.trip.id !== action.trip.id
        );

        let selectedTrip = state.trips.filter(
          (trip) => trip.trip.id === action.trip.id
        );

        return {
          username: state.username,
          selectedTrip: state.selectedTrip,
          trips: [
            ...tripsWithoutSelected,
            {
              trip: selectedTrip[0].trip,
              seats: selectedTrip[0].seats + parseInt(action.seats),
            },
          ],
        };
      }
    case 'remove_trip':
      let newtrips = state.trips.filter(
        (trip) => trip.trip.id !== action.tripId
      );
      return {
        username: state.username,
        selectedTrip: state.selectedTrip,
        trips: newtrips,
      };
    case 'add_selectedTrip':
      return {
        username: state.username,
        selectedTrip: action.trip,
        trips: state.trips,
      };
    case 'remove_selectedTrip':
      return {
        username: state.username,
        selectedTrip: null,
        trips: state.trips,
      };
    default:
      return state;
  }
};
