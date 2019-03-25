export function cars(state = [], action) {
    switch (action.type) {
        case "CARS_FETCH_DATA_SUCCESS":
            return action.cars;
        default:
            return state;
    }
}