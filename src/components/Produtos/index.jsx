import Image from "next/image";
import styles from "./Produtos.module.css";
import Imagem1 from "../../../public/oculos01.png";
import Imagem2 from "../../../public/oculos02.png";
import Imagem3 from "../../../public/oculos03.png";
import Imagem4 from "../../../public/oculos04.png";

export default function Produtos() {
  return (
    <section className="container" id="produtos">
      <div className={styles.section_produto}>
        <div>
          <h3>Nossos Produtos</h3>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes transitio nos
            modelos masculino, feminino e infantil.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor
            qualidade do mercado.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.card_produto}>
            <h3>Óculos de grau</h3>
            <Image src={Imagem1} alt="Óculos " title="Óculos" />
            <p>R$ 500,00</p>
          </div>

          <div className={styles.card_produto}>
            <h3>Óculos transition</h3>
            <Image src={Imagem2} alt="Óculos " title="Óculos" />
            <p>R$ 750,00</p>
          </div>

          <div className={styles.card_produto}>
            <h3>Óculos de sol</h3>
            <Image src={Imagem3} alt="Óculos " title="Óculos" />
            <p>R$ 700,00</p>
          </div>

          <div className={styles.card_produto}>
            <h3>Óculos infantil</h3>
            <Image src={Imagem4} alt="Óculos " title="Óculos" />
            <p>R$ 500,00</p>
          </div>
        </div>

        <div>
          <h3>Todos os nossos produtos incluem:</h3>
          <div>
            <ul>
              <li>Garantia de 1 ano</li>
              <li>Manutenção preventiva</li>
              <li>Descontos especiais na compra da segunda unidade</li>
              <li>Flexibilidade de pagamento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}