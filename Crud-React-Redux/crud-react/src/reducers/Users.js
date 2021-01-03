import { GET_USERS_LIST, GET_USERS_DETAIL, POST_USER_CREATE, PUT_USER_DETAIL } from '../actions/UserActions'

let initialState = {
    getUsersList: false,
    errorUsersList: false,
    getUserDetail: false,
    errorUserDetail: false,
    getResponDatUser: false,
    errorResponseDataUser: false,
    title: 'Probando pasando Parmetros desde Redux',
}

const person = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersList: action.payload.data,
                errorUsersList: action.payload.errorMessage
            };
        case GET_USERS_DETAIL:
            return {
                ...state,
                getUserDetail: action.payload.data,
                errorUserDetail: action.payload.errorMessage
            };
        case POST_USER_CREATE:
            return {
                ...state,
                getResponDatUser: action.payload.data,
                errorResponseDataUser: action.payload.errorMessage
            };
        case PUT_USER_DETAIL:
            return {
                ...state,
                getResponDatUser: action.payload.data,
                errorResponseDataUser: action.payload.errorMessage
            };
        default:
            return state;
    }
};

export default person;