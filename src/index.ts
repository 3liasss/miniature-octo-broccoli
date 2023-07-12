import { Application, Loader} from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';

//RENDERIZADO POR PANTALLA CON RESOLUCIÓN DESEADA
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720,
});

//RESIZE PARA ACOMODAR LA PANTALLA
window.addEventListener("resize",()=>{
	//console.log("resized!"); avisa cuando hay un cambio de escala en la consola
	
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
window.dispatchEvent(new Event("resize"))//con este se fuerza el cambio, pq sino hasta que no se cambie no se centra la imagen

//LOADER QUE CARGA LOS ASSETS DESDE OTRO ARCHIVO
Loader.shared.add(assets);

//CREA UNA ESCENA Y LA MUESTRA EN PANTALLA
Loader.shared.onComplete.add(()=>{
const myScene= new Scene();
app.stage.addChild(myScene);
});

//CARGA LOS ASSETS
Loader.shared.load();