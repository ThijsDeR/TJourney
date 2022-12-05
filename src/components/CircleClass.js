import "../../App.css";
import { Circle } from '@react-three/drei'

export class CircleClass {

    /**
 * draws the circles on the board 
 * 
 * @returns circles 
 */
    drawCircle(ListofPositionPlaces) {
        return (
            <mesh position={ListofPositionPlaces} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
            </mesh>
        );
    }
}