declare module '*.svg?svgr' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const IS_DEV: boolean;
