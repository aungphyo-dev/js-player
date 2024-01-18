'use client';
import { usePathname } from 'next/navigation';
import { Separator } from '~/components/ui/separator';

const SlugNavbar = () => {
  const pathname = usePathname();
  const nav = pathname.substring(1).split(`/`);
  return (
    <div className='fixed inset-x-0 top-0 mx-auto max-w-screen-md bg-slate-900 px-3  py-4 md:px-6'>
      <nav className='flex w-full items-center justify-between pb-4'>
        <h1 className='text-xl font-semibold capitalize text-slate-300'>
          {nav[0]}
        </h1>
        <div className='pr-5 text-gray-50'>{nav.length > 1 && nav[1]}</div>
      </nav>
      <Separator />
    </div>
  );
};
export default SlugNavbar;
