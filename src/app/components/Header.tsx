export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">⚛️</div>
            <div className="text-xl font-bold text-white">
              React Design Patterns
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
