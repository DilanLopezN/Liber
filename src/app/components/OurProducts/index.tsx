'use client'
import Image from 'next/image'
import Parafuso from '../../../../public/parafuso.svg'
import Especiais from '../../../../public/especiais.svg'
import Fixadores from '../../../../public/fixadores.svg'
import Pinos from '../../../../public/pinos.svg'
import Eye from '../../../../public/eye.svg'
import EngOne from '../../../../public/engrenagem.svg'
import EngTwe from '../../../../public/engrenagem2.svg'
import Price from '../../../../public/price.svg'
import Light from '../../../../public/light.svg'
import Word from '../../../../public/word.svg'
import Truck from '../../../../public/truck.svg'
const OurProducts = () => {
  return (
    <div className="flex h-auto flex-col w-full items-center sm:w-full sm:overflow-hidden md:overflow-hidden">
      <div className="md:h-[700px] w-full flex flex-col items-center justify-center m-2 overflow-hidden">
        <h1 className="md:text-3xl  font-bold">Nossos Produtos</h1>
        <div className="flex flex-wrap items-center justify-center md:w-[800px] md:h-[400px] mt-8">
          <div className="w-1/2 h-1/2 border-r-2 border-b-2 border-black flex flex-col items-center justify-center ">
            <Image src={Parafuso} alt="" />
            <h1 className="mt-2 font-bold text-lg">Parafusos</h1>
            <button className="text-white bg-black w-4/5 p-1 m-2 rounded-xl">
              Ver produtos
            </button>
          </div>
          <div className="w-1/2 h-1/2 border-b-2  border-black flex flex-col items-center justify-center ">
            <Image src={Especiais} alt="" />
            <h1 className="mt-2 font-bold text-lg">Especiais</h1>
            <button className="text-white bg-black w-4/5 p-1 m-2 rounded-xl">
              Ver produtos
            </button>
          </div>
          <div className="w-1/2 h-1/2 border-r-2  border-black  flex flex-col items-center justify-center ">
            <Image src={Fixadores} alt="" />
            <h1 className="mt-2 font-bold text-lg">Fixadores</h1>
            <button className="text-white bg-black w-4/5 p-1 m-2 rounded-xl">
              Ver produtos
            </button>
          </div>
          <div className="w-1/2 h-1/2 flex flex-col items-center justify-center ">
            <Image src={Pinos} alt="" />
            <h1 className="mt-2 font-bold text-lg">Pinos e tirantes</h1>
            <button className="text-white bg-black w-4/5 p-1 m-2 rounded-xl">
              Ver produtos
            </button>
          </div>

          <button className="text-white bg-black w-[260px] h-[41px] p-1 mt-14 rounded-xl flex items-center justify-center gap-3">
            <Eye />
            Ver produtos
          </button>
        </div>
      </div>
      <div className="w-full mt-4 border-t-2 border-black" />

      <div
        className="lg:flex lg:flex-wrap lg:w-[748px] lg:h-[300px] 
      items-center p-4 justify-between  mt-6 sm:w-full sm:flex-col md:p-4"
      >
        <div className="flex flex-col items-center ">
          <EngOne />
          <h2 className="text-black text-lg font-semibold">
            Engenharia de Qualidade
          </h2>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <Price />
          <h2 className="text-black text-lg font-semibold">
            Preço Competitivo
          </h2>
        </div>
        <div className="flex flex-col items-center  text-center justify-center">
          <Light />
          <h2 className="text-black text-lg font-semibold">
            Inovação em Fixadores
          </h2>
        </div>
        <div className="flex flex-col items-center  text-center justify-center">
          <Word />
          <h2 className="text-black text-lg font-semibold">
            Despachamos para todo Brasil
          </h2>
        </div>
        <div className="flex flex-col items-center  text-center justify-center">
          <Truck />
          <h2 className="text-black text-lg font-semibold">Frota própria</h2>
        </div>
        <div className="flex flex-col items-center  text-center justify-center">
          <EngTwe />
          <h2 className="text-black text-lg font-semibold">
            Ferramentaria própria
          </h2>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
