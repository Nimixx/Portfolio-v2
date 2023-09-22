import skillsData from '../../../data/Skills.json';

const strengthOrder = {
  strong: 1,
  medium: 2,
  low: 3
}

export const sortedSkillsData = skillsData.map((category) => ({
  ...category,
  skills: category.skills.sort(
    (a, b) =>
      strengthOrder[a.strength as keyof typeof strengthOrder] -
      strengthOrder[b.strength as keyof typeof strengthOrder]
  )
}))
