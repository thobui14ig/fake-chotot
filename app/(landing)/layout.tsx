import HeaderLanding from "@/components/landing/navbar/navbar"
import Carousel from "./Home/carousel"

const HomeLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
      <main>
        <div className="flex">
            <div className="flex flex-col flex-1">
                <HeaderLanding/>
                <main className="flex flex-col items-center justify-center pt-20 ">
                  <div className="main">
                    <Carousel/>
                    {children}
                  </div> 
                   
                </main>
            
          </div>
        </div>
      </main>


    )
}
export default HomeLayout