const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
          <p className="mb-8">
            Estamos aqui para ajudar você. Entre em contato conosco para
            consultas, orçamentos ou mais informações sobre nossos produtos e
            serviços.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Nossos Contatos</h2>
            <p>
              <strong>Telefone:</strong> (11)-4059-8900
            </p>
            <p>
              <strong>Email:</strong> contato@liberindustrial.com.br
            </p>
            <p>
              <strong>Endereço:</strong> Rua Poaca, 85 – Jardim Inamar – Diadema
              – SP
            </p>
            <p>
              <strong>Horario de Atendimento:</strong> 07:30 as 17:00 - Seg a
              Sex.
            </p>
          </div>
          <div className="mr-4">
            <h2 className="text-2xl font-bold mb-2">Localização</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.733316647874!2d-46.59983532438688!3d-23.506352362626386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce427d022a120f%3A0x1b63f1bc54cdbbd7!2sRua%20Poaca%2C%2085%20-%20Jardim%20Inamar%2C%20Diadema%20-%20SP%2C%2009921-270!5e0!3m2!1sen!2sbr!4v1691161401834!5m2!1sen!2sbr"
              width="600"
              height="550"
              loading="lazy"
              className="w-full h-64 border-0"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Nos Mande uma mensagem</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nome Completo</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Assunto</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensagem</label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
