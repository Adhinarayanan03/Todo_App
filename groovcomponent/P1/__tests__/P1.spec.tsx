import { render, waitFor } from '@testing-library/react-native';

import { P1 } from '../index';
import { MEDIUM_FONT, REGULAR_FONT } from '../../fonts';

describe('P1 component', () => {
  test('should render correctly with default props', async () => {
    // Arrange: Render the P1 component with default text
    const { getByText } = render(<P1>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element is truthy and has the correct style properties
    expect(textElement).toBeTruthy();
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontSize: 18,
        fontFamily: REGULAR_FONT,
      });
    });
  });

  test('should apply center style when center prop is true', async () => {
    // Arrange: Render the P1 component with the text and center prop set to true
    const { getByText } = render(<P1 center>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textAlign: 'center',
      });
    });
  });

  test('should apply bold style when bold prop is true', async () => {
    // Arrange: Render the P1 component with the text and bold prop set to true
    const { getByText } = render(<P1 bold>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontFamily: MEDIUM_FONT,
      });
    });
  });

  test('should apply custom color style', async () => {
    // Arrange: Render the P1 component with the text and color prop set to 'red'
    const { getByText } = render(<P1 color='red'>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        color: 'red',
      });
    });
  });

  test('should apply capitalize style when capitalize prop is true', async () => {
    // Arrange: Render the P1 component with the text and uppercase prop set to true
    const { getByText } = render(<P1 capitalize>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textTransform: 'capitalize',
      });
    });
  });

  test('should apply uppercase style when uppercase prop is true', async () => {
    // Arrange: Render the P1 component with the text and uppercase prop set to true
    const { getByText } = render(<P1 uppercase>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textTransform: 'uppercase',
      });
    });
  });

  test('should apply custom text styles', async () => {
    // Arrange: Render the P1 component with the text and additional text styles
    const { getByText } = render(<P1 textStyles={{ backgroundColor: 'red' }}>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: 'red'
      });
    });
  });

  test('should apply numberOfLines prop correctly', async () => {
    const mockNumberOfLines = 10;
    // Arrange: Render the P1 component with the text and additional text styles
    const { getByText } = render(<P1 numberOfLines={mockNumberOfLines}>P1 Text</P1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P1 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const numberOfLinesProps = textElement.props.numberOfLines;
      expect(numberOfLinesProps).toBe(mockNumberOfLines);
    });
  });
});
