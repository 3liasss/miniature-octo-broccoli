import { AnimatedSprite, Container, Graphics, Texture, Text } from "pixi.js";
import { LuciHat } from "./LuciHat";
//import { Puntaje } from "./Puntaje";


export class Scene extends Container{
//en este constructor se descargan los assets
constructor (){
super ();

//CLASS EXTENDING FROM CONTAINER
//con esto es para que se mueva todo junto, el gorro y la lusi
const lucihat: LuciHat = new LuciHat();//padre
lucihat.x= 200;
lucihat.y=300;
this.addChild(lucihat)

//ANIMATED SPRITE
//animacion a mano
const lucianimada: AnimatedSprite = new AnimatedSprite(
  [
    Texture.from("Run1"),
    Texture.from("Run2"),
    Texture.from("Run3"),
    Texture.from("Run2"),
    Texture.from("Run1"),
    Texture.from("Run2"),
    Texture.from("Run3"),
    Texture.from("Run2"),
    Texture.from("Run1"),
    Texture.from("Run4")
  ]  , true
);
lucianimada.play();
lucianimada.animationSpeed =0.09
this.addChild(lucianimada);

//GRAPHICS
//graphics es para debuggear en general
const myGraph: Graphics = new Graphics();
myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha:1});
myGraph.moveTo(0,0);//lo ideal es empezar el 0,0
myGraph. lineTo (300, 500);
myGraph. lineTo(300, 100);
myGraph. lineTo(0,0)

this.addChild(myGraph);//y terminar en el 0,0

myGraph.clear();//esto limpia el grafico

myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha:1});
myGraph.beginFill (0x00FF00, 1) ;
myGraph.drawCircle(0,0, 100);

myGraph.position.set(1280/2,720/2)


//TEXT

const myText: Text = new Text("Hola mundo",{fontSize:150, fill:0xFF0000,fontFamily:"Times New Roman"});
myText.text = "kkkkkkk";
myText.position.x=500;
myText.angle= 75;
myText.scale.set (1);//la escala hace que se vea mas borroso, agranda a lo bruto
this.addChild(myText);


//Nine-Slice Plane
//const panel:Sprite =Sprite.from("panell") esto no es lo optimo

//const panelila : Puntaje= new Puntaje ();
//this.addChild(panelila);






}

}