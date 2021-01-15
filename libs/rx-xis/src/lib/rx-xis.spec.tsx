import React from 'react';
import { render } from '@testing-library/react';

import RxXis from './rx-xis';

describe(' RxXis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RxXis />);
    expect(baseElement).toBeTruthy();
  });
});
