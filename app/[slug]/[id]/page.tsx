import { getQuestions } from '~/lib/query';
import { notFound } from 'next/navigation';
import { MdxViewer } from '~/components/mdx-viewer';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import Link from 'next/link';

const Page = ({
  params: { id },
  searchParams: { maxLength },
}: {
  params: { id: number };
  searchParams: { maxLength: number };
}) => {
  const question = getQuestions('javascript').find(
    (q) => q.slug == id.toString()
  );
  if (!question) {
    notFound();
  }
  return (
    <div className='prose-quoteless prose prose-invert flex min-h-screen flex-col pt-[65px]'>
      <MdxViewer source={question.content} />
      <div className='mt-auto flex w-full items-center justify-between py-8'>
        <Link href={`/javascript/${+id === 1 ? 1 : +id - 1}`}>
          <Button variant='ghost' size='icon'>
            <ChevronLeftIcon className='h-4 w-4' />
          </Button>
        </Link>
        <Link href={id == maxLength ? `/javascript` : `/javascript/${+id + 1}`}>
          <Button variant='ghost' size='icon'>
            <ChevronRightIcon className='h-4 w-4' />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
