const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        default: 
            return state;
    }
}

export const setUsersActionCreator = (users) => {
    return {type: 'SET_USERS', users}
}

// export function personsFetchData(url) {
//     return (dispatch) => {
//         fetch(url)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error(res.statusText)
//                 }
//                 return res;
//             })
//             .then(users => dispatch(setUsersActionCreator(users)))
//     }
// }

export default usersReducer;