import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  day: string
}

export const DayCell: FC<Props> = (props) => {
  const { day } = props

  return <div className={styles.root}>{day}</div>
}
