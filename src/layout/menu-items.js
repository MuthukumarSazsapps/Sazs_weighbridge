import { AiFillHome } from 'react-icons/ai';
import { PiTableDuotone, PiFolderNotchDuotone } from 'react-icons/pi';

export const MenuItems = [
  {
    name: 'Pages',
  },
  {
    name: 'Home',
    href: '/',
    icon: <AiFillHome />,
  },
  {
    name: 'Customer Management',
    href: '#',
    icon: <PiTableDuotone />,
    dropdownItems: [
      {
        name: 'Create Customer',
        href: '/customer/create',
        icon: <PiFolderNotchDuotone />,
      },
      {
        name: 'Customers List',
        href: '/list/customers',
        icon: <PiFolderNotchDuotone />,
      },
      {
        name: 'Customer Statement',
        href: '/customer/report',
        icon: <PiFolderNotchDuotone />,
      },
      {
        name: 'Outstanding Customer',
        href: '/customer/outstanding',
        icon: <PiFolderNotchDuotone />,
      },
    ],
  },
  // Add other menu items here
];