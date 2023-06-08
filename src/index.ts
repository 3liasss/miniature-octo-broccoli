import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720,
});

//esto es para que se reescale la pantalla manteniendo la relacion de aspecto
window.addEventListener("resize",()=>{
	console.log("resized!"); //avisa cuando hay un cambio de escala
	
//	app.screen.width 640 x
//	app.screen.height 480 y
//	window.innerWidth lo que el navegador diga
//	window.innerHeight
	//esto es calcula la escala en x e y
	const scaleX= window.innerWidth / app.screen.width;
	const scaleY= window.innerHeight /app.screen.height;
	const scale = Math.min(scaleX,scaleY);
	//aca va a quedar el tamaño del juego
	const screenWitdth = Math.round(app.screen.width * scale);//el math es para q no de con comas
	const screenHeight = Math.round(app.screen.height * scale);
	
	//aca voy a hacer los margenes
	const marginHorizontal = Math.floor((window.innerWidth -screenWitdth)/2);//el floor es para que no se escape de la pantalla, otro metodo d redondeo
	const marginVertical = Math.floor((window.innerHeight -screenHeight)/2);

	app.view.style.width= screenWitdth+"px";
	app.view.style.height= screenHeight+"px";
	
	app.view.style.marginLeft= marginHorizontal + "px";
	app.view.style.marginRight= marginHorizontal + "px";

	app.view.style.marginTop= marginVertical + "px";
	app.view.style.marginBottom= marginVertical + "px";
});
window.dispatchEvent(new Event("resized"))//con este se fuerza el cambio, pq sino hasta que no se cambie no se centra la imagen



Loader.shared.add({url:"./Luci.png", name:"myLuci"});
Loader.shared.add({url:"./hat.png", name:"Hat"});

Loader.shared.onComplete.add(()=>{
const Luz: Sprite = Sprite.from("./Luci.png");//hijo
Luz.anchor.set(0.5);// 
Luz.pivot.set(0.5);// esto es para ser el centro creo
Luz.scale.x =0.2;
Luz.scale.y =0.2;
Luz.x =300;
Luz.y =300;
//Luz.angle=-45 esto es para que rote
const hat: Sprite=Sprite.from("./hat.png");
hat.scale.x =0.1;
hat.scale.y =0.1;
hat.x =280;
hat.y =170;
//ahora el stage tiene dos hijos: la lusi y el gorro
//como la luci esta antes que el gorro, este queda adelante de ella

//app.stage.addChild(Luz); esto es para agregarlo de auno
//app.stage.addChild(hat);

//con esto es para que se mueva todo junto, el gorro y la lusi
const lucihat: Container = new Container();//padre

lucihat.addChild(Luz);
lucihat.addChild(hat);

app.stage.addChild(lucihat)
});
Loader.shared.load();