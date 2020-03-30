import React, { Component } from 'react';
import {
  generateNewClassName,
  makeStylesheet,
  getStylesheet,
  cleanStyleString,
  getMediaQueries,
  getHoverEffects,
} from './utils';
import CssJs from './css';

const cssParser = new CssJs();

const stylished = TargetComponent => (strs, ...exprs) => {
  return class extends Component {
    componentDidMount() {
      this.init();
    }

    componentDidUpdate() {
      this.init();
    }
    
    init() {
      // Check whether or not the user supplied props (function or not)
      // If so, run the function and add the result to our style object
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === 'function';
        const value = isFunc ? expr(this.props) : expr;
        return result + value + strs[index + 1];
      }, strs[0]);

      // Generate a new/random class name
      const className = generateNewClassName();
      // Remove unecessary characters from style (like \n \r etc..)
      let styleSanitized = cleanStyleString(style);
      // Get media queries from supplied css
      const mediaQueriesArray = getMediaQueries(styleSanitized);
      const hoverEffectsArray = getHoverEffects(styleSanitized);

      // Remove media query from supplied css string so that
      // we can hoist it outside of the css class we are building
      /* eslint-disable no-unused-expressions */
      mediaQueriesArray &&
        mediaQueriesArray.forEach(mq => (styleSanitized = styleSanitized.replace(mq, ''))); 

      hoverEffectsArray &&
        hoverEffectsArray.forEach(he => (styleSanitized = styleSanitized.replace(he, '')));
      /* eslint-enable no-unused-expressions */

      // Main object which holds the css that will be added to the page
      let finalStyles = `.${className} {${styleSanitized}}`;

      // If media queries were found, parse strings to array of objects,
      // loop through them, and the rules within them, add our
      // custom class name to each rule, then add to our main css (but hoisted)
      if (mediaQueriesArray && mediaQueriesArray.length) {
        const parsedMediaQueries = cssParser.parseCSS(mediaQueriesArray.join(''));

        parsedMediaQueries.forEach(parsedMediaQuery => {
          let mediaQueryStr = `${parsedMediaQuery.selector} { .${className} {`;
          parsedMediaQuery.subStyles.forEach(substyle => {
            substyle.rules.forEach(rule => {
              mediaQueryStr += `${rule.directive}: ${rule.value};`;
            });
          });
          mediaQueryStr += '}}';
          finalStyles += `\n${mediaQueryStr}`;
        });
      }

      if (hoverEffectsArray && hoverEffectsArray.length) {
        hoverEffectsArray.forEach(he => {
          finalStyles += he.replace('&:', `.${className}:`);
        })
      }

      // Check if we already added a stylesheet, if not, add one
      let stylesheet = getStylesheet();
      if (!stylesheet) {
        makeStylesheet();
        stylesheet = getStylesheet();
      }

      // Add our new class to the element that the user is styling
      this.element.setAttribute('class', className);
      // Add styles to page
      stylesheet.textContent += finalStyles;
    }

    render() {
      return <TargetComponent {...this.props} ref={element => (this.element = element)} />;
    }
  };
};

export default stylished;
