import Link from 'next/image'

export default function ImageURL({imageURL}: Prop)
{
    return (
       <img src={imageURL} width='200px' alt="" />
    )
}


type Prop = {
    imageURL: string
}