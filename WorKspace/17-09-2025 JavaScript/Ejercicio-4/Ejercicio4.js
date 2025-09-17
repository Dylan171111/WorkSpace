function nombre(){
   let miNombre = document.getElementById("mi nombre");

   let primerNombre = document.createElement("span");
   let apellido = document.createElement("i");

   primerNombre.innerHTML = "Dylan ";
   apellido.innerHTML = "Ocampo";


   miNombre.appendChild(primerNombre);
   miNombre.appendChild(apellido);
}