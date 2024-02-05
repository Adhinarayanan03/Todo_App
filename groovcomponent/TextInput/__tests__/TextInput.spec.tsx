import { Text } from 'react-native';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { TextInput } from '../index';

describe('TextInput Component', () => {
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();
  const mockOnTextInputChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    // Arrange: Render the TextInput component with a label
    const { getByTestId } = render(<TextInput label='Username' />);
    const inputContainer = getByTestId('inputContainer');

    // Assert: Verify that the inputContainer element is defined
    expect(inputContainer).toBeDefined();
  });

  test('calls onFocus when input is focused', () => {
    // Arrange: Render the TextInput component with onFocus mock function
    const { getByTestId } = render(
      <TextInput label='Username' onFocus={mockOnFocus} />
    );
    const inputField = getByTestId('textInput');

    // Act: Simulate a focus event on the inputField
    fireEvent(inputField, 'focus');

    // Assert: Verify that the mockOnFocus function is called once
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });

  test('should call onBlur when input is blurred', () => {
    // Arrange: Render the TextInput component with onBlur mock function
    const { getByTestId } = render(
      <TextInput label='Username' onBlur={mockOnBlur} />
    );
    const inputField = getByTestId('textInput');

    // Act: Simulate a blur event on the inputField
    fireEvent(inputField, 'blur');

    // Assert: Verify that the mockOnBlur function is called once
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  test('should clear input when clear button is pressed', async () => {
    // Arrange: Render the TextInput component with initial text value and onChangeText mock function
    const { getByTestId } = render(
      <TextInput label='Username' textInputProps={{ value: 'test', onChangeText: mockOnTextInputChange }} errorText='Invalid username' />
    );
    const clearButton = getByTestId('clearButton');
    const textInput = getByTestId('textInput');

    // Act: Simulate a press event on the clearButton
    fireEvent.press(clearButton);

    // Assert: Wait for asynchronous actions and verify that the mockOnTextInputChange function is called with an empty string
    await waitFor(() => {
      expect(textInput.props.onChangeText).toHaveBeenCalledWith('');
    });
  });

  test('should focus input when onChangeText function is not present in textInputProps', async () => {
    // Arrange: Create a mock inputRef object with a focus method
    const inputRefMock = {
      current: {
        focus: jest.fn(),
      },
    }

    // Arrange: Render the TextInput component with inputRef and initial text value
    const { getByTestId } = render(
      <TextInput
        label='Username'
        onFocus={mockOnFocus}
        // @ts-expect-error: inputRef
        inputRef={inputRefMock}
        textInputProps={{ value: 'test' }}
        errorText='Invalid username'
      />
    );
    const clearButton = getByTestId('clearButton');

    // Act: Simulate a press event on the clearButton
    fireEvent.press(clearButton);

    // Assert: Wait for asynchronous actions and verify that the inputRefMock's focus method is called
    await waitFor(() => {
      expect(inputRefMock.current.focus).toHaveBeenCalled();
    });
  });

  test('calls onChangeText when input text changes', () => {
    // Arrange: Render the TextInput component with onChangeText mock function
    const { getByTestId } = render(
      <TextInput
        label='Username'
        textInputProps={{ onChangeText: mockOnTextInputChange }}
      />
    );
    const inputField = getByTestId('textInput');

    // Act: Simulate a text change event on the inputField
    fireEvent.changeText(inputField, 'new text');

    // Assert: Verify that the mockOnTextInputChange function is called with the correct text value
    expect(mockOnTextInputChange).toHaveBeenCalledWith('new text');
  });

  test('should render error message when errorText is provided', () => {
    // Arrange: Render the TextInput component with errorText
    const { getByText } = render(
      <TextInput label='Username' errorText='Invalid username' />
    );
    const errorMessage = getByText('Invalid username');

    // Assert: Verify that the errorMessage element is truthy
    expect(errorMessage).toBeTruthy();
  });

  test('should disable input when disabled prop is true', () => {
    // Arrange: Render the TextInput component with disabled prop set to true
    const { getByTestId } = render(
      <TextInput label='Username' disabled />
    );
    const inputField = getByTestId('textInput');

    // Assert: Verify that the inputField is not editable
    expect(inputField.props.editable).toBe(false);
  });

  test('should apply custom styles to text input', () => {
    // Arrange: Render the TextInput component with custom text input styles
    const customStyles = { color: 'red', fontSize: 18 };
    const { getByTestId } = render(
      <TextInput
        label='Username'
        textInputStyles={customStyles}
      />
    );
    const inputField = getByTestId('textInput');

    // Assert: Verify that the inputField styles include the custom styles
    expect(inputField.props.style).toEqual(expect.arrayContaining([customStyles]));
  });

  test('should render underlined style when isUnderlined is true', () => {
    // Arrange: Render the TextInput component with isUnderlined set to true
    const { getByTestId } = render(
      <TextInput label='Username' isUnderlined />
    );
    const inputContainer = getByTestId('inputContainer');

    // Assert: Verify that the inputContainer styles include the underlined style
    expect(inputContainer.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderWidth: 0, borderBottomWidth: 1 }),
      ])
    );
  });

  test('should render borderColor when passed', () => {
    // Arrange: Render the TextInput component with a specified borderColor
    const { getByTestId } = render(
      <TextInput label='Username' borderColor='red' />
    );
    const inputContainer = getByTestId('inputContainer');

    // Assert: Verify that the inputContainer styles include the
    expect(inputContainer.props.style).toContainEqual({
      borderColor: 'red'
    });
  });

  test('should correctly render right component', () => {
    // Arrange: Render the TextInput component with a custom right component
    const { getByTestId } = render(
      <TextInput renderRightComponent={<Text testID='rightComponent'>Right Component</Text>} />
    );
    const rightComponentElement = getByTestId('rightComponent');

    // Assert: Verify that the rightComponentElement is truthy
    expect(rightComponentElement).toBeTruthy();
  });
});
