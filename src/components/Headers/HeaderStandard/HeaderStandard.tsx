'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './HeaderStandard.module.css'
import Image from 'next/image'
import Link from 'next/link'

/*
HEADER NOTES:

SINGLE PAGE SCROLL NAVIGATION: use 'react-scroll' package
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
    <header className={styles.header}>
        <h2> LOGO </h2>
        
        {/*  hamburger dropdown >800 px screen size*/}
        <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
        </div>

        <nav className={styles.navbar}>
            <ul>
                <li><Link href=""> NAV1 </Link></li> 
                <li><Link href=""> NAV2 </Link></li>
                <li><Link href=""> NAV3 </Link></li>  
                <li><Link href=""> NAV4 </Link></li>     
                <li><Link href=""> NAV5 </Link></li>
            </ul>
        </nav>
        
        {/* navbar dropdown top >800 px screen size */}
        { isDropdownActive &&
            <nav className={styles.navbar_dropdown}>
                <ul>
                    <li><Link href=""> NAV1 </Link></li> 
                    <li><Link href=""> NAV2 </Link></li>
                    <li><Link href=""> NAV3 </Link></li>  
                    <li><Link href=""> NAV4 </Link></li>     
                    <li><Link href=""> NAV5 </Link></li>
                </ul>
            </nav>
        }



    </header>
  )
}

export default HeaderStandard