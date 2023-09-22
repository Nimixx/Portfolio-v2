import { useState } from 'preact/hooks'
import skillsData from '../../data/Skills.json'

const SignalSkill = [
  { label: 'Jdu do hloubky', color: 'bg-lime-300' },
  { label: 'Už znám', color: 'bg-orange-500' },
  { label: 'Učím se...', color: 'bg-gray-600' }
]

const strengthOrder = {
  strong: 1,
  medium: 2,
  low: 3
}

const sortedSkillsData = skillsData.map((category) => ({
  ...category,
  skills: category.skills.sort(
    (a, b) =>
      strengthOrder[a.strength as keyof typeof strengthOrder] -
      strengthOrder[b.strength as keyof typeof strengthOrder]
  )
}))

export default function SortSkills() {
  const [isExpand, setIsExpand] = useState(false)

  const handleExpand = () => {
    setIsExpand(!isExpand)
    console.log(isExpand)
  }

  return (
    <section>
      <button
        onClick={handleExpand}
        className="text-primary_black block rounded-lg border border-primary_light bg-primary/10 px-6 py-2 text-xl font-medium transition-colors duration-200 ease-in-out hover:bg-primary_light/40 focus:bg-primary_light/40"
      >
        {isExpand ? 'Zavřít' : 'Ukázat'} stuck
      </button>
      {isExpand && (
        <article class="flex w-full items-center justify-start pt-8 fadeIn">
          <ul class="flex items-center gap-4 text-sm text-accent_1">
            {SignalSkill.map((skill) => (
              <li class="flex items-center justify-center gap-2">
                <p>{skill.label}</p> <span class={`h-2 w-2 rounded-full ${skill.color}`} />
              </li>
            ))}
          </ul>
        </article>
      )}
      {isExpand && (
        <section className="mt-6 grid w-full grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:grid-cols-4 fadeIn">
          {sortedSkillsData.map((category) => (
            <article
              key={category.title}
              id="skill_cards"
              className="w-full rounded-xl border border-primary_light bg-primary_light/20 p-4 shadow shadow-primary_dark"
            >
              <button
                onClick={handleExpand}
                className="mb-2 font-bold text-gray-300"
              >
                {category.title}
              </button>
              <hr className="my-2 w-full border-b-0 border-primary_light" />
              <ul className="text-secondary_text">
                {category.skills.map((skill) => (
                  <li className="flex items-center gap-2" key={skill.name}>
                    <p
                      className={`${skill.strength === 'strong' && 'font-bold text-accent_3'} ${
                        skill.strength === 'medium' && 'font-semibold text-accent_2'
                      } ${skill.strength === 'low' && 'font-thin text-accent_1'}`}
                    >
                      {skill.name}
                    </p>
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        skill.strength === 'strong'
                          ? 'bg-lime-300'
                          : skill.strength === 'medium'
                          ? 'bg-orange-500'
                          : 'bg-gray-600'
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}
    </section>
  )
}
