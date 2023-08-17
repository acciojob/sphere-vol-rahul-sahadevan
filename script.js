function volume_sphere() {
	let radius = document.getElementByid("radius");
	let volume = document.getElementByid("volume0");
	volume = radius * radius;
	return volume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
