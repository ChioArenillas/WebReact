import React, {useEffect, useState} from "react";

export default function Cart() {

    //Array de strings
    const [productsAdded, setProductsAdded] = useState([])
    const [product, setProduct] = useState('')
    const [discount, setDiscount] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const productHandler = (e) => {
        setProduct(e.target.value)
    }

    const addProductToCart = () =>{
        if(product != undefined && product != ''){ //que no esté en blanco o que sea undefined
            if(productsAdded.includes(product)){
                setError(true)
                setErrorMessage('El producto ya está en el carrito')
            }else{
                let productsAddedAux = [...productsAdded]
                productsAddedAux.push(product)
                setProductsAdded(productsAddedAux)
                console.log(productsAdded)
            }
        }else{
            setError(true)
            setErrorMessage('El producto no puede estar en blanco')
        }
    }

    useEffect(() => {
        if(productsAdded.length > 10){
            setDiscount(true)
        }
    }, [productsAdded])

    return (
        <div>
            <div>
                <h1>Cart Component</h1>
            </div>
            <hr />
            <div>
                <span>Producto:</span>
                <input value={product} onChange={productHandler} />
            </div>
            <div>
                <button onClick={addProductToCart}>Add product</button>
            </div>
            <hr />
            <div>
                <ul>
                    {productsAdded.map((product, index) => {
                        return <li key={index}>{product}</li>
                    })}
                </ul>
            </div>
            <hr />
            <div hidden={!discount}>
                <p>¡Tienes un descuento!</p>
            </div>
            <hr />
            {
                error ? (
                <div>
                    <span className="error">{errorMessage}</span>
                </div>
                ) : null
            }
            <div hidden={!discount}>
                <p>¡Tienes un descuento!</p>
            </div>
        </div>
    )
}