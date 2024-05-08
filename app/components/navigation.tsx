'use client'
import Link from 'next/link'
import {usePathname} from "next/navigation";
// type Prop = {
//     lhref: string
// }
export default function Navigation()
{
    const pathname = usePathname();
    // const isActive = ({lhref}: Prop) => pathname === lhref;
    // console.log(pathname);
    
    return (
        <div className="text-center">
            <Link href="/home" className={pathname==='/home'? "active": ""}>Home</Link>
            |
            <Link href="/about" className={pathname==='/about'? "active": ""}>About</Link>
            |
            <Link href="/profile" className={pathname==='/profile'? "active": ""}>Profile</Link>
            |
            <Link href="/products" className={pathname==='/products'? "active": ""}>Product</Link>
            {/* <Link href="/home" className={isActive('/home')? "active": ""}>Home</Link>
            |
            <Link href="/about" className={pathname==='/about'? "active": ""}>About</Link>
            |
            <Link href="/profile" className={pathname==='/profile'? "active": ""}>Profile</Link> */}
        </div>
    )
}