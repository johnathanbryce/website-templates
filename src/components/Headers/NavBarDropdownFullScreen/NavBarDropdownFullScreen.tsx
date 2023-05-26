import styles from './NavBarDropdownFullScreen.module.css'

interface NavBarDropdownFullScreenProps {
    children: any;
}

/* pass Links as children  */

function NavBarDropdownFullScreen({children}: NavBarDropdownFullScreenProps) {
  return (
    <nav className={styles.navbar_dropdown}>
        <ul>
            {children}
        </ul>
    </nav>
  )
}

export default NavBarDropdownFullScreen