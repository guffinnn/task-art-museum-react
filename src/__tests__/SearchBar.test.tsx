import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar should', () => {
  const onSearch = jest.fn();

  test('render input field correctly', () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    expect(input).toBeDefined();
  });

  test('validate input correctly', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.blur(input);

    await waitFor(() => {
      const inputWrapper = screen.getByPlaceholderText(
        'Search art, artist, work...',
      ).parentElement;
      expect(inputWrapper?.getAttribute('error')).toBe(
        'Search term must be at least 3 characters long.',
      );
    });
  });

  test('call onSearch with correct value after debounce', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'art' } });

    await waitFor(
      () => {
        expect(onSearch).toHaveBeenCalledWith('art');
      },
      { timeout: 600 },
    );
  });

  test('do not call onSearch if input is invalid', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'ab' } });

    await waitFor(
      () => {
        expect(onSearch).not.toHaveBeenCalled();
      },
      { timeout: 600 },
    );
  });

  test('submit form correctly', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'artist' } });

    const icon = screen.getByTestId('search-icon');
    fireEvent.click(icon);

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith('artist');
    });
  });
});
