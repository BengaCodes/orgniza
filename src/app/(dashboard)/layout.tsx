import '@/styles/global.css'
import { Inter } from '@next/font/google'
// import Sidebar from '@/components/Sidebar'
import clsx from 'clsx'
import Glasspane from 'components/Glasspane'
import { PropsWithChildren } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={clsx(inter.variable, 'dark')}>
      <head />
      <body className='h-screen w-screen candy-mesh p-6'>
        <Glasspane classname='w-full h-full p-6 flex align-center container mx-auto'>
          {/* <Sidebar /> */}
          <main className='w-full pl-6 h-full'>{children}</main>
        </Glasspane>
      </body>
    </html>
  )
}
