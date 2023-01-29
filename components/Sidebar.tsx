import Image from 'next/image'
import Card from './Card'
import SidebarLink from './SidebarLink'

const links: {
  label: string
  icon: string
  link: string
}[] = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '/calendar'
  },
  { label: 'Profile', icon: 'User', link: '/profile' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/settings'
  }
]

const Sidebar = () => {
  return (
    <Card className='h-full w-40 flex items-center justify-between flex-wrap'>
      <div className='w-full flex justify-content items-center'>
        <Image src={''} alt='Able logo' priority className='w-14' />
      </div>
      {links.map((link) => (
        <SidebarLink link={link} key={link.label} />
      ))}
    </Card>
  )
}

export default Sidebar
