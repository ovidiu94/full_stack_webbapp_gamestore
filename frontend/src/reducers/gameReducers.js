export const getAllGamesReducer=(state={games : []}, action)=>{

    switch(action.type){

        case 'GET_GAMES_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_GAMES_SUCCESS' : return{
            loading : false,
            games : action.payload
        }
        case 'GET_GAMES_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}

export const getGameByIdReducer=(state={ }, action)=>{

    switch(action.type){

        case 'GET_GAMEBYID_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_GAMEBYID_SUCCESS' : return{
            loading : false,
            game : action.payload
        }
        case 'GET_GAMEBYID_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}

export const addGameReducer=(state={ }, action)=>{

    switch(action.type){

        case 'ADD_GAME_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'ADD_GAME_SUCCESS' : return{
            loading : false,
            success : true,
        }
        case 'ADD_GAME_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}

export const editGameReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_GAME_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_GAME_SUCCESS' : return{
            editloading : false ,
            editsuccess : true,
        }
        case 'EDIT_GAME_FAILED' : return{
            editerror : action.payload ,
            editloading : false
        }
        default : return state
    }

}