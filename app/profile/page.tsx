
import { HeaderOne } from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
export default function Profile()
{
    return (
        <div>
            <HeaderOne />
            <h1>Profile Content</h1>
            {/* <Link href='/home' className="text-yellow-500">
                go to Home
            </Link>
            <br />
            <Link href='/about' className="text-blue-500">
                go to about
            </Link> */}
            <Footer />
        </div>
    )
}