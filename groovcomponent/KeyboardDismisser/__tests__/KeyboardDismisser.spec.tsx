import { Text, TouchableOpacity } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import { KeyboardDismisser } from '../index';

describe('KeyboardDismisser Component', () => {
  test('should render correctly', () => {
    // Arrange: Render the KeyboardDismisser component with a child Text element
    const { getByTestId } = render(
      <KeyboardDismisser>
        <Text testID='childText'>Keyboard Dismisser</Text>
      </KeyboardDismisser>
    );

    // Act: Retrieve the KeyboardDismisser and childText elements by their test IDs
    const keyboardDismisser = getByTestId('keyboardDismisser');
    const childText = getByTestId('childText');

    // Assert: Verify that the KeyboardDismisser element is defined and the childText element is truthy
    expect(keyboardDismisser).toBeDefined();
    expect(childText).toBeTruthy();
  });

  test('should disable scrolling', () => {
    // Arrange: Render the KeyboardDismisser component
    const { getByTestId } = render(
      <KeyboardDismisser>
        <Text testID='childText'>Keyboard Dismisser</Text>
      </KeyboardDismisser>
    );

    // Act: Retrieve the KeyboardDismisser element by its test ID
    const scrollView = getByTestId('keyboardDismisser');

    // Assert: Verify that scrollEnabled prop is false
    expect(scrollView.props.scrollEnabled).toBe(false);
  });

  test('should set keyboardShouldPersistTaps to "handled"', () => {
    // Arrange: Render the KeyboardDismisser component
    const { getByTestId } = render(
      <KeyboardDismisser>
        <Text testID='childText'>Keyboard Dismisser</Text>
      </KeyboardDismisser>
    );

    // Act: Retrieve the KeyboardDismisser element by its test ID
    const scrollView = getByTestId('keyboardDismisser');

    // Assert: Verify that keyboardShouldPersistTaps prop is set to 'handled'
    expect(scrollView.props.keyboardShouldPersistTaps).toBe('handled');
  });

  test('should handle taps on the child components', () => {
    // Arrange: Mock function to track the number of calls to handleTap
    const handleTap = jest.fn();

    // Arrange: Render the KeyboardDismisser component with a TouchableOpacity child
    const { getByTestId } = render(
      <KeyboardDismisser>
        <TouchableOpacity onPress={handleTap}>
          <Text testID='childText'>Keyboard Dismisser</Text>
        </TouchableOpacity>
      </KeyboardDismisser>
    );

    // Act: Retrieve the childText element by its test ID
    const childText = getByTestId('childText');

    // Act: Simulate a press event on the childText element
    fireEvent.press(childText);

    // Assert: Verify that the handleTap function is called once
    expect(handleTap).toHaveBeenCalledTimes(1);
  });
});
