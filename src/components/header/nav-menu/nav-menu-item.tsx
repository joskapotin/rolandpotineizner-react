import { NavLink } from "react-router-dom"

type NavMenuItemProps = {
  isOpen: boolean
  toggleIsOpen: () => void
  url: string
  title: string
  end: boolean
  children: React.ReactNode
}

function NavMenuItem({ children, isOpen, toggleIsOpen, url, title, end }: NavMenuItemProps) {
  return (
    <NavLink
      title={`Go to ${title}`}
      className={`${
        isOpen ? "opacity-100 delay-100" : "opacity-0"
      }  block transition-opacity  duration-300 ease-in-out sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
      to={url}
      onClick={toggleIsOpen}
      end={end}
    >
      <i className="mx-auto block h-20 w-20 p-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-900 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
        {children}
      </i>
      <span className="sr-only">{title}</span>
    </NavLink>
  )
}

export default NavMenuItem
