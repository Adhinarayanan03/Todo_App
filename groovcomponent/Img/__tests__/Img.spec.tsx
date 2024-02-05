import { render, waitFor } from '@testing-library/react-native';

import { Img } from '../index';

describe('Img component', () => {
  const mockImageSource = { uri: 'https://mongrov.com/image.jpg' };

  test('should render with default props', async () => {
    // Arrange: Render the Img component with the mock image source
    const { getByTestId } = render(<Img source={mockImageSource} />);
    
    // Act: Retrieve elements by their test IDs
    const imgContainer = getByTestId('imgContainer');
    const imgElement = getByTestId('imgElement');
    
    // Assert: Verify that imgContainer and imgElement are truthy and have the correct style properties
    expect(imgContainer).toBeTruthy();
    expect(imgElement).toBeTruthy();
    await waitFor(() => {
      const style = imgContainer.props.style;
      
      expect(style).toContainEqual({
        width: '100%',
        aspectRatio: 1,
      });
    });
  });

  test('should render with custom width and aspectRatio', async () => {
    // Arrange: Render the Img component with a custom width and aspectRatio
    const customWidth = 200;
    const customAspectRatio = 1.5;
    const { getByTestId } = render(
      <Img source={mockImageSource} width={customWidth} aspectRatio={customAspectRatio} />
    );
    
    // Act: Retrieve elements by their test IDs
    const imgContainer = getByTestId('imgContainer');
    const imgElement = getByTestId('imgElement');
    
    // Assert: Verify that imgContainer and imgElement are truthy and have the correct style properties
    expect(imgContainer).toBeTruthy();
    expect(imgElement).toBeTruthy();
    await waitFor(() => {
      const style = imgContainer.props.style;
      
      expect(style).toContainEqual({
        width: customWidth,
        aspectRatio: customAspectRatio,
      });
    });
  });

  test('should render with custom resizeMode', async () => {
    // Arrange: Render the Img component with a custom resizeMode
    const customResizeMode = 'cover';
    const { getByTestId } = render(
      <Img source={mockImageSource} resizeMode={customResizeMode} />
    );
    
    // Act: Retrieve the imgElement by its test ID
    const imgElement = getByTestId('imgElement');
    
    // Assert: Verify that imgElement is truthy and has the correct resizeMode property
    expect(imgElement).toBeTruthy();
    await waitFor(() => {
      const resizeModeProps = imgElement.props.resizeMode;
      expect(resizeModeProps).toBe(customResizeMode);
    });
  });
});
