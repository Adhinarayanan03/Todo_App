import { render, fireEvent } from '@testing-library/react-native';

import { Switch } from '../index';

const mockFunction = jest.fn();

describe('Switch component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    // Arrange: Render the Switch component with a label and initial value
    const { getByTestId } = render(<Switch label='Switch Label' value={false} onToggle={mockFunction} />);

    // Assert: Verify that the switch container is truthy
    expect(getByTestId('switch-container')).toBeTruthy();
  });

  test('renders label correctly', () => {
    // Arrange: Render the Switch component with a label and initial value
    const { getByText } = render(<Switch label='Test Label' value={true} onToggle={mockFunction} />);

    // Assert: Verify that the rendered label text is truthy
    expect(getByText('Test Label')).toBeTruthy();
  });

  test('handles toggle correctly', () => {
    // Arrange: Set up a variable to track the switch value
    let switchValue = false;

    // Define a function to handle toggle events and update the switch value
    const handleToggle = (value: boolean) => {
      switchValue = value;
    };

    // Render the Switch component with the handleToggle function
    const { getByTestId } = render(
      <Switch label="Toggle Switch" value={switchValue} onToggle={handleToggle} />
    );

    // Act: Simulate a toggle event to change the switch value to true
    const switchElement = getByTestId('switch');
    fireEvent(switchElement, 'valueChange', true);

    // Assert: Verify that the switch value has been updated to true
    expect(switchValue).toBe(true);

    // Act: Simulate a toggle event to change the switch value back to false
    fireEvent(switchElement, 'valueChange', false);

    // Assert: Verify that the switch value has been updated to false
    expect(switchValue).toBe(false);
  });
});
