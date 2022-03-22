const funcionString = () =>
{
    return "Creada por la rama: Nahuel"
}

const funcionNumber = (max, min) =>
{
    // Retorna un numero entre 2 rangos (incluidos los limites)
    return Math.floor((Math.random() * ((max + 1)-min)) + min)
}