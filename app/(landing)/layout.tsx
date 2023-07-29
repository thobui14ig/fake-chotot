import HeaderLanding from "@/components/landing/header"

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
                <main className="flex flex-col items-center justify-between px-96 pt-20">
                    {children}
                </main>
            
          </div>
        </div>
      </main>


    )
}
export default HomeLayout