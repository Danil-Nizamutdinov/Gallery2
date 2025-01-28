declare module '*.svg?react' {
  import React = require('react');

  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
