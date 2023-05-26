'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './HeaderStandard.module.css'
import Image from 'next/image'
import Link from 'next/link'
// internal assets
import logoPlaceholder from '../../../../public/images/logoPlaceholder.jpg'
// internal components
import HamburgerDropdown from '../HeaderDropdowns/HamburgerDropdown/HamburgerDropdown'
import NavBarDropdownFullScreen from '../NavBarDropdownFullScreen/NavBarDropdownFullScreen'


/*
NOTES:
- SINGLE PAGE SCROLL NAVIGATION: use 'react-scroll' package
    - import { Link } from 'react-scroll'
    -  <li><Link to="about" spy={true} smooth={true} duration={500} offset={10} > ABOUT </Link></li>

*/

function HeaderStandard() {
    const dropdownRef = useRef<HTMLDivElement>(null);
    // dropdown navbar menu on smaller screens:
    const [isDropdownActive, setIsDropdownActive] = useState(false);
  
    // toggle dropdown navbar menu on smaller screens:
    const toggleDropdown = () => {
        setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
    }
  
    // closes dropdown menu on nav item click
    const onNavItemClickCloseDropdown = () =>{
        setIsDropdownActive(false)
    }
  
    // closes dropdown menu when clicking outside the dropdown menu
    useEffect(() => {
        const closeDropdownHandler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownActive(false)
            }
        }
        document.addEventListener('mousedown', closeDropdownHandler)
  
      return () => {
        document.removeEventListener('mousedown', closeDropdownHandler)
      }
    }, [])
    
  return (
    <header className={styles.header} ref={dropdownRef}>
        <Image  className={styles.logo} src={logoPlaceholder}  alt='logo'/>

        {/*  dropdown icon displays >950 px screen size*/}
        <HamburgerDropdown isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown}/>
        

        <nav className={styles.navbar}>
            <ul>
                <li><Link href=""> HOME </Link></li> 
                <li><Link href=""> FEATURES </Link></li>
                <li><Link href=""> PRICING </Link></li>  
                <li><Link href=""> PRODUCTS </Link></li>     
                <li><Link href=""> CONTACT </Link></li>
            </ul>
        </nav>
        
        {/* dropdown nav displays on >950 px screen size */}
        { isDropdownActive &&
            <NavBarDropdownFullScreen>
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> HOME </Link></li> 
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> FEATURES </Link></li>
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> PRICING </Link></li>  
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> PRODUCTS </Link></li>     
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> CONTACT </Link></li>
            </NavBarDropdownFullScreen>
        }



    </header>
  )
}

export default HeaderStandard