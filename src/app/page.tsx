// internal components
import HeaderStandard from '@/components/Headers/HeaderStandard/HeaderStandard'
import FooterStandard from '@/components/Footers/FooterStandard/FooterStandard'
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
// internal pages
// hero
import HeroStandardFullVH from './Home/Hero/HeroStandardFullVH/HeroStandardFullVH'
import HeroBackgroundSlideshow from './Home/Hero/HeroBackgroundSlideshow/HeroBackgroundSlideshow'
import HeroBackgroundVideo from './Home/Hero/HeroBackgroundVideo/HeroBackgroundVideo'
//


export default function Home() {
  return ( 
        <main>
          {/* HEADER */}
          <HeaderStandard />

          {/* HERO */}
          <HeroStandardFullVH />
          {/* <HeroBackgroundSlideshow /> */}
          {/* <HeroBackgroundVideo /> */}

          {/* REST OF PAGE CONTENT */}
          <LayoutContainer>

          
          </LayoutContainer>

          {/* FOOTER */}
          <FooterStandard />
        </main>
  )
}
