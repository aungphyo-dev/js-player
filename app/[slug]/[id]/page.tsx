import {getQuestions} from "~/lib/query";
import {notFound} from "next/navigation";
import {MdxViewer} from "~/components/mdx-viewer";

const Page = ({params: {id}}: { params: { id: number } }) => {
    const question = getQuestions("javascript").find(q => q.slug == id.toString())
    if (!question) {
        notFound()
    }
    return (
        <div className="py-[65px] prose-quoteless prose prose-invert">
            <MdxViewer source={question.content}/>
        </div>
    );
};

export default Page;