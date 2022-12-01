import "../../App.css";
import { Circle } from '@react-three/drei'
import { ListofPositionPlaces } from "../../assets/Environment/Environment";

/**
 * draws the circles on the board 
 * 
 * @returns circles 
 */
export function drawCircle() {
  return (
    <mesh position={ListofPositionPlaces} rotation={[-1.55, 0, 0]} scale={2}>
      <Circle />
    </mesh>
  );






}
