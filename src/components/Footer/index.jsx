import styles from './Footer.module.css'

export default function Footer () {
  const data = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>&copy; Ótica Vida. {data} - Todos os direitos reservados</p>
    </footer>
  )
}