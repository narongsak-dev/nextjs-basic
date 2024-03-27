import Link from 'next/link'

  
export default function CustomLink({ctref, name}: Prop)
{
    return (
        <Link href={ctref} className='text-blue-500'>
                {name}
            </Link>
    )
}

type Prop = {
    ctref: string
    name: string
}