let todasLasFrutas = [
    {
        id: 1,
        nombre: 'Pera',
        precioKg: 2,
        origen: 'ESP'
    },
    {
        id: 2,
        nombre: 'Naranja',
        precioKg: 0.5,
        origen: 'ESP'
    },
    {
        id: 3,
        nombre: 'Manzana',
        precioKg: 1.8,
        origen: 'FRN'
    },
    {
        id: 4,
        nombre: 'Piña',
        precioKg: 2.1,
        origen: 'COL'
    }

]

export const getFrutas = () => {
    return (
        todasLasFrutas
    )
}