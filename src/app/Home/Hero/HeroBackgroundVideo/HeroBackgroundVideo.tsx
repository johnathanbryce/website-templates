import styles from './HeroBackgroundVideo.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'

function HeroBackgroundVideo() {
  return (
    <section className={styles.hero}>
      <video className={styles.background_clip} src="/heroBGVideo.mp4" muted autoPlay loop preload='auto'/>  
      <div className={styles.hero_text_container}>
        <h1> Your Company Name </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </section>  
  )
}

export default HeroBackgroundVideo   