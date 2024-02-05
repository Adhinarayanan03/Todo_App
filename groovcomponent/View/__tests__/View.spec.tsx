import { render, waitFor } from '@testing-library/react-native';

import { View } from '../index';

describe('View component', () => {
  test('should render correctly', async () => {
    // Arrange: Render the View component with a test ID
    const { getByTestId } = render(<View testID='view' />);

    // Act: Retrieve the View element by its test ID
    const viewElement = getByTestId('view');

    // Assert: Verify that the View element is truthy
    expect(viewElement).toBeTruthy();
  });

  it('should apply layout styles correctly for row configuration', async () => {
    // Arrange: Render the View component with row, hCenter, and vCenter props
    const { getByTestId } = render(
      <View testID='view' row hCenter vCenter>
        <></>
      </View>
    );

    // Act: Retrieve the rowViewElement by its test ID
    const rowViewElement = getByTestId('view');

    // Assert: Verify that the layout styles are applied correctly
    await waitFor(() => {
      const style = rowViewElement.props.style;
      expect(style).toContainEqual({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      });
    });
  });

  it('should apply horizontal padding correctly', async () => {
    // Arrange: Render the View component with hPadding prop
    const { getByTestId } = render(
      <View testID='horizontal-padding-view' hPadding={12}>
        <></>
      </View>
    );

    // Act: Retrieve the horizontalPaddingView by its test ID
    const horizontalPaddingView = getByTestId('horizontal-padding-view');

    // Assert: Verify that horizontal padding is applied correctly
    await waitFor(() => {
      const style = horizontalPaddingView.props.style;
      expect(style).toContainEqual({
        paddingHorizontal: 12,
      });
    });
  });

  it('should apply vertical padding correctly', async () => {
    // Arrange: Render the View component with vPadding prop
    const { getByTestId } = render(
      <View testID='vertical-padding-view' vPadding={12}>
        <></>
      </View>
    );

    // Act: Retrieve the verticalPaddingView by its test ID
    const verticalPaddingView = getByTestId('vertical-padding-view');

    // Assert: Verify that vertical padding is applied correctly
    await waitFor(() => {
      const style = verticalPaddingView.props.style;
      expect(style).toContainEqual({
        paddingVertical: 12,
      });
    });
  });

  it('should apply flex prop correctly', async () => {
    // Arrange: Render the View component with height prop
    const { getByTestId } = render(
      <View testID='view' flex={1}>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('view');

    // Assert: Verify that height is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        flex: 1,
      });
    });
  });

  it('should apply hCenter prop correctly when row is not provided', async () => {
    // Arrange: Render the View component with hCenter prop
    const { getByTestId } = render(
      <View testID='view' hCenter>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('view');

    // Assert: Verify that hCenter is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        alignItems: 'center'
      });
    });
  });

  it('should apply vCenter prop correctly when row is not provided', async () => {
    // Arrange: Render the View component with height prop
    const { getByTestId } = render(
      <View testID='view' vCenter>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('view');

    // Assert: Verify that vCenter is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        justifyContent: 'center'
      });
    });
  });

  it('should apply backgroundColor prop correctly when row is not provided', async () => {
    // Arrange: Render the View component with height prop
    const { getByTestId } = render(
      <View testID='view' backgroundColor='red'>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('view');

    // Assert: Verify that backgroundColor is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        backgroundColor: 'red'
      });
    });
  });

  it('should apply height prop correctly', async () => {
    // Arrange: Render the View component with height prop
    const { getByTestId } = render(
      <View testID='height-view' height={100}>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('height-view');

    // Assert: Verify that height is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        height: 100,
      });
    });
  });

  it('should apply width prop correctly', async () => {
    // Arrange: Render the View component with width prop
    const { getByTestId } = render(
      <View testID='width-view' width={100}>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('width-view');

    // Assert: Verify that width is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        width: 100,
      });
    });
  });

  it('should apply borderColor prop correctly', async () => {
    // Arrange: Render the View component with borderColor prop
    const { getByTestId } = render(
      <View testID='border-color-view' borderColor={'red'}>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('border-color-view');

    // Assert: Verify that borderColor is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        borderColor: 'red',
      });
    });
  });

  it('should apply spaceBetween prop correctly', async () => {
    // Arrange: Render the View component with spaceBetween prop
    const { getByTestId } = render(
      <View testID='space-between-view' spaceBetween>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('space-between-view');

    // Assert: Verify that spaceBetween is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        justifyContent: 'space-between',
      });
    });
  });

  it('should apply borderRadius correctly', async () => {
    // Arrange: Render the View component with borderRadius prop
    const { getByTestId } = render(
      <View testID='border-radius-view' borderRadius={10}>
        <></>
      </View>
    );

    // Act: Retrieve the viewElement by its test ID
    const viewElement = getByTestId('border-radius-view');

    // Assert: Verify that borderRadius is applied correctly
    await waitFor(() => {
      const style = viewElement.props.style;
      expect(style).toContainEqual({
        borderRadius: 10,
      });
    });
  });

  it('should apply custom styles', async () => {
    // Arrange: Render the View component with custom styles
    const { getByTestId } = render(
      <View testID='custom-style-view' style={{ borderWidth: 2, borderColor: 'green' }}>
        <></>
      </View>
    );

    // Act: Retrieve the customStyleViewElement by its test ID
    const customStyleViewElement = getByTestId('custom-style-view');

    // Assert: Verify that custom styles are applied correctly
    await waitFor(() => {
      const style = customStyleViewElement.props.style;
      expect(style).toContainEqual({
        borderWidth: 2,
        borderColor: 'green',
      });
    });
  });
});
