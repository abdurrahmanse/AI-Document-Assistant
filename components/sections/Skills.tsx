import { SiteIcon } from '@/components/ui'
import { skillsPage } from '@/data'

export default function Skills() {
  const { sections, skillCategories } = skillsPage

  return (
    <section className='py-20 md:py-32 bg-linear-to-b from-slate-800 to-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 mb-4'>
            <span className='inline-flex items-center gap-2'>
              <SiteIcon name='layers' className='h-4 w-4' /> Technical Skills
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>{sections.hero.title}</h2>
          <p className='text-xl text-slate-400 max-w-2xl mx-auto'>{sections.hero.description}</p>
        </div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {skillCategories.slice(0, 6).map((category) => (
            <div
              key={category.id}
              className='bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300'
            >
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <SiteIcon
                  name={
                    category.categoryIcon === 'code' ? 'code' : category.categoryIcon === 'brain' ? 'brain' : 'layers'
                  }
                  className='h-4 w-4 text-cyan-400'
                />
                {category.categoryName}
              </h3>
              <p className='text-slate-400 text-sm mb-4'>{category.description}</p>
              <div className='space-y-2'>
                {category.skills.slice(0, 3).map((skill) => (
                  <div key={skill.name} className='flex items-center justify-between'>
                    <span className='text-slate-300 text-sm flex items-center gap-2'>
                      <SiteIcon name='check' className='h-3.5 w-3.5 text-blue-400' />
                      {skill.name}
                    </span>
                    <span className='text-xs text-blue-400 font-medium'>{skill.proficiency}</span>
                  </div>
                ))}
                {category.skills.length > 3 && (
                  <p className='text-xs text-slate-400 pt-2'>+ {category.skills.length - 3} more</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-8 mt-12'>
          <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-2'>
            <SiteIcon name='trophy' className='h-5 w-5 text-amber-400' />
            Proficiency Overview
          </h3>

          <div className='space-y-6'>
            {skillCategories
              .flatMap((cat) => cat.skills)
              .slice(0, 8)
              .map((skill) => (
                <div key={skill.name}>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-white font-medium'>{skill.name}</span>
                    <span className='text-slate-400 text-sm'>{skill.proficiency}</span>
                  </div>
                  <div className='h-2 bg-slate-700 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-linear-to-r from-blue-400 to-cyan-400 rounded-full'
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
