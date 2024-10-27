import Link from "next/link";

export default function Navbar (){
    return (
        <div className="positon-fixed items-center h-[8rem] display-center sticky flex w-full justify-around text-xl bg-[#1f242d]">
            <Link href={"#"}  className="text-4xl font-semibold cursor-default"><p>&lt;<span className="text-[#e5c07b]">Talha</span> /&gt;.</p></Link>
            <div>
                <Link href={'/'} className="ml-[3rem]">Home</Link>
                <Link href={'/'} className="ml-[3rem]">About</Link>
                <Link href={'/'} className="ml-[3rem]">Skills</Link>
                <Link href={'/'} className="ml-[3rem]">Projects</Link>
                <Link href={'/'} className="ml-[3rem]">Contact</Link>
            </div>
            
        </div>
    )
}