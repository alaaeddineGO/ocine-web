import Image from "next/image";
import  { ArrowBigRight, Atom } from "lucide-react";
import Headling from "@/components/Headline";
import Button from "@/components/button";
import Link from "next/link";
import { clients } from "@/constant/client";
import { features } from "@/constant/features";
import Card from "@/components/Card";
import Test from "../components/Test";

export default function Home() {
  return (
    <main className="relative max-md:px-3 ">
      <Image 
      src={'/bg.png'}
      width={1920}
      height={1080}
      alt="background"
      className="absolute -z-50 w-full min-h-screen md:max-h-[760px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10" />
      {/* Home section */}
      <section id="Home" className="mt-28">
      <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
      <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
      <div className="flex flex-col items-center mt-4 text-center">
        <Button variant="secondary">
          <h5 className="text-[12px] ">
            new features is now available
          </h5>
          <ArrowBigRight/>
        </Button>
        <Headling title="A CRM dashboard for engineering teams" />
        <p>Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.</p>
      <div className="flex gap-4">
        <Button >Get started<ArrowBigRight/></Button>
        <Link href={'/pricing'}>
          <Button children='View pricing' variant="secondary"/>
        </Link>
      </div>
      <Image 
      src={'/Hero-image (1).svg'}
      width={800}
      height={500}
      alt="ae"
      className="my-5"
      />
      </div>
      </section>
      {/* Home section */}
      {/* clients section */}
      <section id='clients' className="flex  flex-wrap text-center gap-4 justify-center">
        {clients.map((client,index)=>{
          return(
            <Image
              key={index}
              src={client.imageUrl}
              width={200}
              height={200}
              className="cursor-pointer"
              alt={client.alt}/> 
          )
        })}
      </section>
      {/* clients section */}
      {/* Features section */}
      <section>
        <div className="text-center flex flex-col items-center my-7 lg:flex-row">
          <div className="text-center flex flex-col items-center my-1 lg:items-start lg:w-[700px]">
            <Headling title="Powerful features to help you manage all your leads." isCentered={true}  />
            <p className="my-7 lg:text-start lg:my-0">Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p> 
            <Button children='Get started'/>
          </div>
          <div className="flex gap-3 mt-11 items-center ml-5 justify-center flex-wrap  lg:w-full lg:items-start lg:justify-start lg:flex-col lg:flex-nowrap">
            {features.map((feature,index)=>{
              return(
                <div key={index} className="w-[300px] gap-4 p-5 flex flex-col items-center  hover:border-[1px] rounded-md border-sky-500 hover:bg-sky-900 lg:flex-row lg:w-full lg:text-start lg:justify-start " >
                  <div className="w-24">
                    <Image
                    src={feature.imageUrl}
                    width={50}
                    height={50}
                    alt={feature.title}/>  
                  </div>
                  <div>
                    <h3 className="text-white">{feature.title}</h3>
                    <p className="">{feature.content}</p>
                  </div>
                </div>
                )
              })}
            </div>
        </div>
        {/* part 2 */}
        <div className="text-center gap-x-8 flex flex-col items-center my-7 lg:flex-row">
        <Image 
          src={'/features/messaing.svg'}
          width={600}
          height={500}
          alt="ae"
          className="my-5"
          />
          
            <div className="text-center flex flex-col items-center my-1 lg:items-start lg:w-[700px]">
              <Headling title="Integrated Messaging System" isCentered={true} />
              <p className="my-7 lg:text-start lg:my-0">The integrated messaging system within the CRM dashboard for engineering teams allows for instant and seamless communication among team members. It eliminates the need for external messaging platforms, keeping all project-related conversations organized and easily accessible within the dashboard's interface.</p> 
              
            </div>
        </div>  
        {/* part 2 */}
        {/* part 3 */}
        <div className="text-center gap-x-8 flex flex-col items-center my-7 lg:flex-row">
        <div className="text-center flex flex-col items-center my-1 lg:items-start lg:w-[700px]">
              <Headling title="Resource Allocation and Task Management" isCentered={true} />
              <p className="my-7 lg:text-start lg:my-0">The task management system within the CRM dashboard for engineering teams enables efficient tracking and assignment of tasks. It provides a centralized platform to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team members.</p> 
              
            </div>
        <Image 
          src={'/features/task-management.svg'}
          width={600}
          height={500}
          alt="ae"
          className="my-5"
          />
        </div>
        {/* part 3 */}
      </section>
      {/* Features section */}

      {/* Pricing section */}
        <Card/>  
      {/* Pricing section */}
      <section>
          <Headling title="Find a plan to power your projects" isCentered={true}/>
      
          <Test />  
       
      </section>
      {/* Testimonials section */}
    </main>
  );
}
