import HeaderLanding from "@/components/landing/header"
import SidebarLangding from "@/components/landing/sidebar"

const HomeLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
        <main>
        <div className="flex">
            <SidebarLangding/>
            <div className="flex flex-col flex-1">
                <HeaderLanding/>
                <main className="md:pl-72 pb-10">
                    {children}
                </main>
            
          </div>
        </div>
      </main>


    )
}
export default HomeLayout