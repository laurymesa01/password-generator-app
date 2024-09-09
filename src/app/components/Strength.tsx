export interface StrengthProps {
    label: string;
}

export default function Strength(props: StrengthProps) {
    return (
        <section className="bg-very-dark-grey w-full mt-6 p-4 flex justify-between items-center">
            <p className="p text-grey">{'Strength'.toUpperCase()}</p>
            <div className="flex">
                <h2 className="heading-m text-almost-white">{props.label.toUpperCase()}</h2>
                <div className="ml-2.5 space-x-1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </section>
    );
}