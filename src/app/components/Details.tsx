import Checkbox from "./Checkbox";

export default function Details() {
    return (
        <section className="bg-dark-grey w-full mt-6 p-4">
            <div className="flex items-center justify-between">
                <p className="p">Character Length</p>
                <h1 className="heading-l text-neon-green">10</h1>
            </div>
            <div className="w-full bg-very-dark-grey rounded-full h-1 mb-4 mt-4">
                <div className="bg-neon-green h-1 rounded-full w-[50%]" ></div>
            </div>
            <ul className="space-y-2 mt-4">
                <li>
                    <Checkbox id="1" label="Include Uppercase Letters"/>
                </li>
                <li>
                    <Checkbox id="2" label="Include Lowercase Letters"/>
                </li>
                <li>
                    <Checkbox id="3" label="Include Numbers"/>
                </li>
                <li >
                    <Checkbox id="4" label="Include Symbols"/>
                </li>
            </ul>
            <button className="button mt-6 flex items-center justify-center">
                Generate
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
                </svg>
            </button>
        </section>
    );
}