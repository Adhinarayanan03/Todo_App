import { render, waitFor } from '@testing-library/react-native';

import { Width } from '../index';
import { HALF_REGULAR_PADDING_SIZE } from '../../layout';

describe('Width component', () => {
  test('renders with default size', async () => {
    const { getByTestId } = render(<Width />);
    const WidthElement = getByTestId('width');

    expect(WidthElement).toBeTruthy();

    await waitFor(() => {
      const style = WidthElement.props.style;

      expect(style).toEqual({
        width: HALF_REGULAR_PADDING_SIZE,
      });
    });
  });

  test('renders with custom size', async () => {
    const customSize = 50;
    const { getByTestId } = render(<Width size={customSize} />);
    const widthElement = getByTestId('width');

    expect(widthElement).toBeTruthy();

    await waitFor(() => {
      const style = widthElement.props.style;

      expect(style).toEqual({
        width: customSize,
      });
    });
  });
});
