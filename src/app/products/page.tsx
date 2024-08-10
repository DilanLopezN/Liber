// pages/index.js
import Image from 'next/image'

const products = Array(30).fill({
  name: 'Nome',
  imageUrl: '/path/to/image.jpg', // Substitua pelo caminho real das imagens
  link: '#'
})

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Produtos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center border p-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={150}
              height={150}
            />
            <h2 className="mt-4 text-xl">{product.name}</h2>
            <a href={product.link} className="mt-2 text-red-500">
              Saiba Mais
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
