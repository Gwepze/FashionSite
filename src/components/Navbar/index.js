import React, {useState} from 'react'
import { Nav, NavbarContainer, NavIcon, NavMenu, NavItem, NavLink, SearchContainer, SearchBar, SearchSignContainer, SignIn, SignUp, MobileMenu, SignInContainer } from './NavbarElements'
import { GiHoodedFigure, GiMagnifyingGlass } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <Nav>
            <NavbarContainer>
                <NavIcon to="/"><GiHoodedFigure/>Stand Out</NavIcon>
                <MobileMenu onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileMenu>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contactus">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/faq">FAQ</NavLink>
                    </NavItem>
                </NavMenu>
                <SearchSignContainer>
                    <SearchContainer>
                        <GiMagnifyingGlass />
                        <SearchBar placeholder="Search..."/>
                    </SearchContainer>
                    <SignInContainer>
                        <SignIn to="/signin">Sign In</SignIn>
                        <SignUp to="/signup">Sign Up</SignUp>
                    </SignInContainer>
                </SearchSignContainer>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
