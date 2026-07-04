import { FcWithChildren } from "@/types/FcWithChildren"
import { ReactElement } from "react"

type Props = {
  headerComponent: ReactElement
}

export const MainLayout: FcWithChildren<Props> = (props) => {
  const { children, headerComponent } = props

  return (
    <div>
      <div>{headerComponent}</div>

      <main>{children}</main>
    </div>
  )
}
