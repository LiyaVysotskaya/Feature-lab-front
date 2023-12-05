import styles from './Main.scss';

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = (props) => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  )
}

export default Main;
