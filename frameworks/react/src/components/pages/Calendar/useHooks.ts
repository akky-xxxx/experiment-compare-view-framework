import { useTaskList } from "./modules/useTaskList"

export const useHooks = () => {
  const taskList = useTaskList()

  return {
    taskList,
  }
};
