import Header from '../components/header';
import {FooterOne} from '../components/xxxfooter';
import ImageURL from '../components/xxximageURL';
import Link from 'next/link'

export default function Page()
{
    return (
        <div>
            <Header />
            <h1>Abort Content</h1>
            <Link href="/home">
                go to Home
            </Link>
            <ImageURL imageURL='https://ta-panda.com/wp-content/uploads/2021/07/ภาพดอกไม้ภาพหน้าปก.jpg' 
            />
            <br />
            <img src="https://ta-panda.com/wp-content/uploads/2021/07/ภาพดอกไม้ภาพหน้าปก.jpg"  width='200px'  alt="" />
            <FooterOne />
        </div>
    )
}