export const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-blue-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-blue-800 mb-4"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-2xl">⚛️</div>
                <div className="text-xl font-bold text-white">
                  React Design Patterns
                </div>
              </div>
              <p className="text-blue-200 mb-4 max-w-md">
                Master React design patterns through interactive
                Pokemon-themed exercises. From fundamentals to
                advanced techniques.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/code-mattclaffey/react-design-patterns"
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View React Design Patterns on GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                Course
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/storybook?path=/docs/introduction-01-welcome--docs"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Bronze Level
                  </a>
                </li>
                <li>
                  <a
                    href="/storybook?path=/docs/introduction-01-welcome--docs"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Silver Level
                  </a>
                </li>
                <li>
                  <a
                    href="/storybook?path=/docs/introduction-01-welcome--docs"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Gold Level
                  </a>
                </li>
                <li>
                  <a
                    href="/storybook?path=/docs/introduction-01-welcome--docs"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    All Patterns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>
              Made with ❤️ by{' '}
              <a
                href="https://github.com/code-mattclaffey"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-1 underline font-semibold hover:text-white transition-colors duration-200"
              >
                @code-mattclaffey
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
