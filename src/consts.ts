//Global constants
export const SITE_TITLE = 'Nimixx.dev'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const CREATOR_AUTHOR_NAME = 'Tadeáš Thelen'
export const ACTUAL_YEAR = new Date().getFullYear()

//Image authors
export const AUTHOR_HERO = 'Alejandro Ortiz'

//Image sources
export const SOURCE_HERO = 'https://unsplash.com/@alejandroortiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

//Url constants
export const HOME = '/'
export const PROJECT = '/project'
export const BLOG = '/blog'
export const BIO = '/bio'

//Navigation items
export const NAV_ITEMS = [
  { label: 'Domů', path: HOME },
  { label: 'Projekty', path: PROJECT },
  { label: 'Blog', path: BLOG },
  { label: 'Bio', path: BIO }
]
//Social media

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Nimixx',
    icon: 'simple-icons:github'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/NimixxDev',
    icon: 'simple-icons:twitter'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tadeasthelen/',
    icon: 'simple-icons:linkedin'
  },
  {
    name: 'YouTube',
    href: '/',
    icon: 'simple-icons:youtube'
  }
]

// Home page constants
export const POST_TEXT =
  'Pravidelně se snažím psát články o tom co mě zajímá a co mě baví. Většinou se jedná návody na různé technologie a věci kolem vývoje moderních webových aplikací. Někdy píšu moje názory nanejnovější trendy a technologie.'

export const PROJECT_TEXT =
  'Většinou se jedná o projekty, které jsem vytvořil pro sebe nebo pro někoho jiného. Většinou se jedná o webové aplikace a menší komponenty. Aktuálně pracuji na vlastní komponentové knihovně.'

export const BIO_TEXT =
  'Jmenuji se Tadeáš a ve volném čase vytvářím webové stránky a aplikace. Rozhodl jsem se konečně svůj koníček, který je pro mě vším, posunout na úroveň, na které jej budu moct provozovat na full time. Rád bych se dostal do kolektivu, kde budou mít lidé kolem mě stejnou vášeň a já se budu moct v kódování posunout zas o kus dál.'

export const SKILL_TEXT =
  'O grafiku, design a tvorbu webových stránek a aplikací se zajímám už delší dobu. Dříve jsem se zaměřoval především na grafiku a tvorbu webových stránek pomocí CMS systému jako je wordpress. Později jsem se rozhodul že tvorba webů je mi trochu bližší a naučil jsem se je psát od základů. Níže najdete můj stuck, který není rozhodně kompletní a stále se učím nové věci a snažím se zlepšovat.'

//Mix constants
export const COPYRIGHT = `© ${ACTUAL_YEAR} ${CREATOR_AUTHOR_NAME}`
