import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';

import { SafeAreaHeader } from '../index';

describe('SafeAreaHeader Component', () => {
  test('should render correctly', () => {
    // Arrange: Render the SafeAreaHeader component with empty children
    const { getByTestId } = render(
      <SafeAreaHeader>
        <Text>Safe area header view</Text>
      </SafeAreaHeader>
    );

    // Act: Retrieve the SafeAreaHeader element by its test ID
    const safeAreaHeaderElement = getByTestId('safeAreaHeader');

    // Assert: Verify that the SafeAreaHeader element is truthy
    expect(safeAreaHeaderElement).toBeTruthy();
  });

  test('should render children correctly', async () => {
    // Arrange: Render the SafeAreaHeader component with a child Text element
    const { getByTestId } = render(
      <SafeAreaHeader>
        <Text testID='childText'>Hello World</Text>
      </SafeAreaHeader>
    );

    // Act: Retrieve the childText element by its test ID
    const childText = getByTestId('childText');

    // Assert: Verify that the childText element is truthy
    expect(childText).toBeTruthy();
  });

  test('should apply custom background color', async () => {
    // Arrange: Render the SafeAreaHeader component with a custom background color
    const customBackgroundColor = 'blue';
    const { getByTestId } = render(
      <SafeAreaHeader backgroundColor={customBackgroundColor}>
       <Text>Safe area header view</Text>
      </SafeAreaHeader>
    );

    // Act: Retrieve the SafeAreaHeader element by its test ID
    const safeAreaHeaderElement = getByTestId('safeAreaHeader');

    // Assert: Verify that the custom background color is applied correctly
    await waitFor(() => {
      const style = safeAreaHeaderElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: customBackgroundColor
      });
    });
  });

  test('should apply edges prop with expected value', () => {
    // Arrange: Define the expected edges configuration
    const expectedEdges = { bottom: 'off', left: 'additive', right: 'additive', top: 'additive' };

    // Act: Render the SafeAreaHeader component with children
    const { getByTestId } = render(
      <SafeAreaHeader>
        <Text>Safe area header view</Text>
      </SafeAreaHeader>
    );

    // Act: Retrieve the SafeAreaHeader element by its test ID
    const safeAreaHeaderElement = getByTestId('safeAreaHeader');

    // Assert: Verify that the edges prop is set to the expected value
    expect(safeAreaHeaderElement.props.edges).toEqual(expectedEdges);
  });
});
