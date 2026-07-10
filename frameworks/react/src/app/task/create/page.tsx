import { TaskCreate } from "@/components/pages/TaskCreate"

import type { PathParamPage } from "@/types/PathParamPage"

const TaskCreatePage: PathParamPage<
  Record<string, never>,
  { date?: string }
> = async (props) => {
  const { searchParams } = props
  const searchParam = await searchParams

  return <TaskCreate date={searchParam.date} />
}

export default TaskCreatePage
