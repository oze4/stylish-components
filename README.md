# stylished-components

Very similar to `styled-components`, but a lot smaller (and with far less features). We contain the core functionality that `styled-components` does, though. If you need a quick way to build out components in a `styled-components` familiar syntax, give us a try!

# Installation

```
npm install --save stylished-components
```

# Notes

We provide es, cjs, and umd modules.  The es build is import by default. In order to import cjs or umd:

```javascript
import stylished from 'stylished-components/lib/stylished-components.cjs.js'; // cjs
import stylished from 'stylished-components/lib/stylished-components.umd.js'; // umd
```

To use media queries, leave off the class name but keep the curly braces, like:

```javascript
const MyComponent = stylished('div')`
  @media (min-width: 900px) {{
    color: orange;
    border: 1px solid blue;
  }}
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
