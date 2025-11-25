import ModelSelect from "./ModelSelect";
import Setting from "./Setting";
import useStyle from "./style";

export default function () {
  const { styles } = useStyle();
  return <div className={styles.header}>
    <ModelSelect />
    <div style={{ flex: 1 }} />
    <Setting />
  </div>
}