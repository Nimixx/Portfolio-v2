type Skill = {
  name: string
  strength: string
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

type SkillSectionProps = {
  sortedSkillsData: SkillCategory[]
  handleExpand: () => void
}

const SkillSection = ({ sortedSkillsData, handleExpand }: SkillSectionProps) => (
  <section className="fadeIn mt-6 grid w-full grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:grid-cols-4">
    {sortedSkillsData.map((category) => (
      <article
        key={category.title}
        id="skill_cards"
        className="w-full rounded-xl border border-primary_light bg-primary_light/20 p-4 shadow shadow-primary_dark"
      >
        <button onClick={handleExpand} className="mb-2 font-bold text-gray-300">
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
)

export default SkillSection

