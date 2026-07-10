import Link from "next/link"
import styles from "./index.module.css"

import type { FC } from "react"

const NAVIGATION_DATA = [
  {
    label: "Top",
    href: "/",
  },
  {
    label: "Calendar",
    href: "/calendar",
  },
  {
    label: "Create schedule",
    href: "/task/create",
  },
] as const

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          {NAVIGATION_DATA.map((navigation) => {
            const { href, label } = navigation

            return (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
