import styles from './styles.module.css';

const HelloWorldDiv = () => {
  console.log(styles.className);
  return <div className={styles.className}>Hello world!</div>;
};

export default HelloWorldDiv;
