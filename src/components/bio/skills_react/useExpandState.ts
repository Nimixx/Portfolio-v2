import { useState } from 'preact/hooks'

interface ExpandState {
  isExpand: boolean
  handleExpand: () => void
}

export function useExpandState(initialState: boolean = false): ExpandState {
  const [isExpand, setIsExpand] = useState<boolean>(initialState)

  const handleExpand = (): void => {
    try {
      setIsExpand((prevIsExpand) => !prevIsExpand)
    } catch (error) {
      console.error('Error toggling expand state:', error)
    }
  }

  return { isExpand, handleExpand }
}
