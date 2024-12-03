import Revenue from "./Revenue/Revenue";
import Taxes from "./Taxes/Taxes";
import styles from "./styles.module.scss";

export default async function Page() {
  return (
    <div className={styles.page}>
      <div className="w-full h-[50%] flex gap-[20px] justify-center">
        <Revenue />
        <Taxes />
      </div>
      <div className="w-full h-[50%] flex gap-[20px] justify-center"></div>
    </div>
  );
}
