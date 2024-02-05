import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { TextLink } from '../index';
import { PRIMARY_COLOR } from '../../colors';

const onPressMock = jest.fn();

describe('TextLink component', () => {
  test('should render correctly with default color', async () => {
    // Arrange: Render the P3 component with default text
    const { getByText } = render(<TextLink onPress={onPressMock}>Text Link</TextLink>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('Text Link');

    // Assert: Verify that the text element is truthy and has the correct style properties
    expect(textElement).toBeTruthy();
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        color: PRIMARY_COLOR
      });
    });
  });

  test('should call onPress callback when clicked', () => {
    const { getByText } = render(<TextLink onPress={onPressMock}>Click me</TextLink>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('Click me');

    // Act: Trigger a press event on the text element
    fireEvent.press(textElement);

    // Assert: Verify that the onPress callback is called once
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('should render onPress callback when clicked', () => {
    const { getByText } = render(<TextLink onPress={onPressMock}>Click me</TextLink>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('Click me');

    // Act: Trigger a press event on the text element
    fireEvent.press(textElement);

    // Assert: Verify that the onPress callback is called
    expect(onPressMock).toHaveBeenCalled();
  });
});
