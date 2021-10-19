import HomeScreen from '../src/screens/HomeScreen.js';
import ProductScreen from '../src/screens/ProductScreen.js';
import {parseRequestUrl} from '../src/utils.js';
import Error404Screen from '../src/screens/Error404Screen.js';
const routes ={
   '/': HomeScreen,
   '/producto/:id': ProductScreen,
};

const router = () =>{
   const request = parseRequestUrl();
   const parseUrl = (request.resource ? `/${request.resource}`: '/') + 
   (request.id? '/:id':'') + 
   (request.verb? `/${request.verb}`:'');
   const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;

	const main = document.getElementById('main-container');
	main.innerHTML = screen.render();
};

window.addEventListener ('load', router);
window.addEventListener ('hashchange', router);
