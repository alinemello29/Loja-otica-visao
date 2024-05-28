import Image from 'next/image'
import styles from './Topo.module.css'
import Link from 'next/link'
import Logo from '../../../public/logo.png'

export default function Topo () {
  return (
    <header className={styles.container_topo}>
      <div className={`container ${styles.topo_content}`}>
        <Image src={Logo} alt='Logo' title='Logo' className={styles.img_logo}/>
        <nav className={styles.links}>
          <Link href='#produtos'>Produtos</Link>
          <Link href='#sobre'>Sobre</Link>
          <Link href='#contato'>Contato</Link>
        </nav>
      </div>
    </header>
  )
}