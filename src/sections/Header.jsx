import { Link as LinkScroll } from 'react-scroll'

const NavLink = ({ title }) => (
    <LinkScroll
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
        {title}
    </LinkScroll>
)

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10">
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2" href="">
                    <img src="/images/xora.svg" alt="logo" width={151} height={55}/>
                </a>
            </div>

            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                <nav>
                    <ul className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                        <li className="nav-li">
                            <NavLink title="features"/>
                            <div className="dot"/>
                            <NavLink title="pricing"/>
                        </li>
                        <li className="nav-logo">
                            <LinkScroll>
                            <img src="/images/xora.svg" alt="logo" width={160} height={55}/>
                            </LinkScroll>
                        </li>

                        <li className="nav-li">
                            <NavLink title="faq"/>
                            <div className="dot"/>
                            <NavLink title="download"/>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header
