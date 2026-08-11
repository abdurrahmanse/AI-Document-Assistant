import React from 'react'

export function CoreCompetenciesSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>Core Competencies</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              title: 'Machine Learning',
              skills: ['Supervised Learning', 'Unsupervised Learning', 'Ensemble Methods', 'Neural Networks'],
            },
            {
              title: 'Data Engineering',
              skills: ['ETL Pipelines', 'Data Warehousing', 'Stream Processing', 'Big Data'],
            },
            {
              title: 'Cloud & DevOps',
              skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
            },
            {
              title: 'Leadership',
              skills: ['Team Management', 'Mentoring', 'Project Leadership', 'Stakeholder Management'],
            },
          ].map((competency, idx) => (
            <div
              key={idx}
              className='bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'
            >
              <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                
                {competency.title}
              </h3>
              <div className='space-y-2'>
                {competency.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className='flex items-center gap-3'>
                    
                    <p className='text-slate-300'>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
