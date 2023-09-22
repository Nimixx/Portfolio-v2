const SignalSkill = [
  { label: 'Jdu do hloubky', color: 'bg-lime-300' },
  { label: 'Už znám', color: 'bg-orange-500' },
  { label: 'Učím se...', color: 'bg-gray-600' }
]

export default function SkillLegend() {
  return (
    <article class="fadeIn flex w-full items-center justify-start pt-8">
      <ul class="flex items-center gap-4 text-sm text-accent_1">
        {SignalSkill.map((skill) => (
          <li class="flex items-center justify-center gap-2">
            <p>{skill.label}</p> <span class={`h-2 w-2 rounded-full ${skill.color}`} />
          </li>
        ))}
      </ul>
    </article>
  )
}
