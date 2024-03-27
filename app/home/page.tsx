import {HeaderOne} from '../components/header';
import Footer from '../components/footer';
// import CustomLink from '../components/xxxcustomlink';
import Link from 'next/link'
export default function Page()
{
    return (
        <div>
            <HeaderOne />
            <h1>Home Content</h1>
            {/* <Link href="/about" className='text-blue-500'>
            go to About
            </Link>
            <br />
            <Link href="/profile" className='text-green-500'>
            go to Profile
            </Link> */}
            <Footer/>
        </div>
    )
}