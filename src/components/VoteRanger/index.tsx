import styles from './styles.module.scss'

type VoteRangerTypes = {
  value?: number;
  height?: string;
  width?: string;
}

function VoteRanger({value, height, width}: VoteRangerTypes) {

  const style = {
    height: height,
    width: width
  };

  return (
    <div className={styles.container}>
      <div className={styles.circle} style={style}>
        {value && <span>{value*10}%</span>}
      </div>
    </div>
  )
}

export default VoteRanger