import { render, fireEvent } from '@testing-library/react-native';

import { PasswordToggler } from '../index';

describe('PasswordToggler Component', () => {
  // Mock function to track the number of calls to onToggle
  const mockOnToggle = jest.fn();

  // Reset the mock function before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    // Arrange: Render the PasswordToggler component with a visible prop set to true
    const { getByTestId } = render(
      <PasswordToggler visible={true} onToggle={mockOnToggle} />
    );

    // Act: Retrieve the PasswordToggler element by its test ID
    const passwordToggler = getByTestId('passwordToggler');

    // Assert: Verify that the PasswordToggler element is defined
    expect(passwordToggler).toBeDefined();
  });

  test('should call onToggle when pressed and value is true', () => {
    // Arrange: Render the PasswordToggler component with a visible prop set to true
    const { getByTestId } = render(
      <PasswordToggler visible={true} onToggle={mockOnToggle} />
    );

    // Act: Retrieve the PasswordToggler element by its test ID
    const passwordToggler = getByTestId('passwordToggler');

    // Act: Simulate a press event on the PasswordToggler
    fireEvent.press(passwordToggler);

    // Assert: Verify that the onToggle function is called once
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  test('should call onToggle when pressed and value is false', () => {
    // Arrange: Render the PasswordToggler component with a visible prop set to false
    const { getByTestId } = render(
      <PasswordToggler visible={false} onToggle={mockOnToggle} />
    );

    // Act: Retrieve the PasswordToggler element by its test ID
    const passwordToggler = getByTestId('passwordToggler');

    // Act: Simulate a press event on the PasswordToggler
    fireEvent.press(passwordToggler);

    // Assert: Verify that the onToggle function is called once
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
