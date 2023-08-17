function volume_sphere() {
	var radiusInput = document.getElementById('radius');
    var radius = parseFloat(radiusInput.value);

    // Calculate the volume of the sphere (4/3 * π * r^3)
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the volume input field with the calculated volume
    var volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(4);
	
} 


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
window.onload = function() {
    var form = document.getElementById('MyForm');
    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting
        volume_sphere(); // Call the function to calculate and display the volume
    };
};


