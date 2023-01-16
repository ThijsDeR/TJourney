import { useEffect, useRef, useState } from "react";
import GameScreen from "./GameScreen";

function GameWrapper(props) {
    const [timeElapsed, setTimeElapsed] = useState(0)
    
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef();
    const previousTimeRef = useRef();
    
    const animate = (time) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;

        setTimeElapsed(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }
    
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
    
    return (
        <>
            <GameScreen {...props} timeElapsed={timeElapsed}/>
        </>
    )
}
  
export default GameWrapper
