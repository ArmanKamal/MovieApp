import Link from 'next/link'

interface MenuItemProps{
    title:string,
    address: string,
    Icon: any
}

export default function MenuItem({title,address,Icon}:MenuItemProps) {
  return (
    <Link href={address} className='hover:text-purple-500'>
        <Icon className='text-2xl sm:hidden' />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
