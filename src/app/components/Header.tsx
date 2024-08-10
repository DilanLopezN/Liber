'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/LogoLiber.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const pathname = usePathname()
  const isActive = (actualPath: string) => pathname === actualPath

  return (
    <>
      <nav className="fixed top-0 w-screen sm:fixed bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow z-50 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <Image
              src={Logo}
              width={48}
              height={48}
              alt="Menu de navegação do site"
            />
          </a>

          <div className="flex items-center md:hidden">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? '' : 'hidden'
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/about')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/about')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/products')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/products')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/contact')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/contact')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/control"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/control')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/control')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Controle de Qualidade
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/documents')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/documents')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  href="/budget"
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/budget')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/budget')
                        ? ' lg:text-red-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-gray-700 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-16">{/* Conteúdo da página */}</div>
    </>
  )
}

export default Navbar
