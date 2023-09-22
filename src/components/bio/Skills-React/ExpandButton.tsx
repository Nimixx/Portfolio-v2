
type RenderButtonProps = {
  isExpand: boolean
  handleExpand: () => void
}

export default function ExpandButton({ isExpand, handleExpand }: RenderButtonProps) {
  return (
    <button
      onClick={handleExpand}
      className={`rounded-md border border-primary_light bg-primary/10 px-6 py-2 text-xl font-medium transition-colors duration-200 ease-in-out
        ${isExpand ? 'text-accent_2' : 'text-primary_black'}
        hover:bg-primary_light/40 hover:text-accent_2 focus:outline-none focus:ring-2
        focus:ring-primary_light focus:ring-opacity-50`}
      aria-label={isExpand ? 'Close content' : 'Show content'}
    >
      {isExpand ? 'Zavřít' : 'Ukázat'} stuck
    </button>
  )
}
