export const CallToAction = () => {
  return (
    <section className="py-24 bg-blue-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Master React Patterns?
        </h2>
        <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
          Join thousands of developers who have leveled up their React skills with our interactive course.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="/storybook" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors duration-200">
            Start Learning Now
          </a>
          
          <a href="https://github.com/code-mattclaffey/react-design-patterns" target="_blank" rel="noreferrer" className="px-8 py-4 border-2 border-blue-800 text-white font-semibold rounded-lg text-lg hover:border-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors duration-200">
            View Course Content
          </a>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-blue-200 font-medium">Design Patterns</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-blue-200 font-medium">Interactive Examples</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-blue-200 font-medium">Free & Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};