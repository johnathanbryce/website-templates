import styles from './HeroBackgroundSlideshow.module.css'
// internal components
import SlideShowAuto from '@/components/SlideshowAuto/SlideShowAuto'


function HeroBackgroundSlideshow() {
  return (
    <section className={styles.hero}>
        <SlideShowAuto />
    </section>
  )
}

export default HeroBackgroundSlideshow