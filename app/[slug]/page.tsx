import {Fragment} from "react";
import {getQuestions} from "~/lib/query";
import {notFound} from "next/navigation";
import {Button} from "~/components/ui/button";
import Link from "next/link";

const Page = async ({params:{slug}}:{params:{slug:string}}) => {
    const questions = getQuestions(slug)
    if (!questions){
        notFound()
    }
    return (
        <div className="w-full py-[85px] h-full grid gap-y-3">
            {
                questions.map(q=>(
                    <Fragment key={q.slug}>
                        <Button variant="link" className="w-full justify-start">
                            <Link href={`/${slug}/${q.slug}`} className="w-full text-start text-slate-300">
                                {q.slug}
                            </Link>
                        </Button>
                    </Fragment>
                ))
            }
        </div>
    );
};

export default Page;