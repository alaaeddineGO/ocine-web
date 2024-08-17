import { FC } from 'react'
import { Testimonial } from "../types/type";
import Image from 'next/image'
import { Atom } from 'lucide-react'
import { testimonials } from '@/constant/testimonials';

interface TestimonialCardProps extends Testimonial {
  
}

const Test: FC<TestimonialCardProps> = ({
    imageUrl,
    name,
    role,
    review,
  }) => {
  return (
    <div className="w-full  justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map((item,index)=>{
            return(
                <div key={index} className='max-w-[355px] mx-auto rounded-md cursor-pointer bg-slate-800 hover:border hover:border-sky-600 p-3 '>
                    <div className='flex items-start justify-between flex-col my-5'>
                        <Atom className="" size={50}/>
                        <p>{item.review}</p>
                    </div>
                    <div className="flex items-center ">
                    <Image
                        src={item.imageUrl}
                        width={80}
                        height={80}
                        alt="4"
                        className="rounded-full"/>
                    <div className="ml-3">
                        <h2 className="text-xl text-white">{item.name}</h2>
                        <span className="text-sky-500">{item.role}</span>
                    </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Test