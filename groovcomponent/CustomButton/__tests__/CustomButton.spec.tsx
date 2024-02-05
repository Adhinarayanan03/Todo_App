import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { CustomButton } from '../index';

describe('CustomButton Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    // Arrange: Render the CustomButton component with onPress mock function
    const { getByTestId, getByText } = render(
      <CustomButton onPress={mockOnPress}>Button Text</CustomButton>
    );

    // Act: Retrieve the buttonContainer and childText elements by their test IDs and text content
    const buttonContainer = getByTestId('buttonContainer');
    const childText = getByText('Button Text');

    // Assert: Verify that the buttonContainer is defined and the childText element is truthy
    expect(buttonContainer).toBeDefined();
    expect(childText).toBeTruthy();
  });

  test('disables button when variant is "disabled"', () => {
    // Arrange: Render the CustomButton component with variant set to "disabled"
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress} variant='disabled'>
        Button Text
      </CustomButton>
    );

    // Act: Retrieve the buttonContainer element by its test ID
    const buttonContainer = getByTestId('buttonContainer');
    
    // Act: Simulate a press event on the buttonContainer
    fireEvent.press(buttonContainer);

    // Assert: Verify that the mockOnPress function is not called
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  test('disables button when requesting', async () => {
    // Arrange: Render the CustomButton component with requesting prop set to true
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress} requesting>
        Button Text
      </CustomButton>
    );

    // Act: Retrieve the buttonContainer element by its test ID
    const buttonContainer = getByTestId('buttonContainer');
    
    // Act: Simulate a press event on the buttonContainer
    fireEvent.press(buttonContainer);

    // Assert: Wait for asynchronous actions and verify that the mockOnPress function is not called
    await waitFor(() => {
      expect(mockOnPress).not.toHaveBeenCalled();
    });
  });

  test('renders loader when requesting', async () => {
    // Arrange: Render the CustomButton component with requesting prop set to true
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress} requesting>
        Button Text
      </CustomButton>
    );

    // Act: Retrieve the buttonLoader element by its test ID
    const buttonLoader = getByTestId('buttonLoader');

    // Assert: Verify that the buttonLoader element is truthy
    expect(buttonLoader).toBeTruthy();
  });

  test('calls onPress when button is pressed', () => {
    // Arrange: Render the CustomButton component with onPress mock function
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress}>Button Text</CustomButton>
    );

    // Act: Retrieve the button element by its test ID
    const button = getByTestId('button');
    
    // Act: Simulate a press event on the button
    fireEvent.press(button);

    // Assert: Verify that the mockOnPress function is called once
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
