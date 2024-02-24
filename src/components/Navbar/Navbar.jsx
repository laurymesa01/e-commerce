/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context/Context"

const Navbar = () => {

    const { counter } = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="w-full flex justify-between items-center fixed z-10 py-5 px-8 top-0 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/clothes'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/electronics'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/furnitures'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/toys'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/others'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    laura@platzi.com
                </li>
                <li>
                    <NavLink 
                        to = '/my-orders'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/my-account'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/sign-in'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/cart'
                        className = {
                            ({isActive}) => 
                                isActive ? activeStyle : undefined
                            
                        }>
                        🛒{ counter }
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export  { Navbar };
