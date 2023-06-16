import { generateData } from '../../helper/faker';
import Table from '../../components/table';

const { rows, columns } = generateData(200);

function Page() {
  return (
		<Table data={rows} columns={columns} />
  );
}

export default Page;
