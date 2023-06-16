import { useParams } from 'react-router-dom';
import CountryChart from '../../components/searchar/chart';

function ChartPage() {
  let { id } = useParams();
  return <CountryChart countryCode={id} />;
}

export default ChartPage;
