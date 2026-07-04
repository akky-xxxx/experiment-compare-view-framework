import { FcWithChildren } from "@/types/FcWithChildren"
import { ReactElement } from "react"

import styles from "./index.module.css"

type Props = {
  headerComponent: ReactElement
}

export const MainLayout: FcWithChildren<Props> = (props) => {
  const { children, headerComponent } = props

  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>{headerComponent}</div>

      <main className={styles.mainWrapper}>{children}</main>
    </div>
  )
}
