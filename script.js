/*2. 1 Crear un método que reciba un array de nacionalidades y cuente las diferentes nacionalidades que existen. (México/Argentina/Venezuela/Perú)
contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]); 
// Mexicanos: 2
// Venezolanos: 2
// Argentinos: 3
// Peruanos: 2
*/
//Se declaran 4 variables para cada nacionalidad, se va iterando el arreglo con un for of y se actualizan los valores de las variables dependiendo la nacionalidad


contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]); 

function contar(arreglo){

    let mexicano = 0;
    let argentino = 0;
    let venezolano = 0;
    let peruano = 0;

    for(nacionalidad of arreglo){
        switch (nacionalidad){
            case "mexicano":
                mexicano++;
                break;
            case "argentino":
                argentino++;
                break;
            case "venezolano":
                venezolano++;
                break;
            case "peruano":
                peruano++;
                break;
            default:
                break;

        }
    }

    console.log(`Mexicanos: ${mexicano}`);
    console.log(`Venezolanos: ${venezolano}`);
    console.log(`Argentinos: ${argentino}`);
    console.log(`Peruanos: ${peruano}`);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. 2 Crear un método que reciba un array de nacionalidades y cuente las diferentes nacionalidades que existen. (México/Argentina/Venezuela/Perú)
contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]); 
// Mexicanos: 2
// Venezolanos: 2
// Argentinos: 3
// Peruanos: 2
*/

//Se agrego flexibilidad para uso de cualquier nacionalidad, se recibe el arreglo y se verifica si la nacionalidad se encuentra en el objeto.
//Si no se encuentra, se agrega. Si se encuentra, se actualiza el valor.

// contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]); 

// function contar(nacionalidades){

//     let total_nacionalidades ={};

//     for(let nacionalidad of nacionalidades){

//         if(nacionalidad in total_nacionalidades){
//             // console.log(`Actualizar ${nacionalidad}`);
//             total_nacionalidades[nacionalidad]++;
//         }
//         else{
//             // console.log(`Agregar ${nacionalidad}`);
//             total_nacionalidades[nacionalidad] = 1;
//         }
//     }


//     console.log(total_nacionalidades);

    
// }
