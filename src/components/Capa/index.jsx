import styles from './Capa.module.css'

export default function Capa() {
  return (
    <section className={styles.section_capa}>
      <div className='container'>
        <div className={styles.info}>
          <p>Preços baixos em</p>
          <h1>Óculos de Grau e de Sol</h1>
          <p>Você só encontra aqui</p>
        </div>
      </div>
    </section>
  )
}