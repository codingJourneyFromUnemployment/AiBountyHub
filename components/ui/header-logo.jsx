import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

function HeaderLogo() {
  return (
    <div className="shrink-0 mr-4">
      <Link className="block group" href="/" aria-label="Cruip">
        <Image src={Logo} width={32} height={32} priority alt="Community" />
      </Link>
    </div>
  )
}

export default HeaderLogo