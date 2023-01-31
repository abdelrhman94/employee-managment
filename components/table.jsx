import Image from 'next/image';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import data from '../database/data.json';
import TableRow from './tableRow';

export default function Table() {
  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Name</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Email</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Salary</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Birthday</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-gray-200'>
        {data.map((obj, i) => (
          <TableRow {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}


