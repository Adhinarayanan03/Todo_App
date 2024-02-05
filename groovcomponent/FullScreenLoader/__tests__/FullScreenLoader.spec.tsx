import { render } from '@testing-library/react-native';

import { FullScreenLoader } from '../index';

describe('FullScreenLoader component', () => {
  test('should render correctly when "show" prop is true', () => {
    // Arrange: Render the FullScreenLoader component with the "show" prop set to true
    const { getByTestId } = render(<FullScreenLoader show={true} />);
    
    // Act: Retrieve elements by their test IDs, 
    // specifically the fullScreenLoaderContainer and activityIndicator
    const container = getByTestId('fullScreenLoaderContainer');
    const activityIndicator = getByTestId('activityIndicator');
    
    // Assert: Ensure that the fullScreenLoaderContainer and activityIndicator elements are truthy
    expect(container).toBeTruthy();
    expect(activityIndicator).toBeTruthy();
  });

  test('should not render when "show" prop is false', () => {
    // Arrange: Render the FullScreenLoader component with the "show" prop set to false
    const { queryByTestId } = render(<FullScreenLoader show={false} />);
    
    // Act: Retrieve the fullScreenLoaderContainer element by its test ID
    const container = queryByTestId('fullScreenLoaderContainer');
    
    // Assert: Confirm that the fullScreenLoaderContainer element is null
    expect(container).toBeNull();
  });

  test('should memoize correctly when "show" prop remains true', () => {
    // Arrange: Initial render of the FullScreenLoader component with the "show" prop set to true
    const { rerender } = render(<FullScreenLoader show={true} />);
    
    // Act: Re-render the component twice with the "show" prop set to true
    const firstRender = rerender(<FullScreenLoader show={true} />);
    const secondRender = rerender(<FullScreenLoader show={true} />);
    
    // Assert: Verify that the result of the first re-render is equal to the result of the second re-render
    expect(firstRender).toBe(secondRender);
  });
});
