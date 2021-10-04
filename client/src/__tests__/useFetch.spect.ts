import { renderHook } from '@testing-library/react-hooks';
import { Api } from '../../config/endpoint';
import useFetch from '../hooks/useFetch';


describe('<useCategories />', () => {

    test('validate initial state ', ()=>{
        const { result } = renderHook(() => useFetch({ api:Api,  method: "get", url:'falso' }))   
        expect(result.current.error).toEqual("");
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.response).toEqual(null);
      
      });

});



