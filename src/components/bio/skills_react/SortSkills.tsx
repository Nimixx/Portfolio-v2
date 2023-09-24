// Component
import { sortedSkillsData } from '../../hooks/useSortedSkills'
import { useExpandSkill } from '../../hooks/useExpandSkill'
import SkillLegend from './SkillLegend'
import SkillSection from './SkillSection'
import ExpandButton from './ExpandButton'
import { gsap } from 'gsap'
import { useEffect } from 'preact/hooks'

export default function SortSkills() {
  const { isExpand, handleExpand } = useExpandSkill(false)

  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill_cards');

    const tl = gsap.timeline();

    tl.to(skillCards, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, [isExpand]);

  return (
    <section>
      <ExpandButton isExpand={isExpand} handleExpand={handleExpand} />
      {isExpand && <SkillLegend />}
      {isExpand && (
        <SkillSection
          cardClass="skill_cards opacity-0 -translate-y-10"
          sortedSkillsData={sortedSkillsData}
          handleExpand={handleExpand}
        />
      )}
    </section>
  )
}
