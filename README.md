[![npm version](https://badge.fury.io/js/stylished-components.svg)](https://badge.fury.io/js/stylished-components)

# stylished-components

Very similar to `styled-components`, but a lot smaller (and with far less features). We contain the core functionality that `styled-components` does, though. If you need a quick way to build out components in a `styled-components` familiar syntax, give us a try!

# Installation

```
npm install --save stylished-components
```

# Notes

By default, we only include es module with our bundle.  We do provide the ability to easily bundle cjs and umd by forking this repo and running `npm run build` (or `yarn`)

 - #### Media Queries

To use media queries, leave off the class name but keep the curly braces, like:

```javascript
const MediaQueryDiv = stylished('div')`
  @media (min-width: 900px) {{
    color: orange;
    border: 1px solid blue;
  }}
`;
```

 - #### Hover

To use hover, place an `&` before hover, like:

```javascript
const HoverDiv = stylished('div')`
  background-color: blue;
  &:hover {
    background-color: green;
  }
`;
```

# Parameters

We take a single parameter, element name as a string followed by a template literal containing CSS.

See examples below for more info.

# Examples

```javascript
import stylished from 'stylished-components';

const StylishedDiv = stylished('div')`
  /* Can even pass in props! */
  height: ${({ height = '400px' }) => height};
  width: ${({ width = '400px' }) => width};
  background-color: gray;

  /* Supports media queries! (with a special syntax) */
  /* Media queries must be surrounded by {{ }} like below */
  @media (min-width: 900px) {{
      border: 1px solid black;
  }}

  /* Can use hover, too! */
  /* Just use the & sign, like so */
  &:hover {
    color: green;
  }

  /* ~almost~ anything CSS goes! */
`;

// then use it in React
// ...
return (
    <StyledDiv height="200px" width="200px" otherProps={true}>
    // ...
    </StyledDiv>
);
// ...
```

```javascript
// argument can be any element, as a string
const MyComponent = stylished('p')`
  /* CSS here */
`;

const MyComponent = stylished('h1')`
  /* CSS here */
`;

const MyComponent = stylished('li')`
  /* CSS here */
`;
```

# NPM Scripts

 - `npm test`
   - launches test app (built with create-react-app) from `__tests__/app`
     - *browser does not auto-open by default*
   - then runs `cypress run`

 - `npm run build`
   - prompts you for which module types to bundle before bundling

 - `npm run rollup`
   - bundles all module types without prompting (esm, cjs, umd)

 - `npm run cyp`
   - starts dev server and opens cypress without automatically testing
