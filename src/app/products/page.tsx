// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

const products = Array.from({ length: 30 }, (_, index) => ({
  name: 'Em Estoque',
  imageUrl: `/products/LiberParafusos_${index + 1}.jpg`, // Substitua pelo caminho real das imagens
  link: '#'
}))

export default function Products() {
  return (
    <div
      className="
    lg:mt-20
    container mx-auto px-4 py-8"
    >
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
            <Link href="/budget" className="mt-2 text-red-500">
              Realizar orçamento
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
