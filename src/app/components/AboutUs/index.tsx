import './index.css'
import React from 'react'

const AboutUs = () => {
  const Texts = [
    {
      textOne: 'Fabricação de Parafusos e',
      textTwo: 'Fixadores Especiais'
    },
    {
      textOne: 'Controle Rigoroso de',
      textTwo: 'Qualidade'
    },
    {
      textOne: 'Desenvolvimento e Inovação',
      textTwo: 'Tecnológica'
    },
    {
      textOne: 'Parceria com Clientes e',
      textTwo: 'Atendimento Personalizado'
    }
  ]
  return (
    <div className="about flex flex-col md:flex-row">
      <div className="div-maior w-full md:w-3/4">
        <div className="w-full h-full flex md:skew-x-12">
          <div className="text-white flex-1 flex flex-col justify-center p-4 md:p-0 md:ml-14">
            <h1 className="text-[36px] md:text-[68px] font-bold">
              O que Fazemos
            </h1>
            <p className="text-custom-text-white mt-2 text-[24px] md:text-[48px]">
              Fixadores Especiais para Suas Necessidades
            </p>
            <div className="flex flex-wrap">
              {Texts.map(text => (
                <React.Fragment key={text.textOne}>
                  <div className="flex flex-col mr-3 mt-2">
                    <p className="text-gray-300 text-lg">{text.textOne}</p>
                    <p className="text-white text-lg">{text.textTwo}</p>
                  </div>
                  <div className="w-px h-14 m-4 bg-gray-300 hidden md:block" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="div-menor w-full md:w-1/4">
        <div className="filha"></div>
      </div>
    </div>
  )
}

export default AboutUs
