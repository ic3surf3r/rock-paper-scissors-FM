const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        isPlaying: true,
        pChoice: action.payload.pChoice,
        cChoice: action.payload.cChoice,
        winner: action.payload.winner,
      };
    case "PLAYER_WON":
      return {
        ...state,
        score: action.payload + 1,
        winner: "",
      };
    case "PLAY_AGAIN":
      return {
        ...state,
        isPlaying: false,
        pChoice: "",
        cChoice: "",
        winner: "",
      };
    case "OPEN_RULES":
      return {
        ...state,
        open: true,
      };
    case "CLOSE_RULES":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
