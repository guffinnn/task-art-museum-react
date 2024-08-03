declare module '*.svg' {
  const content: never;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}
