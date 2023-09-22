// Component
import { sortedSkillsData } from '../../hooks/useSortedSkills'
import { useExpandState } from '../../hooks/useExpandState'
import SkillLegend from './SkillLegend'
import SkillSection from './SkillSection'
import ExpandButton from './ExpandButton'

export default function SortSkills() {
  const { isExpand, handleExpand } = useExpandState(false)

  return (
    <section>
      <ExpandButton isExpand={isExpand} handleExpand={handleExpand} />
      {isExpand && <SkillLegend />}
      {isExpand && <SkillSection sortedSkillsData={sortedSkillsData} handleExpand={handleExpand} />}
    </section>
  )
}
