import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.bg}>
      <div className={styles.maindiv}>
      <div className={styles.card}>
        <img
        src="https://www.kraftheinzcompany.com/images/logo_main.png"
        alt='Kraft Company'
        />
        <h2>Bem-vindo colaborador!</h2>
      <div className={styles.formcard}>
        <div className={styles.cardinputs}>
        <form>
        <label htmlFor="email">
        E-mail
        </label>
        <input 
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        />
        <label htmlFor="password">
          Senha
        </label>
        <input 
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        />
         <button type="button">
          Login
        </button>
      </form>
        </div>
      </div>
      </div>
      <img
        src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/ketchup-marz-edition-da-heinz.jpg"
        alt='Kraft Company'
        className={styles.bigimg}
        />
      </div>
      </div>
    </>
  )
}
