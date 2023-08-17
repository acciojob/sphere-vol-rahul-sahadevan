function volume_sphere() {
	let radius = document.getElementByid("radius");
	let volume = document.getElementByid("volume");
	volume = radius * radius;
	return volume;
	
} 
console.log(volume_sphere());

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
