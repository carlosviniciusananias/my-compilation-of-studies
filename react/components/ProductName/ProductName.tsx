import React from 'react'

interface IProductName {
    name: string | null
}

const ProductName = ({ name }: IProductName) => {
    return <>{name}</>
}

export default ProductName