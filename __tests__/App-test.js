/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Mid from '../comps/mid';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Mid />);
});
