import Image from 'next/image'
import styles from './Contato.module.css'
import Image1 from '../../../public/local.png'
import Image2 from '../../../public/telefone.png'
import Image3 from '../../../public/email.png'
import Image4 from '../../../public/fb.png'
import Image5 from '../../../public/ig.png'
import Image6 from '../../../public/tt.png'

export default function Contato() {
  return (
    <section className={styles.container_contato} id='contato'>
      <div className={`container ${styles.container_wrapper}`}>
        <div className={styles.header}>
          <h4>Fale Conosco</h4>
          <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em
            contato através das nossas redes sociais ou da central de atendimento.
          </p>
        </div>
        <div className={styles.contato_content}>
          <div className={styles.contato_card}>
            <h5>Nossos contatos</h5>
            <div className={styles.contato_info}>
              <div className={styles.contato_info_content}>
                <Image src={Image1} alt='Imagem' title='Imagem'/>
                <span>Nova Iguaçu, RJ</span>
              </div>
              <div className={styles.contato_info_content}>
                <Image src={Image2} alt='Imagem' title='Imagem'/>
                <span>(21) 9999-9999</span>
              </div>
              <div className={styles.contato_info_content}>
                <Image src={Image3} alt='Imagem' title='Imagem'/>
                <span>contato@oticavida.com</span>
              </div>
            </div>
          </div>

          <div className={styles.contato_card}>
            <h5>Nossas Redes Sociais</h5>
            <div className={styles.contato_info}>
              <div className={styles.contato_info_content}>
                <Image src={Image4} alt='Imagem' title='Imagem'/>
                <span>/OticaVida</span>
              </div>
              <div className={styles.contato_info_content}>
                <Image src={Image5} alt='Imagem' title='Imagem'/>
                <span>@oticavidarj</span>
              </div>
              <div className={styles.contato_info_content}>
                <Image src={Image6} alt='Imagem' title='Imagem'/>
                <span>@oticavidarj</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}