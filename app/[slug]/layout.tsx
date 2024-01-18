import { ReactNode } from 'react';
import SlugNavbar from '~/components/slug-navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SlugNavbar />
      {children}
    </div>
  );
};

export default Layout;
