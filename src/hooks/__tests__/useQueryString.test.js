import { renderHook, act } from '@testing-library/react-hooks';
import useQueryString from '../useQueryString';

describe('useQueryString', () => {
  beforeAll(() => {
    delete window.location;
    window.location = {
      href: '',
      search: ''
    };
  });

  afterAll(() => {
    window.location = location;
  });
  
  it('should get query string', () => {
    window.location.href = 'https://example.com/search';
    window.location.search = '?limit=25&page=1';
    const { result } = renderHook(() => useQueryString("limit"));
    const [queryString] = result.current;
    act(() => {
      expect(queryString).toBe('25');
    });
  });
  it('should set query string', () => {
    window.location.href = 'https://example.com/search';
    window.location.search = '?limit=25&page=1';
    const { result } = renderHook(() => useQueryString("limit"));
    const [,setLimitQs] = result.current;
    act(() => {
      setLimitQs('30');
    });
    const [limitQs] = result.current;
    expect(limitQs).toBe('30');
  })
});