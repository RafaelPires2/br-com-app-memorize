// // Place here global interface and variable that should be available globally
declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.gif' {
  const value: any;
  export default value;
}

declare module '*.ttf' {
  const value: any;
  export default value;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}
