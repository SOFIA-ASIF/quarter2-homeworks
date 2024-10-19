import Footer from './components/Footer'
import Link from 'next/link'
export default function Home(){
  return(
    <div className='bg-white h-screen'>
      <div className='h-20 text-white display flex justify-around bg-gray-600 mb-1'>
        <div className='h-18 w-24 bg-green-900 text-center'>Box 1</div>
        <div className='h-18 w-24 bg-red-900 text-center'>Box2</div>
        <div className='h-18 w-24 bg-rose-900 text-center'>Box3</div>
      </div>
      <div className='h-20 text-white display flex justify-around bg-yellow-200'>
        <div className='h-18 w-24 bg-purple-900 text-center'>Box1</div>
        <div className='h-18 w-24 bg-blue-900 text-center'>Box2</div>
      </div>
      <ol className='text-purple-800'>
        <li><Link href={'./About'}>About</Link></li>
        <li><Link href={'./Customers'}>Customers</Link></li>
        <li><Link href={'./Contact'}>Contact Me</Link></li>
        <li><Link href={'./Help'}>Help</Link></li>
      </ol>
      <Footer />
    </div>
  )
}