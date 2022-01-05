import { useEffect, useState } from 'react';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';

const useDataFetch = () => {
  const [fetchMainData, setFetchMainData] = useState<any>();
  const [fetchextraData, setFetchextraData] = useState<any>();

  const queryId = useSelector((state: RootState) => state.search.searchOrd);
  console.log('Hook', queryId);
  const mainDataFetch = async () => {
    try {
      console.log('mainDataFetch', queryId);
      const response = await fetch(
        'https://api.edamam.com/api/recipes/v2?type=public&app_key=9aab7352a044f2870a286522b945386f&app_id=2200d214&q=' +
          queryId
      );

      const mainData = await response.json();
      setFetchMainData(mainData);
    } catch (err: any) {
      console.log('There is something wrong!');
    }
  };

  const extraDataFetch = async () => {
    try {
      const response = await fetch(
        fetchMainData._links.next.href
        // "https://api.edamam.com/api/recipes/v2?q=lasagne&app_key=9aab7352a044f2870a286522b945386f&_cont=CHcVQBtNNQphDmgVQntAEX4BYlxtAQUBQWZFA2sRYlNwBAsAUXlSVzMUalQgAVAEQzNJB2AbZ1chBgcPF2cRVzcQNQFyB1YVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=2200d214"
      );

      const extraData = await response.json();
      setFetchextraData(extraData);
    } catch (err: any) {
      console.log('There is something wrong!');
    }
  };

  useEffect(() => {
    mainDataFetch();
  }, [queryId]);

  useEffect(() => {
    extraDataFetch();
  }, []);

  const getMainData = fetchMainData?.hits?.map((item: any) => item.recipe);
  const getExtraData = fetchextraData?.hits?.map((item: any) => item.recipe);
  const totalData = getMainData?.concat(getExtraData);

  return {
    totalData,
    getMainData
  };
};

export default useDataFetch;
