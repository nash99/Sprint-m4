export class Producto{
    constructor(){
    }

    async listaProductos(){
        const response = await fetch('https://bsite.net/metalflap/td-producto')
        const data = response.json()
        console.log(data)
        return data;
    }

    async crearProducto(producto){
        const response = await fetch('https://bsite.net/metalflap/td-producto', 
        {method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({producto})})

    }

    async obtenerProductos(){
        const endPoint = 'https://bsite.net/metalflap/td-producto' 
        const productosSucursal=[]
        const res = await fetch(endPoint)
        const data = await res.json() 
        console.log(data)    

        data.forEach(element => {
            console.log(element.idSucursal)

            if(element.idSucursal === 2){
                console.log("pasa")
                productosSucursal.push(element)
            }else{
                console.log("no pasa")
            }

            
        });

        console.log(productosSucursal)


    }
    
}