
import { FC } from 'react'
import {pricingItems} from '../constant/pricing'
import { Pricing, PricingMode } from "../types/type";
import Button from './button';
import { Check } from 'lucide-react';
import Headling from './Headline';

interface CardProps extends Pricing {
    mode: PricingMode;
}

const Card: FC<CardProps> = ({
    title,
    description,
    monthlyPrice,
    annuallyPrice,
    features,
    isMostPopular=false,
    glowPosition,
    mode,
  }) => {
    
  return (
    <section>
        <Headling title="Find a plan to power your projects" isCentered={true}/>
        <div className="w-full justify-center flex items-center gap-3">
            <Button children="Montaly" ></Button>
            <Button children="annuly" variant={'secondary'} ></Button>
        </div>
        <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pricingItems.map((item,index)=>{
                return(
                    <div key={index} className={`max-w-[355px] mx-auto rounded-md cursor-pointer bg-slate-800 hover:border hover:border-sky-600 p-3 
                        ${item.isMostPopular?'bg-slate-600 border border-sky-500 hover:bg-slate-700':''}`}>
                            <div className='flex items-center justify-between my-5'>
                                <h1 className='text-white text-2xl'>{item.title}</h1>
                                {item.isMostPopular?(<Button variant='primary'><span className='text-sm'>Most poplair</span></Button>):''}
                            </div>
                            <p className='text- xl'>{item.description}</p>
                            <div>
                                <div className='flex items-end mt-4'><h3 className='text-5xl text-white'>{item.monthlyPrice}</h3>/month</div>                           
                                {item.isMostPopular?(<Button children='buy now' isFullSize variant='primary'/>):(<Button children='buy now' isFullSize variant='secondary'/>)}
                                <ul className="space-y-4">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-4 text-base">
                                            <Check />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        )
                    })}
        </div>
    </section>
    
  )
}

export default Card