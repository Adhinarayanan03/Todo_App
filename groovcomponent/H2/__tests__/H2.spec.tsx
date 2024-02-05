import { render, waitFor } from '@testing-library/react-native';

import { H2 } from '../index';
import { MEDIUM_FONT, REGULAR_FONT } from '../../fonts';

describe('H2 component', () => {
  test('should render correctly with default props', async () => {
    // Arrange: Render the H2 component with default text
    const { getByText } = render(<H2>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element is truthy and has the correct style properties
    expect(textElement).toBeTruthy();
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontSize: 22,
        fontFamily: REGULAR_FONT,
      });
    });
  });

  test('should apply center style when center prop is true', async () => {
    // Arrange: Render the H2 component with the text and center prop set to true
    const { getByText } = render(<H2 center>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textAlign: 'center',
      });
    });
  });

  test('should apply bold style when bold prop is true', async () => {
    // Arrange: Render the H2 component with the text and bold prop set to true
    const { getByText } = render(<H2 bold>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        fontFamily: MEDIUM_FONT,
      });
    });
  });

  test('should apply custom color style', async () => {
    // Arrange: Render the H2 component with the text and color prop set to 'red'
    const { getByText } = render(<H2 color='red'>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        color: 'red',
      });
    });
  });

  test('should apply uppercase style when uppercase prop is true', async () => {
    // Arrange: Render the H2 component with the text and uppercase prop set to true
    const { getByText } = render(<H2 uppercase>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        textTransform: 'uppercase',
      });
    });
  });

  test('should apply custom text styles', async () => {
    // Arrange: Render the H2 component with the text and additional text styles
    const { getByText } = render(<H2 textStyles={{ backgroundColor: 'red' }}>H2 Text</H2>);
    
    // Act: Retrieve the text element by searching for the specific text content
    const textElement = getByText('H2 Text');
    
    // Assert: Verify that the text element has the correct style properties
    await waitFor(() => {
      const style = textElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: 'red'
      });
    });
  });
});
