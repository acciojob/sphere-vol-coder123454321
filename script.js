const radius=document.getElementById("radius");
const valume=document.getElementById("volume");
const submit=document.getElementById("submit");
function volume_sphere(){
    //Write your code here
	event.preventDefault();
	let r=Number(radius.value);
	if (r < 0) {
    alert("Radius cannot be negative");
    return;
}
	let valume_spare=(4/3)*Math.PI*r*r*r;
	valume.value=valume_spare;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
