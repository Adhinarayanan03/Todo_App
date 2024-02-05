import { render, waitFor } from '@testing-library/react-native';

import { H1 } from '../index';
import { MEDIUM_FONT } from '../../fonts';

describe('H1 component', () => {
  test('should render correctly with default props', async () => {
    // Arrange: Render the H1 component with default text
    const { getByText } = render(<H1>H1 Text</H1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H1 Text');

    // Assert: Verify that the rendered text has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontSize: 32,
        fontFamily: MEDIUM_FONT,
      });
    });
  });

  test('should apply center style when center prop is true', async () => {
    // Arrange: Render the H1 component with the text and center prop set to true
    const { getByText } = render(<H1 center>H1 Text</H1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H1 Text');

    // Assert: Verify that the rendered text has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textAlign: 'center',
      });
    });
  });

  test('should apply custom color style', async () => {
    // Arrange: Render the H1 component with the text and color prop set to 'red'
    const { getByText } = render(<H1 color='red'>H1 Text</H1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H1 Text');

    // Assert: Verify that the rendered text has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        color: 'red',
      });
    });
  });

  test('should apply additional textStyles', async () => {
    // Arrange: Render the H1 component with the text and additional text styles
    const { getByText } = render(<H1 textStyles={{ textDecorationLine: 'underline' }}>H1 Text</H1>);

    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H1 Text');

    // Assert: Verify that the rendered text has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textDecorationLine: 'underline',
      });
    });
  });
});
