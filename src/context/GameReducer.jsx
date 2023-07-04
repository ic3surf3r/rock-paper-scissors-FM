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
        score: score + 1,
      };
    case "PLAY_AGAIN":
      return {
        ...state,
        isPlaying: false,
        pChoice: "",
        cChoice: "",
        winner: "",
      };
    default:
      return state;
  }
};

export default gameReducer;
