import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"

function Layout() {
  return (
    <div className="flex min-h-full flex-grow flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
