import Link from 'next/link';

const NavigationHeader = () => {
    return (
        <div className="flex space-x-10">
            <div><Link href="/" >Home</Link></div>
            <div><Link href="/about" >About</Link></div>
        </div>
    );
}


export default NavigationHeader;