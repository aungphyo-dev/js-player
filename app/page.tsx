import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='prose-quoteless prose prose-gray prose-invert pb-7'>
      <div className='flex w-full items-center justify-between'>
        <Image
          alt={'javascript'}
          height={'100'}
          width={'100'}
          src='/javascript.png'
        />
        <Link href={'/javascript'}>{`Let's try this`}</Link>
      </div>
      <h1>JavaScript Questions</h1>
      <h5 className='font-semibold text-neutral-300'>[!NOTE]</h5>
      {`This repo was created in 2019 and the questions provided here are therefore based on the JavaScript syntax
                and behaviour at that time. Since JavaScript is a constantly evolving language, there are newer language
                features that are not covered by the questions here.`}
      <p>
        {`From basic to advanced: test how well you know JavaScript, refresh your knowledge a bit, or prepare for
                    your coding interview! :muscle: :rocket: I update this repo regularly with new questions. I added the
                    answers in the **collapsed sections** below the questions, simply click on them to expand it. It's just
                    for fun, good luck! :heart:
                    Feel free to reach out to me! 😊`}
        <a href='https://www.instagram.com/theavocoder'>Instagram</a>{' '}
        <a href='https://www.twitter.com/lydiahallie'>Twitter</a>{' '}
        <a href='https://www.linkedin.com/in/lydia-hallie'>LinkedIn</a>{' '}
        <a href='https://www.lydiahallie.io/'>Blog</a>
        {`| Feel free to use them in a project! 😃 I would _really_ appreciate a reference to this repo, I create
                    the questions and explanations (yes I'm sad lol) and the community helps me so much to maintain and
                    improve it! 💪🏼 Thank you and have fun!`}
      </p>
    </div>
  );
};

export default Page;
