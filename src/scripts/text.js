import Drawable from "./drawable.js";
import { Text as TextComponent } from '@react-three/drei';

export default class Text extends Drawable {
    text;
    fontSize;
    color;
    constructor(position, rotation, scale, text, fontSize = 6, color = "pink") {
        super(position, rotation, scale)
        this.text = text;
        this.fontSize = fontSize;
        this.color = color;
    }

    getElement() {
        return (
            <mesh position={[this.position.x, this.position.y, this.position.z]} scale={this.scale}>
                <TextComponent fontSize={this.fontSize} color={this.color}>{this.text}</TextComponent>
            </mesh>
        )
    }
}