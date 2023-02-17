//SISTEMA DE SIMULACION CALCULAR PROMOCION DE ALUMNO.
//DI PIERRO SEBASTIAN
// ENTREGA FINAL


const savedata = async () =>{

    const resp = await fetch('https://api.fabianjanuszewski.com/34165/item',{
    
    method: 'POST',
    body: JSON.stringify({
            title: 'coderhouse',
            body: 'post de prueba',
            userid: '1',

    }),   

    // headers: {
    //     'Content-type':'application/json; charset=UTF-8',
            
    //         },

})
.then ((response) => response.json())
.then ((data) => console.log (data))
}




    
let inputFinal = document.querySelector("#prueba");
const array_alumnos = [];
let existe = false;

//RECUPERAR DATOS DE ESTADO DE SESSION STORAGE

let estado = sessionStorage.getItem('estado',estado_curso)

document.querySelector("#estado_curso").value = estado;

//FUNCION LIMPIAR PAGINA


let refresh = document.getElementById('btnlimpiar');
refresh.addEventListener('click', _ => {
            location.reload();
})


// FUNCION ACTIVAR O DESACTIVAR REGISTRO DE DATOS DE ACUERDO A ESTADO RESGITRADO EN SESSIONSTORAGE

document.querySelector("#btnsession").addEventListener("click", function(){

    estado_curso = document.querySelector("#estado_curso").value;
    sessionStorage.setItem ('estado' , estado_curso);

    if(estado_curso == "ACTIVADO"){
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La carga de datos esta activada',
            showConfirmButton: false,
            timer: 1500
          })
        

        

    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'La carga de datos esta desactivada',
            showConfirmButton: false,
            timer: 1500
          })
    
        
    }

});


if (estado == "ACTIVADO"){
   
    
    //FUNCION CALCULAR

    document.querySelector("#btncalcular").addEventListener("click", function(){
    
    //INGRESAR DATOS POR PAGINA HTML
   
    let nombre = document.querySelector("#nom_y_ap").value;
    let legajo = document.querySelector("#legajo").value;
    let materia = document.querySelector("#materia").value;
    let profesor = document.querySelector("#profesor").value;
    let comision = document.querySelector("#comision").value;
    let nota1 = document.querySelector("#nota1").value;
    let nota2 = document.querySelector("#nota2").value; 
    let nota_final = (parseInt(nota1) + parseInt(nota2))/2;
    
    // SINTAXIS AVANZADA CON USO DE LIBRERIA SWEET ALERT

    nota_final < 7 ?   Swal.fire({position: 'top-end', icon: 'warning', title : "EL alumno ha desaprobado. Promedio nota final:"+nota_final, confirmButtonText: "Aceptar", }) : Swal.fire({position: 'top-end', icon: 'warning', title :"El alumno ha aprobado. Promedio nota final:"+nota_final, confirmButtonText: "Aceptar", })           
     
    
    
    //SE VERIFICA LA EXISTENCIA DE LA CLAVE (LEGAJO) QUE NO EXISTA EN EL LOCALSTORAGE EN EL EVENTO CLICK

    for(let i=0; i<localStorage.length; i++){
            
        let clave=localStorage.key(i);
        
            if (clave == legajo){

                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title : "El legajo nro: "+ clave +" ya se encuentra registrado en el LOCALSTORAGE y en el servidor de datos. Verifique",
                    confirmButtonText: "Aceptar",
                });
        
              
                existe = true;
                
            }else{

                localStorage.getItem(clave);
            };
     
        
    };



    // SALIDA DE UN PROCESAMIENTO CAMPO NOTA FINAL EN HTML
               
    document.querySelector("#nota_final").value = nota_final;
  

    

    if (existe == false){
            
        array_alumnos.push(nombre,legajo, materia,profesor, comision, nota_final);

    //JSON - CONVERTIR ARRAYALUMNOS A STRING
        console.log("Este registro sin JSON para el legajo " + legajo + " es:" + array_alumnos);
        console.log(" ")
        console.log("Este registro convertido en JSON para el legajo " + legajo + " es:" + JSON.stringify(array_alumnos));
 
    //ALMACENAR DATOS EN EL SERVIDOR METODO POST
        
        fetch('https://api.fabianjanuszewski.com/34165/item',{
        method: 'POST',
        body: JSON.stringify({
            itemId: legajo,
            student: nombre,
            alumno_coder : 'Di Pierro Sebastian',
            materia: materia,
            profesor:profesor,
            comision:comision,
            nota_final:nota_final
         
        }),    


     })
    .then ((response) => response.json())
    .then ((data) => console.log (data))
     


      //ALMACENAR DATOS DE LOCAL STORAGE POR CLAVE VALOR TIPO ARRAY

        localStorage.setItem(legajo, array_alumnos);
            
     }
   
    });

        
    //RECUPERAR DATOS DE LOCAL STORAGE POR CLAVE VALOR RECORRIENDO LOCALSTORAGE

    for(let i=0; i<localStorage.length; i++){
            
        let clave=localStorage.key(i);
        localStorage.getItem(clave);
            
     };
   

}else{
    
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'La carga de datos esta desactivada',
        showConfirmButton: false,
        timer: 1500
      })

}


//PROMESAS Y ASINCRONICO

const eventfuturo = (res) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {

            res ? resolve (Swal.fire({title: 'La página se recargará automáticamente', icon: 'info',showCancelButton: false, showConfirmButton: true })) : reject (Swal.fire({title: 'La página esta DESACTIVADA - Recargando...', icon: 'error',showCancelButton: false, showConfirmButton: true }))
                        
        }, 55000);

        setTimeout(() =>{

           location.reload();

        },60000)
        
    })
    
}

if (estado== "ACTIVADO"){

setTimeout(mostrarMensaje, 30000); 
function mostrarMensaje() {
    Swal.fire({
        title: 'Confirme que se encuentra ahí',
        text: 'Recuerde que la página de registro se encuentra habilitada durante 1 minuto por seguridad. Le restan 30 seg. para proceder con la carga de datos',
        icon: 'warning',
        showCancelButton: false,
        showConfirmButton: true
    })
}   
eventfuturo(true)

}else{
   
    eventfuturo(false)

}

