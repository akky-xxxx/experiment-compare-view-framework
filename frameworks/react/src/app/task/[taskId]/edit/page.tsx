import { TaskIdEdit } from "@/components/pages/TaskIdEdit"

import type { PathParamPage } from "@/types/PathParamPage"

const TaskIdEditPage: PathParamPage<{ taskId: string }> = async (props) => {
  const { params } = props
  const pathParam = await params

  return <TaskIdEdit id={pathParam.taskId} />
}

export default TaskIdEditPage
