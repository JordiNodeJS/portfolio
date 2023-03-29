import Container from '../layouts/Container'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow
} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import db from '../../public/db/db.json'
import Article from '../components/Article'
const { projects } = db

export default function Projects() {
  return (
    <Container>
      <h1 className="mb-5 text-4xl font-bold">Projects</h1>
      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true
        }}
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow]}
      >
        <section className="text-left">
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} tabIndex={index}>
              <Article project={project} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </Container>
  )
}
