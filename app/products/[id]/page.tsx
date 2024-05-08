'use client'
async function  getDataFromAPI(id:number) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    if (!res.ok) {
        throw new Error('fetch error')
    }
    return res.json()
}

export default async function Page({params})
{
    const product = await getDataFromAPI(params.id);

    return(
        <div>
            {
                product.product_id &&
                <ul >
                    <li>productID: {product.product_id}</li>
                    <li>productName: {product.product_name}</li>
                    <li>productPrice: {product.product_price}</li>
                    <li>=========================</li>
                </ul>
            }

            {
                !product.product_id &&
                <ul >
                    <li>data not found</li>
                    <li>=========================</li>
                </ul>
            }
                
        </div>
    )
}