import Image from 'next/image'
import LogoLiber from '../../../public/LogoLiber.png'

export default function Footer() {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:h-[482px] p-4 md:p-0">
      <Image
        src={LogoLiber}
        alt="Logo Liber"
        className="mb-4 md:mb-0 md:mr-16 w-[150px] h-auto md:w-auto"
      />
      <div className="flex flex-col w-full md:w-[482px] md:h-[368px]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex flex-col items-center gap-2 mb-4 md:mb-0">
            <h3 className="text-lg font-medium">Explorar</h3>
            <ul className="p-4">
              <li className="text-md font-medium m-2">Inicio</li>
              <li className="text-md font-medium m-2">Sobre nós</li>
              <li className="text-md font-medium m-2">Explorar</li>
              <li className="text-md font-medium m-2">Serviços</li>
              <li className="text-md font-medium m-2">Produtos</li>
              <li className="text-md font-medium m-2">Controle de Qualidade</li>
              <li className="text-md font-medium m-2">Orçamento</li>
              <li className="text-md font-medium m-2">Contato</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="p-4">
              <li className="text-md font-medium m-2">Termos</li>
              <li className="text-md font-medium m-2">Documentação</li>
              <li className="text-md font-medium m-2">
                Política de Privacidade
              </li>
            </ul>
          </div>
        </div>
        <span className="text-center text-lg text-zinc-900 font-semibold mt-4 md:mt-0">
          Copyright © Liber Industrial 2024. All rights reserved.
        </span>
      </div>
    </div>
  )
}
