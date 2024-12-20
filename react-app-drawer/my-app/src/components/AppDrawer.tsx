import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import '../AppDrawer.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <nav className="flex flex-col bg-gray-800 h-screen w-64 p-4 text-white">
        <FaBars onClick={() => setIsOpen(!isOpen)} className="text-3xl" />

        <h2 className="text-lg font-bold mb-6">Hylian Shopping</h2>

        <ul className="space-y-4">
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-4">
              <Link to={menu.path} className="text-white">
                {isOpen && (
                  <img
                    src={menu.iconUrl}
                    alt={menu.name}
                    className="w-6 h-6 text-white"
                  />
                )}
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
