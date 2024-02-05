import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';

import { SafeAreaBottom } from '../index';

describe('SafeAreaBottom Component', () => {
  test('should render correctly', () => {
    // Arrange: Render the SafeAreaBottom component with empty children
    const { getByTestId } = render(
      <SafeAreaBottom>
        <Text>Safe area bottom view</Text>
      </SafeAreaBottom>
    );

    // Act: Retrieve the SafeAreaBottom element by its test ID
    const safeAreaBottomElement = getByTestId('safeAreaBottom');

    // Assert: Verify that the SafeAreaBottom element is truthy
    expect(safeAreaBottomElement).toBeTruthy();
  });

  test('should render children correctly', async () => {
    // Arrange: Render the SafeAreaBottom component with a child Text element
    const { getByTestId } = render(
      <SafeAreaBottom>
        <Text testID='childText'>Hello World</Text>
      </SafeAreaBottom>
    );

    // Act: Retrieve the childText element by its test ID
    const childText = getByTestId('childText');

    // Assert: Verify that the childText element is truthy
    expect(childText).toBeTruthy();
  });

  test('should apply custom background color', async () => {
    // Arrange: Render the SafeAreaBottom component with a custom background color
    const customBackgroundColor = 'blue';
    const { getByTestId } = render(
      <SafeAreaBottom backgroundColor={customBackgroundColor}>
        <Text>Safe area bottom view</Text>
      </SafeAreaBottom>
    );

    // Act: Retrieve the SafeAreaBottom element by its test ID
    const safeAreaBottomElement = getByTestId('safeAreaBottom');

    // Assert: Verify that the custom background color is applied correctly
    await waitFor(() => {
      const style = safeAreaBottomElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: customBackgroundColor
      });
    });
  });

  test('should apply edges prop with expected value', () => {
    // Arrange: Define the expected edges configuration
    const expectedEdges = { bottom: 'additive', left: 'additive', right: 'additive', top: 'off' };

    // Act: Render the SafeAreaBottom component with children
    const { getByTestId } = render(
      <SafeAreaBottom>
        <Text>Safe area bottom view</Text>
      </SafeAreaBottom>
    );

    // Act: Retrieve the SafeAreaBottom element by its test ID
    const safeAreaBottomElement = getByTestId('safeAreaBottom');

    // Assert: Verify that the edges prop is set to the expected value
    expect(safeAreaBottomElement.props.edges).toEqual(expectedEdges);
  });
});
