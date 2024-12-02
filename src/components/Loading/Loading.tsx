import styles from "./styles.module.scss";

export default function Loading({ message }: { message: string }) {
  return (
    <div className={styles.loading}>
      <p>{message}</p>
    </div>
  );
}
