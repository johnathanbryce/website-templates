import styles from './FooterStandard.module.css'
// internal components
import FooterLinksSection from '../FooterLinksSection/FooterLinksSection'

function FooterStandard() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_grid}>
        <FooterLinksSection 
          title={'Get Connected'}
          link1={'Pricing'}
          link2={'Compatability'}
          link3={'Coverage'}
          link4={'Why Choose Us?'}
        />
        <FooterLinksSection 
          title={'Support'}
          link1={'Contact'}
          link2={'Help Center'}
          link3={'Community'}
        />
        <FooterLinksSection 
          title={'Company'}
          link1={'About'}
          link2={'Blog'}
          link3={'Careers'}
          link4={'Partnerships'}
        />
        <FooterLinksSection 
          title={'Social'}
          link1={'Twitter'}
          link2={'Instagram'}
          link3={'LinkedIn'}
        />
      </div>

    </footer>
  )
}

export default FooterStandard   