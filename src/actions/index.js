const fetchDataSuccess = (data) => {
    return {
        type:'FETCH_DATA_SUCCESS',
        payload:data,
    }
}


const fetchDataLoading = () => {
    return {
        type:'FETCH_DATA_LOADING'
    }
}


const fetchDataError = () => {
    return {
        type:'FETCH_DATA_ERROR'
    }
}


const showData = () => {
    return {
        type:'SHOW_DATA'
    }
}

const removeData = () => {
    return {
        type:'REMOVE_DATA'
    }
}


const noData = () => {
    return {
        type:'NO_DATA'
    }
}


export {
    fetchDataError,
    fetchDataLoading,
    fetchDataSuccess,
    showData,
    removeData,
    noData,
}