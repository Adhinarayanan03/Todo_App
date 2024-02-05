import { render, waitFor } from '@testing-library/react-native';

import { Height } from '../index';
import { HALF_REGULAR_PADDING_SIZE } from '../../layout';

describe('Height component', () => {
  test('should render with default size', async () => {
    // Arrange: Render the Height component with default size
    const { getByTestId } = render(<Height />);
    
    // Act: Retrieve the height element by its test ID
    const heightElement = getByTestId('height');
    
    // Assert: Verify that the height element is truthy and has the correct style properties
    expect(heightElement).toBeTruthy();
    await waitFor(() => {
      const style = heightElement.props.style;
      expect(style).toEqual({
        height: HALF_REGULAR_PADDING_SIZE,
      });
    });
  });

  test('should render with custom size', async () => {
    // Arrange: Render the Height component with a custom size
    const customSize = 50;
    const { getByTestId } = render(<Height size={customSize} />);
    
    // Act: Retrieve the height element by its test ID
    const heightElement = getByTestId('height');
    
    // Assert: Verify that the height element is truthy and has the correct style properties
    expect(heightElement).toBeTruthy();
    await waitFor(() => {
      const style = heightElement.props.style;
      expect(style).toEqual({
        height: customSize,
      });
    });
  });
});
