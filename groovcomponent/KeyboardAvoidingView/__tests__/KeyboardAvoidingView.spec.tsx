import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { KeyboardAvoidingView } from '../index';

describe('KeyboardAvoidingView Component', () => {
  test('should render correctly', () => {
    // Arrange: Render the KeyboardAvoidingView component with a child Text element and keyboardOffset prop
    const { getByTestId } = render(
      <KeyboardAvoidingView keyboardOffset={0}>
        <Text testID='childText'>Keyboard Avoiding View</Text>
      </KeyboardAvoidingView>
    );

    // Act: Retrieve the KeyboardAvoidingView and childText elements by their test IDs
    const keyboardAvoidingView = getByTestId('keyboardAvoidingView');
    const childText = getByTestId('childText');

    // Assert: Verify that the KeyboardAvoidingView element is defined and the childText element is truthy
    expect(keyboardAvoidingView).toBeDefined();
    expect(childText).toBeTruthy();
  });
});
