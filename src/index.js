import React from 'react';
import ReactDOM from 'react-dom'
// import DesignSystem from './app'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/theme/globalStyles';
import theme from './components/theme/defaultTheme';
import { Text } from './components/typography';

function App(){
  const headings=[1,2,3,4,5,6];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {
        headings.map((heading,key) => (
          <Text
            variant={`H${heading}`}
            key={key}>
            This is text
          </Text>
        ))
      }
      <Text variant="paragraph" as="p">This is a paragraph. We can add a bunch of data here.</Text>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));