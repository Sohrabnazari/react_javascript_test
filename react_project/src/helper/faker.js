import { faker } from '@faker-js/faker/locale/fa';
import dayjs from './date';

function generateData(count) {
  let rows = [];
  const columns = [
    { title: 'index', label: 'ردیف', sortable: false },
    { title: 'fullname', label: 'نام و نام خانوادگی', sortable: true },
    { title: 'personnel_code', label: 'شماره پرسنلی', sortable: true },
    { title: 'emploment_date', label: 'تاریخ استخدام', sortable: true },
    { title: 'seniority', label: 'سابقه خدمت', sortable: true },
  ];

  for (let index = 1; index <= count; index++) {
    let fullname = faker.person.fullName();
    let personnel_code = Math.floor(Math.random() * 10_000_000_000); // random 10 digit number
    let date = faker.date.between({
      from: '1990-01-01T00:00:00.000Z',
      to: '2022-01-01T00:00:00.000Z',
    });
    let emploment_date = new Date(date).toLocaleDateString('fa-IR-u-nu-latn');
    let seniority = dayjs(date)
      .fromNow(true)
      .replace(' years', '')
      .replace('a year', "1");
       
    rows.push({
      index,
      fullname,
      personnel_code,
      emploment_date,
      seniority,
    });
  }

  return { columns, rows };
}

export { generateData };