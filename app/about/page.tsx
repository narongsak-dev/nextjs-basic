
import {HeaderOne, HeaderTwo} from '../components/header';
import Footer from '../components/footer';
import Link from "next/link";

export default function Page()
{
    return (
        <div className='text-center'>
            <HeaderOne />
            {/* <h1>About Content</h1> */}
            <h2 className='text-green-500'>Narongsak Kadman</h2>
            {/* <Link href='/home' className="text-yellow-500">
                go to Home
            </Link>
            <br />
            <Link href='/profile' className="text-green-500">
                go to profile
            </Link> */}
            <Footer />
        </div>
    )
}