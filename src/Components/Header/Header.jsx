import { NavLink } from "react-router-dom";

function Header() {

    const Links = () => {
        return <>
            <li><NavLink className='bg-[#F3F3F3]' to='/'>Home</NavLink></li>
            <li><NavLink className='bg-[#F3F3F3]' to='/listed-books'>Listed Books</NavLink></li>
            <li><NavLink className='bg-[#F3F3F3]' to='/pages-to-read'>Pages to Read</NavLink></li>
            <li><NavLink className='bg-[#F3F3F3]' to='/About'>About</NavLink></li>
            <li><NavLink className='bg-[#F3F3F3]' to='/contact-us'>Contact Us</NavLink></li>
        </>
    }
    return <header className="mx-5 lg:mx-32">
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Links></Links>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost h-fit"><img className="w-20" src="/Wizarding_World.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1">
                    <Links></Links>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Sign In</a>
            </div>
        </nav>
    </header>
}

export default Header;