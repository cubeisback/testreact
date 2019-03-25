export function carsFetchDataSuccess(cars) {
    return {
        type: "CARS_FETCH_DATA_SUCCESS",
        cars
    }
}

export function carsFetchData(url) {
    return (dispatch)=>{
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(cars => dispatch(carsFetchDataSuccess(cars)))
    }
}