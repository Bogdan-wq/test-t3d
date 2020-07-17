const initialState = {
    content:null,
    loading:false,
    error:false,
    isShown:false,
    noDataToShow:false,
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                noDataToShow:false,
                loading:false,
                error:false,
                content:action.payload,
            }


        case 'FETCH_DATA_LOADING':
            return {
                ...state,
                noDataToShow:false,
                loading:true,
                error: false,
                content: null,
            }

        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                noDataToShow:false,
                loading:false,
                error: true,
                content:null,
            }

        case 'SHOW_DATA':
            return {
                ...state,
                noDataToShow:false,
                isShown: true,
            }

        case 'REMOVE_DATA':
            return {
                ...state,
                content:null,
                isShown: false,
                noDataToShow:false,
            }

        case 'NO_DATA':
            return  {
                ...state,
                noDataToShow:true,
            }



        default:
            return state;
    }
}


export default reducer;