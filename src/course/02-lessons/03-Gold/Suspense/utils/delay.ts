// Utility function to create a delay promise
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));