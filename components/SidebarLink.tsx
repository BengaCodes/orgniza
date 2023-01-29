'use client'

import Link from 'next/link'
import { Settings, User, Grid, Calendar, Icon } from 'react-feather'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const icons: { [key: string]: Icon } = { Settings, User, Grid, Calendar }

const SidebarLink = ({
  link
}: {
  link: { label: string; icon: string; link: string }
}) => {
  const pathname = usePathname()
  // let isActive = false

  // if (pathname === link?.link) {
  //   isActive = true
  // }

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (pathname === link.link) {
      setIsActive(true)
    }

    return () => setIsActive(false)
  }, [pathname, link.link])

  const Icon = icons[link.icon]

  return (
    <Link href={link.link} className='w-full flex justify-center items-center'>
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600'
        )}
      />
    </Link>
  )
}

export default SidebarLink
