import { Container, NineSlicePlane, Sprite, Texture} from "pixi.js";

export class Puntaje extends Container{
    constructor(){
        super();
        const panel = new NineSlicePlane(Texture.from("panell"),35,35,35,35)
        panel.width =500;
        panel.height=300;
        panel.scale.set(2);
        panel.position.x=100;
        panel.position.y=100;
        this.addChild(panel);
        const star1: Sprite = Sprite.from("estrella");
        const star2: Sprite = Sprite.from("estrella");
        const star3: Sprite = Sprite.from("estrella");
        this.addChild(star1);
        this.addChild(star2);
        this.addChild(star3);
    
    }

}