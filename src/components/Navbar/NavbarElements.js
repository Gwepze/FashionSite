import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background-color: black;
    height: 10vh;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
`
export const NavbarContainer = styled.div`
    display: flex;
    margin: auto;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    color: white;
`
export const NavIcon = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2rem;
`

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 1060px){
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1060px){
        display: none;
    }
`
export const NavItem = styled.li`
    padding: 0 1.7rem;
    height: 10vh;
    display: flex;
    align-items: center;
`
export const NavLink = styled(Link)`
    
`
export const SearchSignContainer = styled.div`
    @media screen and (max-width: 1060px){
        display: none;
    }
`
export const SearchContainer = styled.div``
export const SearchBar = styled.input``
export const SignInContainer = styled.div``
export const SignIn = styled(Link)``
export const SignUp = styled(Link)``