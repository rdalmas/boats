import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from '../useDebounce';

jest.useFakeTimers();

it.only('should update value after specified delay', () => {
  const { result, rerender } = renderHook(
    ({ value, delay }) => useDebounce(value, delay),
    { initialProps: { value: '', delay: 500 } }
  );

  expect(result.current).toBe('');
  act(()=>jest.advanceTimersByTime(510));
  expect(result.current).toBe('');

  rerender({ value: 'Hello World', delay: 500 });

  expect(result.current).toBe('');
  
  act(()=>jest.advanceTimersByTime(498));
  expect(result.current).toBe('');

  act(()=>jest.advanceTimersByTime(3));
  expect(result.current).toBe('Hello World');
});