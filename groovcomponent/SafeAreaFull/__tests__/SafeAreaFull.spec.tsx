import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';

import { SafeAreaFull } from '../index';

describe('SafeAreaFull Component', () => {
  test('should render correctly', () => {
    // Arrange: Render the SafeAreaFull component with empty children
    const { getByTestId } = render(
      <SafeAreaFull>
        <Text>Safe area full view</Text>
      </SafeAreaFull>
    );

    // Act: Retrieve the SafeAreaFull element by its test ID
    const safeAreaFullElement = getByTestId('safeAreaFull');

    // Assert: Verify that the SafeAreaFull element is truthy
    expect(safeAreaFullElement).toBeTruthy();
  });

  test('should render children correctly', async () => {
    // Arrange: Render the SafeAreaFull component with a child Text element
    const { getByTestId } = render(
      <SafeAreaFull>
        <Text testID='childText'>Hello World</Text>
      </SafeAreaFull>
    );

    // Act: Retrieve the childText element by its test ID
    const childText = getByTestId('childText');

    // Assert: Verify that the childText element is truthy
    expect(childText).toBeTruthy();
  });

  test('should apply custom background color', async () => {
    // Arrange: Render the SafeAreaFull component with a custom background color
    const customBackgroundColor = 'blue';
    const { getByTestId } = render(
      <SafeAreaFull backgroundColor={customBackgroundColor}>
        <Text>Safe area full view</Text>
      </SafeAreaFull>
    );

    // Act: Retrieve the SafeAreaFull element by its test ID
    const safeAreaFullElement = getByTestId('safeAreaFull');

    // Assert: Verify that the custom background color is applied correctly
    await waitFor(() => {
      const style = safeAreaFullElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: customBackgroundColor
      });
    });
  });

  test('should apply edges prop with expected value', () => {
    // Arrange: Define the expected edges configuration
    const expectedEdges = { bottom: 'additive', left: 'additive', right: 'additive', top: 'additive' };

    // Act: Render the SafeAreaFull component with children
    const { getByTestId } = render(
      <SafeAreaFull>
        <Text>Safe area bottom view</Text>
      </SafeAreaFull>
    );

    // Act: Retrieve the SafeAreaFull element by its test ID
    const safeAreaFullElement = getByTestId('safeAreaFull');

    // Assert: Verify that the edges prop is set to the expected value
    expect(safeAreaFullElement.props.edges).toEqual(expectedEdges);
  });
});
