import { TaskId } from "@/components/pages/TaskId"

import type { PathParamPage } from "@/types/PathParamPage"

const TaskIdPage: PathParamPage<{ taskId: string }> = async (props) => {
  const { params } = props
  const pathParam = await params

  return <TaskId id={pathParam.taskId} />
}

export default TaskIdPage
