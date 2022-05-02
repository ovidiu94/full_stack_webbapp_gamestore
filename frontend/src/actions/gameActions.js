import axios from "axios";

export const getAllGames = () => async (dispatch) => {
  dispatch({ type: "GET_GAMES_REQUEST" });

  try {
    const response = await axios.get("/api/games/getallgames");
    console.log(response);
    dispatch({ type: "GET_GAMES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_GAMES_FAILED", payload: error });
  }
};

export const getGameById = (gameid) => async (dispatch) => {
  dispatch({ type: "GET_GAMEBYID_REQUEST" });

  try {
    const response = await axios.post("/api/games/getgamebyid", {gameid});
    console.log(response);
    dispatch({ type: "GET_GAMEBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_GAMEBYID_FAILED", payload: error });
  }
};

export const filterGames = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_GAMES_REQUEST" });

  try {
    var filteredGames;
    const response = await axios.get("/api/games/getallgames");
    filteredGames = response.data.filter((game) =>
      game.name.toLowerCase().includes(searchkey)
    );
    if (category != "all") {
      filteredGames = response.data.filter(
        (game) => game.category.toLowerCase() == category
      );
    }
    dispatch({ type: "GET_GAMES_SUCCESS", payload: filteredGames });
  } catch (error) {
    dispatch({ type: "GET_GAMES_FAILED", payload: error });
  }
};

export const addGame = (game) => async (dispatch) => {
  dispatch({ type: "ADD_GAME_REQUEST" });
  try {
    const response = await axios.post("/api/games/addgame", { game });
    console.log(response);
    dispatch({ type: "ADD_GAME_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_GAME_FAILED", payload: error });
  }
};

export const editGame=(editedgame)=>async dispatch=>{
  dispatch({type:'EDIT_GAME_REQUEST'})
  try {
      const response= await axios.post('/api/games/editgame' , {editedgame})
      console.log(response);
      dispatch({type:'EDIT_GAME_SUCCESS'})
      window.location.href='/admin/gameslist'
  } catch (error) {
      dispatch({type:'EDIT_GAME_FAILED' , payload : error})
  }
}

export const deleteGame=(gameid)=>async dispatch=>{

  try {
      const response =await axios.post('/api/games/deletegame' , {gameid})
      alert('Game Deleted Successfully')
      console.log(response);
      window.location.reload()
  } catch (error) {
      alert('Something went wrong')
      console.log(error);
  }
         
  
  }

