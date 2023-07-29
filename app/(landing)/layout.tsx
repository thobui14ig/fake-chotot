import HeaderLanding from "@/components/landing/navbar"

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
                <main className="flex items-center justify-center pt-20">
                  <div style={{ width: '960px' }}>
                    {children}
                  </div>
                   
                </main>
            
          </div>
        </div>
      </main>


    )
}
export default HomeLayout