// crear una funcion que realice una suma 
const arreglo = [2, 4, 6, 8];
const sumatoria = () => {
    const dupli = arreglo.reduce( (acc, el) => acc+el, 0)/arreglo.length;
    return console.log(dupli);
}

sumatoria();