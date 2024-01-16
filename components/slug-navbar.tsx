"use client"
import {usePathname} from "next/navigation";
import {Separator} from "~/components/ui/separator";

const SlugNavbar = () => {
    const pathname = usePathname()
    const nav = pathname.substring(1).split(`/`)
    return (
        <div className="fixed inset-x-0 top-0 bg-slate-900 max-w-screen-md mx-auto px-3  md:px-6 py-4">
            <nav className="w-full flex justify-between items-center pb-4">
                <h1 className="font-semibold text-xl text-slate-300 capitalize">
                    {nav[0]}
                </h1>
                <div className="text-gray-50 pr-5">
                    {nav.length > 1 && nav[1]}
                </div>
            </nav>
            <Separator/>
        </div>
    );
};
export default SlugNavbar;