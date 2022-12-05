// import "../../app.js";
import { Circle } from '@react-three/drei'

export class CircleClass {

    /**
 * draws the circles on the board 
 * 
 * @returns circles 
 */
    drawCircle(ListofPositionPlaces) {
        return (
            <mesh position={ListofPositionPlaces}>
            <cylinderBufferGeometry attach="geometry" args={[1, 0.5, 2, 32]} />
            {/* <meshNormalMaterial attach="material" /> */}
          </mesh>
        );
    }
}