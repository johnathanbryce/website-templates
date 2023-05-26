import Image from 'next/image'
import styles from '../styles/page.module.css'
// internal components
import HeaderStandard from '@/components/Headers/HeaderStandard/HeaderStandard'
import FooterStandard from '@/components/Footers/FooterStandard/FooterStandard'
// internal pages
import HeroStandardFullVH from './Home/Hero/HeroStandardFullVH/HeroStandardFullVH'


export default function Home() {
  return ( 
        <main>
          <HeaderStandard />
          <HeroStandardFullVH />
          <FooterStandard />
        </main>
  )
}
