import styles from './HamburgerDropdown.module.css'

interface HamburgerDropdownProps {
    isDropdownActive: boolean,
    toggleDropdown: () => void
}

function HamburgerDropdown({isDropdownActive, toggleDropdown}: HamburgerDropdownProps) {
  return (
    <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
        <div className={styles.bar} ></div>
        <div className={styles.bar} ></div>
        <div className={styles.bar} ></div>
    </div>
  )
}

export default HamburgerDropdown