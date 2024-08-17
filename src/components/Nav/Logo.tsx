import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'} className='flex items-center'>
        <Image
         src='/logo.png'
         width={25}
         height={25}
         alt='logo'/>
         <h1 className='text-2xl text-white translate-x-1 capitalize'>occen</h1>
         <div className='w-3 h-3 rounded-full translate-x-2 translate-y-1 bg-sky-400' />
    </Link>
  )
}

export default Logo