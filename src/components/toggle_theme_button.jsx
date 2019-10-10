import React from 'react';

import { ThemeContext, themes } from '../contexts/theme_context';


export default function ToggleThemedButton(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {value => (
          <button
            style={{
              backgroundColor: value.background,
              color: value.foreground
            }}
            onClick={props.onClick}
          >
            toggle theme
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
