import styles from './FooterLinksSection.module.css'

interface FooterSectionProps {
    title: string,
    link1: string,
    link2?: string,
    link3?: string,
    link4?: string,
    link1Src?: string,
    link2Src?: string,
    link3Src?: string,
    link4Src?: string,
}

function FooterLinksSection({title, link1, link2, link3, link4, link1Src, link2Src, link3Src, link4Src}: FooterSectionProps) {
  return (
    <aside className={styles.footer_section}>
        <h4 className={styles.section_title}>{title}</h4>
        <a className={styles.link} href={link1Src}> {link1} </a>
        <a className={styles.link} href={link2Src}> {link2} </a>
        <a className={styles.link} href={link3Src}> {link3} </a>
        <a className={styles.link} href={link4Src}> {link4} </a>
    </aside>
  )
}

export default FooterLinksSection