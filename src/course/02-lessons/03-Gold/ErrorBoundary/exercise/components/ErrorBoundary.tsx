import React from 'react';

// 🧑🏻‍💻 1.A Setup the following types
// Props with fallback &  children values both are React.ReactNode | React.ReactNode[]
// State with hasError: boolean
type Props = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

// 🧑🏻‍💻 1.B Create a class component called ErrorBoundary which extends the React.Component interface. The params the interface will take are <Props, State>
// Ew why? It's because functional components do not have all the life cycle methods you need where as a class does.
// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('Error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
