import { createContext } from "react";

type contextType = {
    gridState: Array<Array<number>>,
    setGridState: React.Dispatch<React.SetStateAction<Array<Array<number>>>>,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    gameOver: boolean,
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
    win: boolean,
    setWin: React.Dispatch<React.SetStateAction<boolean>>
  } | null
  
const StateContext = createContext<contextType>(null);
export default StateContext;