import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-code-950 h-screen text-center text-white px-4">
        <h1 className="font-semibold text-4xl md:text-6xl mb-6">
          ⚛️ React Design Patterns
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Welcome to React Design Patterns 👋🏻! <br /> <br /> This
          course educates developers on best practices for writing
          React components, utilizing patterns and providing practical
          guides with real-world examples.
        </p>
        <a
          href="/storybook"
          className="middle none center rounded-lg bg-code-600 py-3 px-8 font-sans text-base font-semibold text-white shadow-md shadow-code-600/20 transition-all hover:shadow-lg hover:shadow-code-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Get started
        </a>
        <p className="text-sm mt-8">
          Made with ❤️ by Matt Claffey @code-mattclaffey
        </p>
      </main>
      <Analytics />
    </>
  );
};

export default App;
