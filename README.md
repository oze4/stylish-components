# stylished-components

Very similar to `styled-components`, but a lot smaller (and with far less features). We contain the core functionality that `styled-components` does, though. If you need a quick way to build out components in a `styled-components` familiar syntax, give us a try!

# Parameters

We take a single parameter, element name as a string followed by a template literal containing CSS.

See examples below for more info.

# Examples

```javascript
import stylished from 'stylished-components';

const StylishedDiv = stylished('div')`
  height: 200px;
  width: 200px;
  @media (min-width: 900px) {
      width: 100px;
  }
  /* anything CSS goes */
`;

// then use it in React
// ...
return (
    <StyledDiv>
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
