'use client'

import Image from 'next/image'

import React, { useRef, useState } from 'react'
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-center bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Soluções</span> em Parafusos{' '}
                <br />
                Especiais para o Mercado Automotivo
              </h1>
              <p className="text-white text-sm p-2 md:text-2xl md:w-[680px]">
                Na LIBER INDUSTRIAL LTDA, combinamos tradição e inovação para
                oferecer fixadores de alta qualidade que atendem às necessidades
                específicas de nossos clientes.
              </p>

              <button className="bg-red-600 text-white p-2 rounded-3xl mt-4 w-36 h-12 items-center shadow shadow-black md:w-48 md:h-14">
                Ver produtos
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="relative w-full h-full">
            <Image
              src={Banner2}
              alt="Banner de parafusos"
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-center bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Qualidade</span> e Inovação{' '}
                <br />
              </h1>
              <p className="text-white text-sm p-2 md:text-2xl md:w-[680px]">
                Nossos produtos são projetados para atender às demandas mais
                exigentes, com um compromisso inabalável com a qualidade e a
                inovação tecnológica.
              </p>

              <button className="bg-red-600 text-white p-2 rounded-3xl mt-4 w-36 h-12 items-center shadow shadow-black md:w-48 md:h-14">
                Descubra mais
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="relative w-full h-full">
            <Image src={Banner3} alt="Banner de parafusos" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-center bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                <span className="text-red-600">Atendemos</span> Todos segmentos{' '}
                <br />
              </h1>
              <p className="text-white shadow-sm text-sm  md:text-2xl md:w-[680px] bg-black bg-opacity-50 p-4">
                De automotivo a industrial, nossa expertise nos permite fornecer
                soluções de fixação para uma ampla variedade de setores.
              </p>

              <button className="bg-red-600 text-white p-2 rounded-3xl mt-4 w-36 h-12 items-center shadow shadow-black md:w-48 md:h-14">
                Veja nossas soluções
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
