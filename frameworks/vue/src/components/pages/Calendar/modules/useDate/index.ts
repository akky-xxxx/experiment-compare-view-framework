import { addMonths } from "date-fns"
import { computed, ref } from "vue"

export const useDate = () => {
  const today = ref(new Date())
  const currentMonth = computed(() => today.value.getMonth() + 1)
  const currentYear = computed(() => today.value.getFullYear())

  const handleNextMonthClick = () => {
    today.value = addMonths(today.value, 1)
  }
  const handlePreviousMonthClick = () => {
    today.value = addMonths(today.value, -1)
  }

  return {
    currentMonth,
    currentYear,
    handleNextMonthClick,
    handlePreviousMonthClick,
  }
}
