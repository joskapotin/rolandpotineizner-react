import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="container sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 border-b border-b-gray-900 bg-gray-50 px-2 shadow sm:relative sm:border-none sm:py-5 sm:px-0 sm:shadow-none md:py-10">
      <NavLink
        title="Retourner sur la page d'accueil"
        to={ROUTES.HOME.URL}
        className="flex-shrink-0 pt-4 font-daniel text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        Roland <span className="font-danielbd font-bold">Potin</span> Eizner
      </NavLink>
      <NavMenu />
    </header>
  )
}

export default Header
