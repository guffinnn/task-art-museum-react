import { SearchBar } from '@components/SearchBar';
import { ERROR } from '@constants/errors';
import { DEBOUNCE_DELAY } from '@constants/values';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('SearchBar should', () => {
  const onSearch = jest.fn();
  const setLoading = jest.fn();

  test('render input field correctly', () => {
    render(<SearchBar onSearch={onSearch} setLoading={setLoading} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    expect(input).toBeDefined();
  });

  test('validate input correctly', async () => {
    render(<SearchBar onSearch={onSearch} setLoading={setLoading} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.blur(input);

    await waitFor(() => {
      const inputWrapper = screen.getByPlaceholderText(
        'Search art, artist, work...',
      ).parentElement;
      expect(inputWrapper?.getAttribute('error')).toBe(ERROR.MIN_LENGTH);
    });
  });

  test('call onSearch with correct value after debounce', async () => {
    render(<SearchBar onSearch={onSearch} setLoading={setLoading} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'art' } });

    await waitFor(
      () => {
        expect(onSearch).toHaveBeenCalledWith('art');
      },
      { timeout: DEBOUNCE_DELAY * 2 },
    );
  });

  test('do not call onSearch if input is invalid', async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} setLoading={setLoading} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'ab' } });

    await waitFor(() => {
      expect(onSearch).not.toHaveBeenCalled();
    });
  });

  test('submit form correctly', async () => {
    render(<SearchBar onSearch={onSearch} setLoading={setLoading} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'artist' } });

    const icon = screen.getByTestId('search-icon');
    fireEvent.click(icon);

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith('artist');
    });
  });
});
