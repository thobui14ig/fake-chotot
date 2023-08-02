import HeaderLanding from "@/components/landing/navbar/navbar"
import Carousel from "../../components/landing/carousel"
import Category from "@/components/landing/category"
import './layout.scss'

const HomeLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
      <main>
        <div className="flex flex-col flex-1">
            <HeaderLanding/>
            <main className="pt-20 ">
              <div className="main">
                <Carousel/>
                <Category/>
                {children}
              </div> 
                
            </main>
        </div>
      </main>


    )
}
export default HomeLayout