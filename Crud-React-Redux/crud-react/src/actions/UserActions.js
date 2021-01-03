import axios from 'axios'

export const GET_USERS_LIST = 'GET_USERS_LIST'
export const GET_USERS_DETAIL = 'GET_USERS_DETAIL'
export const POST_USER_CREATE = 'POST_USER_CREATE'
export const PUT_USER_DETAIL    = 'PUT_USER_DETAIL'

const URL_BASE = 'http://my-json-server.typicode.com/damartinezn/crud-react-json-server/users'

export const getUserList = () => {
    return (dispatch) => {
        axios.get(URL_BASE)
            .then(function (response) {
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const getUserDetail = (id) => {
    return (dispatch) => {
        axios.get(URL_BASE + '/' + id)
            .then(function (response) {
                dispatch({
                    type: GET_USERS_DETAIL,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USERS_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const postUserCreate = (data) => {
    return (dispatch) => {
        axios
            .post(URL_BASE, data)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const puttUserEdit = (data, id) => {
    return (dispatch) => {
        axios
            .put(URL_BASE + '/'+ id, data)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: PUT_USER_DETAIL,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: PUT_USER_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
      axios
        .delete(URL_BASE +'/'+ id
        )
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
          
        });
    };
  };
  

export const deleteDataUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USERS_DETAIL,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
  
  
      dispatch({
        type: POST_USER_CREATE,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
    };
  };