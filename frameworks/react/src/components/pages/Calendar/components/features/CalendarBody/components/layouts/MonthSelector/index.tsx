import styles from "./index.module.css"

import type { FC, ReactElement } from "react"

type Props = {
  monthElement: ReactElement
  previousButtonElement: ReactElement
  nextButtonElement: ReactElement
}

export const MonthSelector: FC<Props> = (props) => {
  const { monthElement, previousButtonElement, nextButtonElement } = props

  return (
    <header className={styles.root}>
      {previousButtonElement}
      {monthElement}
      {nextButtonElement}
    </header>
  )
}
