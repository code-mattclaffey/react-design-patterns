export const Hero = () => {
  return (
    <section className="bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
              🎮 Pokemon-Themed Learning
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Master React Design Patterns
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Learn advanced React patterns through interactive
            Pokemon-themed exercises. From fundamentals to
            expert-level techniques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/storybook?path=/docs/introduction-01-welcome--docs"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors duration-200"
            >
              Start Learning
            </a>

            <a
              href="https://github.com/code-mattclaffey/react-design-patterns"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border-2 border-blue-800 text-white font-semibold rounded-lg text-lg hover:border-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors duration-200"
            >
              View on GitHub
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">15+ Patterns</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="font-medium">
                Interactive Exercises
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="font-medium">Real-world Examples</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
