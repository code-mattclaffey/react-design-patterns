import { courseLevels } from '../content';

export const CourseStructure = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Progressive Learning Path
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Master React patterns step by step, from fundamental concepts to advanced techniques
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {courseLevels.map((level, index) => (
            <div
              key={level.title}
              className="relative bg-blue-900 border-blue-800 border-2 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-800 rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-4">
                  <span className="text-3xl">{level.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {level.title}
                </h3>
                <p className="text-blue-300 font-semibold">{level.subtitle}</p>
              </div>
              
              <ul className="space-y-3">
                {level.patterns.map((pattern) => (
                  <li key={pattern} className="flex items-center text-blue-200">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-base font-medium">{pattern}</span>
                  </li>
                ))}
              </ul>
              
              <div className="absolute top-6 right-6 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-blue-300 font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};