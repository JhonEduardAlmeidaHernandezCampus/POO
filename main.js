let rango = document.querySelector(`[name="dimension"]`);
let formulario = document.querySelector(`[name="formulario"]`);
let color = document.querySelector(`[name="color"]`);

class lapiz {
    #marca
    constructor({color= "#fff700", 
                dimension= 50,
                borrador= true,
                material="Madera", 
                marca= "Norma"
                }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getColor() {
        return color.value;
    }
    getDimen(){
        return rango.value;
    }
    getMarca(){
        const o1 = formulario.marca[0];
        const o2 = formulario.marca[1];
        const o3 = formulario.marca[2];
        const o4 = formulario.marca[3];

        if (o1.checked) {
            return o1.value;
        } else if (o2.checked) {
            return o2.value;
        } else if (o3.checked) {
            return o3.value;
        }
        else  {
            return o4.value;
        }
    }
    getBorrador(){
        const o1 = formulario.borrador[0];
        const o2 = formulario.borrador[1];

        if (o1.checked) {
            return o1.value;
        }
        else {
            return o2.value;
        }
    }
    getMaterial(){
        const o1 = formulario.material[0];
        const o2 = formulario.material[1];

        if (o1.checked) {
            return o1.value;
        }
        else {
            return o2.value;
        }
    }
}

let defaultPencil = undefined;
let diferent = 0;

addEventListener("DOMContentLoaded", (e)=> {
    defaultPencil = new lapiz({});
    color.value = defaultPencil.color;
})

// Evento de escucha para guardar los datos que se ingresen en el formulario
formulario.addEventListener("submit", (e)=> {
    diferent += 1;
    // Esto sirve para que el formulario no se recargue 
    e.preventDefault();
    // Creamos una lista vacia, si no va a marcar error 
    let pencil = new lapiz({});

    // Aqui se va a mostrar los datos que se guardan en el formulario
    document.querySelector('#mostrarTabla').insertAdjacentHTML("beforeend", `
                                                                            <tr>
                                                                            <th id="MyColor${diferent}"></th>
                                                                                <th>${pencil.getDimen()}</th>
                                                                                <th>${pencil.getMarca()}</th>
                                                                                <th>${pencil.getBorrador()}</th>
                                                                                <th>${pencil.getMaterial()}</th>
                                                                            </tr>
                                                                            `);

    let colorDiv = document.querySelector(`#MyColor${diferent}`);

    let myColor = {backgroundColor: color.value,
                   with: "100px",
                   heigth:"100px"

    }

    Object.assign(colorDiv.style, myColor)

});