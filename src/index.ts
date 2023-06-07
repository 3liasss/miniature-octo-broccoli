import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url:"./lusi.jpeg", name:"myLusi"});

Loader.shared.add({url:"./clampy.jpeg",name:"Clampy"});

Loader.shared.onComplete.add(()=>{
const clampy: Sprite = Sprite.from("./lusi.jpeg");
console.log("Hola mundo!",clampy.width, clampy.height);
clampy.anchor.set(0.5);

clampy.x = 300;
clampy.y = 300;

app.stage.addChild(clampy);
});
Loader.shared.load();