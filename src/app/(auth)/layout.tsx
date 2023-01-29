import '@/styles/global.css'
import { Inter } from '@next/font/google'
import Glasspane from 'components/Glasspane'
import { PropsWithChildren } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const AuthRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en' className={inter.variable}>
      <head />
      <body className='h-screen w-screen rainbow-mesh p-6'>
        <Glasspane classname='w-full h-full flex items-center justify-center'>
          {children}
        </Glasspane>
      </body>
    </html>
  )
}

export default AuthRootLayout
