'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
async function getDataFromAPI() {
    const res = await fetch('/api/products')
    if (!res.ok) {
        throw new Error('fetch error')
    }
    return res.json()
}

interface ProductItem {
    product_id: number;
    product_name: string;
    product_price: number;
  }

export default function Page() {
    const [productState, setProductState] = useState<ProductItem[]>([])
    const router = useRouter()
    const initProduct = async () => {
        try {
            const data = await getDataFromAPI();
            setProductState(data)
        } catch (error) {
            console.log('err: ',error);
        }
    }
    useEffect(()=>{
        initProduct()
    }, [])

    const handleDelete = async (id: number) => {
        try {
          await fetch(`/api/products/${id}`, {
            method: "DELETE",
          });
          initProduct()
        } catch (error) {
          console.log("error ===> ", error);
        }
      };
    
    return (
        <div>
            {
                productState.map((product,index)=>(
                    <ul key={index}>
                        <li>productID: {product.product_id}</li>
                        <li>productName: {product.product_name}</li>
                        <li>productPrice: {product.product_price}</li>
                        <li>
                            <button className="rounded-md bg-gray-600 text-white px-2 my-1"
                            onClick={() => router.push(`/products/${product.product_id}`)}
                            >show info</button>
                        </li>
                        <li>
                            <button className="rounded-md bg-red-600 text-white px-2 my-1" 
                            onClick={() => handleDelete(product.product_id)}
                            >delete</button>
                        </li>
                        <li>=========================</li>
                    </ul>
                ))
            }
            
        </div>
    )
}