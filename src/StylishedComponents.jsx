import React, { Component } from 'react';
import {
  generateNewClassName,
  makeStylesheet,
  getStylesheet,
  cleanStyleString,
  getMediaQueries,
} from './utils';
import cssjs from './css';

const cssParser = new cssjs();

const StylishComponents = (TargetComponent) => (strs, ...exprs) => {
  return class extends Component {
    interpolateStyle() {
      // Check whether or not the user supplied a function
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

      // Remove media query from supplied css string so that
      // we can hoist it outside of the css class we are building
      mediaQueriesArray &&
        mediaQueriesArray.forEach((mq) => (styleSanitized = styleSanitized.replace(mq, '')));

      // Main object which holds the css that will be added to the page
      let finalStyles = `.${className} {${styleSanitized}}`;

      // If media queries were found, parse strings to objects,
      // loop through them, and the rules within them, add our 
      // custom class name to each rule, then add to our main css (but hoisted)
      if (mediaQueriesArray && mediaQueriesArray.length) {
        const parsedMediaQueries = cssParser.parseCSS(mediaQueriesArray.join(''));

        parsedMediaQueries.forEach((parsedMediaQuery) => {
          let mediaQueryStr = `${parsedMediaQuery.selector} { .${className} {`;
          parsedMediaQuery.subStyles.forEach((substyle) => {
            substyle.rules.forEach((rule) => {
              mediaQueryStr += `${rule.directive}: ${rule.value};`;
            });
          });
          mediaQueryStr += '}}';
          finalStyles += mediaQueryStr;
        });
      }

      // Check if we already added a stylesheet, if not, add one
      let existingSheet = getStylesheet();
      if (!existingSheet) {
        makeStylesheet();
        existingSheet = getStylesheet();
      }

      // Add our new class to the element that the user is styling
      this.element.setAttribute('class', className);
      // Add styles to page
      existingSheet.textContent += finalStyles;
    }

    componentDidMount() {
      this.interpolateStyle();
    }

    componentDidUpdate() {
      this.interpolateStyle();
    }

    render() {
      return <TargetComponent {...this.props} ref={(element) => (this.element = element)} />;
    }
  };
};

export default StylishComponents;
