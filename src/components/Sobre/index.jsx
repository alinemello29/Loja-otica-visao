import Image from "next/image";
import styles from "./Sobre.module.css";
import Imagem1 from "../../../public/loja.png";
import Imagem2 from "../../../public/atendimento.png";

export default function Sobre() {
  return (
    <section className={`container ${styles.cards}`} id="sobre">
      <div className={styles.wrapper}>
        <h3>Quem somos nós</h3>
        <p>
          Fundada em 2001 aqui nesta cidade, a Óticas vida iniciou suas
          atividades focada no atendimento ao público de renda mais baixa,
          sempre com o objetivo de proporcionar ao cliente bom atendimento,
          qaualidade e preço baixo.
        </p>
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <Image src={Imagem1} title="Imagem" alt="Imagem" />
        </div>
        <div className={styles.card}>
          <h4>Nossas Filiais</h4>
          <p>Hoje temos mais de 20 filiais pelo Brasil na América</p>
        </div>
        <div className={styles.card}>
          <h4>Atendimento Flexível</h4>
          <p>Nossa equipe é treinada a atender</p>
        </div>
        <div className={styles.card}>
          <Image src={Imagem2} title="Imagem" alt="Imagem" />
        </div>
      </div>
    </section>
  );
}