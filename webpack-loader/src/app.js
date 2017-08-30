import css from './css/common.css';
import Layer from './components/layer/layer.js';

const App = function() {
	var dom = document.getElementById('app');
	var layer = new Layer();

	console.log(layer);

	//dom.innerHTML = layer.tpl;
	dom.innerHTML = layer.tpl({
		name: 'john',
		arr: ['apple', 'google', 'twitter']
	});
}

new App();