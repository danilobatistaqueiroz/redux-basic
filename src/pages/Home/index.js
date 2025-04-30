import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

export default function Home() {
  const categorias = useSelector(state => state.categorias);
  return (
    <div>
      <div style={{paddingTop:150,paddingBottom:150}}></div>
      <div className={styles.categorias}>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}