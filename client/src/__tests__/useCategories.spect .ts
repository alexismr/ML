import { act, renderHook } from '@testing-library/react-hooks';
import useCategories from '../hooks/useCategories';


describe('<useCategories />', () => {
  test('it should has initial state ', () => {
    const { result } = renderHook(() => useCategories())
    expect(result.current[0]).toEqual([]);
  });

  test('it should  change value  when add new array ', () => {
    const { result } = renderHook(() => useCategories())
    const changevalue = result.current[1];
    const ArrayTest = ["alexis", "montana"];
    act(() => {
      changevalue(ArrayTest)
    });

    expect(result.current[0]).toEqual(ArrayTest);
  });



  test('it should has the same value for different subscribers ', () => {
    const { result } = renderHook(() => useCategories())
    const { result:listener } = renderHook(() => useCategories())
    const changevalue = result.current[1];
    const ArrayTest = ["compras", "ventas"];
    act(() => {
      changevalue(ArrayTest)
    });
   expect(result.current[0]).toEqual(ArrayTest);
   expect(listener.current[0]).toEqual(ArrayTest);
  });



})