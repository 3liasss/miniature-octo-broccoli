import { Container, Sprite } from "pixi.js";
//necesario el export asi lo detecta
export class LuciHat extends Container{
    constructor(){
        super();
        const Luz: Sprite = Sprite.from("myLuci");//hijo
        //Luz.anchor.set(0.5);// 
        //Luz.pivot.set(0.5);// esto es para ser el centro creo
        Luz.scale.x =0.5;//tamaño
        Luz.scale.y =0.5;
        Luz.x =0;
        Luz.y =0;
        //Luz.angle=-45 esto es para que rote
        const hat: Sprite=Sprite.from("Hat");
        hat.scale.x =0.4;
        hat.scale.y =0.4;
        hat.x=-10
        hat.y=-5
        //app.stage.addChild(Luz); esto es para agregarlo de auno
        //app.stage.addChild(hat);
        this.addChild(Luz);
        this.addChild(hat);
    }
}