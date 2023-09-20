type ButtonProps = {
  isMenuOpen: boolean
  handleOpen: () => void
}

export default function NavButton({ isMenuOpen, handleOpen }: ButtonProps) {
  return (
    <button
      onClick={handleOpen}
      className="block rounded border border-primary_light bg-primary_light/20 transition-colors duration-300 animate-in fade-in hover:bg-primary_light/40 md:hidden"
    >
      {isMenuOpen ? (
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      ) : (
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      )}
    </button>
  )
}
