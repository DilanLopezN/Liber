'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import '../styles.css'
import Banner from '../../../public/banner1.png'
import Banner2 from '../../../public/banner2.png'
import Banner3 from '../../../public/banner3.png'

// import required modules
import { Pagination } from 'swiper/modules'

export default function Carrousel() {
  return (
    <div className="w-full h-full z-10">
      <Swiper
        autoplay={true}
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src={Banner} alt="Banner de parafusos" />
            <div className="absolute inset-0 flex flex-col items-center md:items-start md:pl-10 justify-center md:-translate-y-10">
              <h1 className="text-white text-center md:text-left bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Soluções</span> em Parafusos{' '}
                <br />
                Especiais para o Mercado Automotivo
              </h1>
              <p className="text-white text-sm p-2 md:text-left md:text-2xl md:w-[680px]">
                Na LIBER INDUSTRIAL LTDA, combinamos tradição e inovação para
                oferecer fixadores de alta qualidade que atendem às necessidades
                específicas de nossos clientes.
              </p>

              <Link href="/products">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-3xl mt-4 w-36 h-12 items-center shadow shadow-black md:w-48 md:h-14">
                  Ver produtos
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src={Banner2}
              alt="Banner de parafusos"
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center md:items-start md:pl-10 justify-center md:-translate-y-10">
              <h1 className="text-white text-center md:text-left bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Qualidade</span> e Inovação{' '}
                <br />
              </h1>
              <p className="text-white text-sm p-2 md:text-left md:text-2xl md:w-[680px]">
                Nossos produtos são projetados para atender às demandas mais
                exigentes, com um compromisso inabalável com a qualidade e a
                inovação tecnológica.
              </p>

              <Link href="/about">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-3xl mt-4 w-36 h-12 items-center shadow shadow-black md:w-48 md:h-14">
                  Descubra mais
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src={Banner3} alt="Banner de parafusos" />
            <div className="absolute inset-0 flex flex-col items-center md:items-start md:pl-10 justify-center md:-translate-y-10">
              <h1 className="text-white text-center md:text-left bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Atendemos</span> Todos segmentos{' '}
                <br />
              </h1>
              <p className="text-white shadow-sm text-sm md:text-left md:text-2xl md:w-[680px] bg-black bg-opacity-50 p-4">
                De automotivo a industrial, nossa expertise nos permite fornecer
                soluções de fixação para uma ampla variedade de setores.
              </p>

              <Link href="/control">
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-3xl mt-4 w-56 h-12 items-center shadow shadow-black max-md:w-52 md:h-14">
                  Veja nossas soluções
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
