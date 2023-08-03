'use client'
import HeaderLanding from "@/components/landing/navbar/navbar"
import Carousel from "../../components/landing/carousel"
import Category from "@/components/landing/category"
import './layout.scss'
import { useEffect, useState } from "react"
import { Spin } from 'antd';

const HomeLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [isSpin, setIsSpin] = useState<boolean>(true)

    useEffect(() => {
      setTimeout(() => {
        setIsSpin(false)
      }, 2000);
    }, [])

    return(
      <main>
        <div className="flex flex-col flex-1">
        {isSpin ? <Spin/> : 
          <>
            <HeaderLanding/>
            <main className="pt-20 ">
              <div className="main">
                <Carousel/>
                <Category/>
                {children}
              </div> 
                
            </main>          
          </>
        }

        </div>
      </main>    
    )
}
export default HomeLayout