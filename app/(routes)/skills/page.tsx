import { SiteIcon } from '@/components/ui'
import { skillsPage } from '@/data'

export const metadata = {
  title: skillsPage.page.title,
  description: skillsPage.page.metaDescription,
}

export default function SkillsPage() {
  const { sections, skillCategories } = skillsPage
  const { hero } = sections

  const getProficiencyColor = (level: number) => {
    if (level === 5) return 'from-green-500 to-emerald-500'
    if (level === 4) return 'from-blue-500 to-cyan-500'
    if (level === 3) return 'from-yellow-500 to-orange-500'
    return 'from-slate-500 to-slate-600'
  }

  return (
    <main className='overflow-hidden'>
      {/* Hero Section */}
      <section className='bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>{hero.title}</h1>
          <p className='text-xl text-slate-300'>{hero.subtitle}</p>
          <p className='text-lg text-slate-400'>{hero.description}</p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950'>
        <div className='max-w-6xl mx-auto space-y-16'>
          {skillCategories.map((category: (typeof skillCategories)[0], categoryIdx) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className='mb-12'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300'>
                    <SiteIcon
                      name={category.categoryIcon === 'code' ? 'code' : category.categoryIcon === 'brain' ? 'brain' : 'layers'}
                      className='h-6 w-6'
                    />
                  </div>
                  <div>
                    <h2 className='text-3xl sm:text-4xl font-bold text-white'>{category.categoryName}</h2>
                    <p className='text-slate-400 text-sm mt-1'>{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {category.skills.map((skill: (typeof category.skills)[0], skillIdx) => (
                  <div
                    key={skillIdx}
                    className='bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300'
                  >
                    {/* Skill Header */}
                    <div className='mb-6'>
                      <div className='flex items-start justify-between gap-4 mb-3'>
                        <div className='flex-1'>
                          <h3 className='text-xl font-bold text-white'>{skill.name}</h3>
                          {skill.years && (
                            <p className='text-xs text-slate-500 mt-1'>{skill.years}+ years experience</p>
                          )}
                        </div>
                        <span
                          className={`px-3 py-1 bg-linear-to-r ${getProficiencyColor(skill.level)} text-white rounded-full text-xs font-bold shrink-0`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className='text-slate-400 text-sm'>{skill.description}</p>
                    </div>

                    {/* Proficiency Bar */}
                    <div className='mb-6'>
                      <div className='flex justify-between items-center mb-2'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider'>Proficiency</p>
                        <p className='text-xs text-slate-400'>{skill.level}/5</p>
                      </div>
                      <div className='w-full h-2 bg-slate-700/50 rounded-full overflow-hidden'>
                        <div
                          className={`h-full bg-linear-to-r ${getProficiencyColor(skill.level)} transition-all duration-500`}
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Skills Details */}
                    {skill.expertise && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Areas of Expertise</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.expertise.map((exp: string, expIdx) => (
                            <span key={expIdx} className='px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs'>
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {skill.useCases && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Use Cases</p>
                        <ul className='space-y-1'>
                          {skill.useCases.map((useCase: string, useCaseIdx) => (
                            <li key={useCaseIdx} className='text-sm text-slate-300 flex items-start gap-2'>
                              <SiteIcon name='arrowRight' className='mt-1 h-4 w-4 text-blue-400' />
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {skill.libraries && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Key Libraries</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.libraries.map((lib: string, libIdx) => (
                            <span key={libIdx} className='px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs'>
                              {lib}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {skill.techniques && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Key Techniques</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.techniques.slice(0, 4).map((technique: string, techIdx) => (
                            <span key={techIdx} className='px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs'>
                              {technique}
                            </span>
                          ))}
                          {skill.techniques.length > 4 && (
                            <span className='px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs'>
                              +{skill.techniques.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {skill.models && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Key Models</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.models.map((model: string, modelIdx) => (
                            <span
                              key={modelIdx}
                              className='px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs'
                            >
                              {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {skill.databases && (
                      <div className='mb-4'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Databases</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.databases.map((db: string, dbIdx) => (
                            <span key={dbIdx} className='px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs'>
                              {db}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {skill.frameworks && (
                      <div>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-2'>Frameworks</p>
                        <div className='flex flex-wrap gap-2'>
                          {skill.frameworks.map((framework: string, fwIdx) => (
                            <span key={fwIdx} className='px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs'>
                              {framework}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {categoryIdx < skillCategories.length - 1 && (
                <div className='mt-16 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent'></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certification & Recognition */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-12 text-center'>Certifications & Recognition</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {
                title: 'AWS Certified Machine Learning - Specialty',
                issuer: 'Amazon Web Services',
                year: '2023',
                icon: 'chart',
              },
              {
                title: 'Google Cloud Professional Data Engineer',
                issuer: 'Google Cloud',
                year: '2023',
                icon: 'chart',
              },
              {
                title: 'Kaggle Master',
                issuer: 'Kaggle',
                year: '2022',
                icon: 'trophy',
              },
              {
                title: 'Deep Learning Specialization',
                issuer: 'Coursera / Andrew Ng',
                year: '2021',
                icon: 'book',
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className='bg-linear-to-r from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300'>
                    <SiteIcon name={cert.icon as 'chart' | 'trophy' | 'book'} className='h-6 w-6' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-white mb-1'>{cert.title}</h3>
                    <p className='text-sm text-slate-400 mb-2'>{cert.issuer}</p>
                    <p className='text-xs text-slate-500'>{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950 to-cyan-950'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Want to leverage these skills for your project?</h2>
          <p className='text-xl text-slate-300 mb-8'>
            I&apos;m actively looking for challenging projects where I can apply my expertise to deliver exceptional
            results.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              <span className='inline-flex items-center gap-2'>
                <SiteIcon name='message' className='h-4 w-4' /> Get in Touch
              </span>
            </a>
            <a
              href='/projects'
              className='px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300'
            >
              <span className='inline-flex items-center gap-2'>
                <SiteIcon name='rocket' className='h-4 w-4' /> See My Work
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
