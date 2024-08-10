'use client'
import React, { useState } from 'react'
import BgBudget from '../../../public/bgbudget.png'
import Fania from '../../../public/customers/fania.png'
import Arteb from '../../../public/customers/arteb.png'
import Cabovel from '../../../public/customers/cabovel.png'
import ARayumond from '../../../public/customers/raymond.png'
import BrasiLux from '../../../public/customers/braslux.png'
import Cofran from '../../../public/customers/cofan.png'
import Dura from '../../../public/customers/dura.png'
import Ficosa from '../../../public/customers/fecosa.png'
import JapaFlex from '../../../public/customers/jepaflex.png'
import HtIllu from '../../../public/customers/lantermax.png'
import Nino from '../../../public/customers/ninof.png'
import Orgus from '../../../public/customers/orgus.png'
import Welcon from '../../../public/customers/welcon.png'
import Image from 'next/image'

const OurCustomers = () => {
  const customers = [
    { nome: 'Fania', imagem: Fania },
    { nome: 'Cabovel', imagem: Cabovel },
    { nome: 'ARaymond', imagem: ARayumond },
    { nome: 'Arteb', imagem: Arteb },
    { nome: 'Braslux', imagem: BrasiLux },
    { nome: 'Cofran', imagem: Cofran },
    { nome: 'Dura', imagem: Dura },
    { nome: 'Ficosa', imagem: Ficosa },
    { nome: 'Japaflex', imagem: JapaFlex },
    { nome: 'HT Illuminated', imagem: HtIllu },
    { nome: 'Nino Faróis', imagem: Nino },
    { nome: 'Orgus', imagem: Orgus },
    { nome: 'Welcon', imagem: Welcon }
  ]
  return (
    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg p-6 max-w-xs mr-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-2/3">
        {customers.map(cliente => (
          <div
            key={cliente.nome}
            className="flex items-center justify-center h-24"
          >
            <Image
              src={cliente.imagem}
              alt={cliente.nome}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Budget() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    produto: '',
    quantidade: '',
    especificacoes: '',
    prazo: '',
    mensagem: ''
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const enviarOrcamento = () => {
    const textoOrcamento = `*Orçamento*%0A
    *Nome:* ${formData.nome}%0A
    *Email:* ${formData.email}%0A
    *Telefone:* ${formData.telefone}%0A
    *Empresa:* ${formData.empresa}%0A
    *Produto:* ${formData.produto}%0A
    *Quantidade:* ${formData.quantidade}%0A
    *Especificações:* ${formData.especificacoes}%0A
    *Prazo de Entrega:* ${formData.prazo}%0A
    *Mensagem:* ${formData.mensagem}`

    const whatsappNumber = '5511916011694' // Coloque o número de WhatsApp aqui
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${textoOrcamento}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <div
      className="lg:mt-20 relative flex flex-row items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgBudget.src})` }}
    >
      {/* <OurCustomers /> */}
      <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg p-6 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Faça Seu Orçamento
        </h2>
        <p className="text-gray-600 mb-6">
          Na LIBER INDUSTRIAL LTDA, entendemos que cada projeto é único.
          Preencha o formulário abaixo com os detalhes do seu pedido e nossa
          equipe de especialistas entrará em contato com uma cotação
          personalizada.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Produto ou Serviço Necessário
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => setFormData({ ...formData, produto: 'Parafusos' })}
              className={`flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Parafusos' ? 'bg-gray-300' : ''
              }`}
            >
              Parafusos
            </button>
            <button
              onClick={() => setFormData({ ...formData, produto: 'Porcas' })}
              className={`flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Porcas' ? 'bg-gray-300' : ''
              }`}
            >
              Porcas
            </button>
            <button
              onClick={() => setFormData({ ...formData, produto: 'Pinos' })}
              className={`flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Pinos' ? 'bg-gray-300' : ''
              }`}
            >
              Pinos
            </button>
            <button
              onClick={() => setFormData({ ...formData, produto: 'Travas' })}
              className={`flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Travas' ? 'bg-gray-300' : ''
              }`}
            >
              Travas
            </button>
            <button
              onClick={() => setFormData({ ...formData, produto: 'Fixadores' })}
              className={`flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Fixadores' ? 'bg-gray-300' : ''
              }`}
            >
              Fixadores
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantidade Necessária</label>
          <input
            type="text"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Especificações Técnicas</label>
          <input
            type="text"
            name="especificacoes"
            value={formData.especificacoes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Prazo de Entrega desejado
          </label>
          <input
            type="text"
            name="prazo"
            value={formData.prazo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensagem adicional</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
        </div>
        <button
          onClick={enviarOrcamento}
          className="w-full p-3 bg-red-600 text-white rounded"
        >
          Solicitar Orçamento
        </button>
      </div>
    </div>
  )
}

export default Budget
