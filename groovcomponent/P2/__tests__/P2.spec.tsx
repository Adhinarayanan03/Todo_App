import { render, waitFor } from '@testing-library/react-native';

import { P2 } from '../index';
import { MEDIUM_FONT, REGULAR_FONT } from '../../fonts';

describe('P2 component', () => {
  test('should render correctly with default props', async () => {
    // Arrange: Render the P2 component with default text
    const { getByText } = render(<P2>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element is truthy and has the correct style properties
    expect(textElement).toBeTruthy();
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontSize: 16,
        fontFamily: REGULAR_FONT,
      });
    });
  });

  test('should apply center style when center prop is true', async () => {
    // Arrange: Render the P2 component with the text and center prop set to true
    const { getByText } = render(<P2 center>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textAlign: 'center',
      });
    });
  });

  test('should apply bold style when bold prop is true', async () => {
    // Arrange: Render the P2 component with the text and bold prop set to true
    const { getByText } = render(<P2 bold>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontFamily: MEDIUM_FONT,
      });
    });
  });

  test('should apply capitalize style when capitalize prop is true', async () => {
    // Arrange: Render the P2 component with the text and uppercase prop set to true
    const { getByText } = render(<P2 capitalize>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textTransform: 'capitalize',
      });
    });
  });

  test('should apply custom color style', async () => {
    // Arrange: Render the P2 component with the text and color prop set to 'red'
    const { getByText } = render(<P2 color='red'>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        color: 'red',
      });
    });
  });

  test('should apply uppercase style when uppercase prop is true', async () => {
    // Arrange: Render the P2 component with the text and uppercase prop set to true
    const { getByText } = render(<P2 uppercase>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textTransform: 'uppercase',
      });
    });
  });

  test('should apply custom text styles', async () => {
    // Arrange: Render the P2 component with the text and additional text styles
    const { getByText } = render(<P2 textStyles={{ backgroundColor: 'red' }}>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

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
    // Arrange: Render the P2 component with the text and additional text styles
    const { getByText } = render(<P2 numberOfLines={mockNumberOfLines}>P2 Text</P2>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('P2 Text');

    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const numberOfLinesProps = textElement.props.numberOfLines;
      expect(numberOfLinesProps).toBe(mockNumberOfLines);
    });
  });
});
