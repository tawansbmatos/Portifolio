import styles from '../sidebarRight/sidebarRight.module.css';

export default function SidebarRight() {
  return (
    <aside className={styles.sidebarRight}>
      <h3>LinkedIn Notícias</h3>
      <ul>
        <li>Diploma ou habilidades: qual é mais útil?</li>
        <li>Vagas de estágio e trainee em alta</li>
        <li>Desenvolvedores para a COP09</li>
        <li>Mais de 1 bilhão de views no YouTube</li>
      </ul>

      <h3>Mais para explorar</h3>
      <ul>
        <li>Mini Sudoku</li>
        <li>Xadrez</li>
        <li>2048</li>
        <li>Tango</li>
        <li>Conexões</li>
      </ul>
    </aside>
  )
}
