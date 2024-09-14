
export interface StrengthProps {
    label: string;
    countCheckedSwitch: any
}



export default function Strength(props: StrengthProps) {

    return (
        <section className="bg-very-dark-grey w-full mt-6 p-4 flex justify-between items-center">
            <p className="p text-grey">{'Strength'.toUpperCase()}</p>
            <div className="flex">
                <h2 className="heading-m text-almost-white mr-4">{props.label.toUpperCase()}</h2>
                <div className="flex items-center gap-2">
                    <div className={`h-[1.75rem] w-[0.625rem] ${
                            props.countCheckedSwitch() < 1
                            ? "border-2 border-almost-white bg-transparent"
                            : props.countCheckedSwitch() < 2
                            ? "bg-red"
                            : props.countCheckedSwitch() < 3
                            ? "bg-orange"
                            : props.countCheckedSwitch() < 4
                            ? "bg-yellow"
                            : "bg-neon-green"
                    } `}>
                    </div>
                    <div className={`h-[1.75rem] w-[0.625rem] ${
                        props.countCheckedSwitch() < 2
                            ? "border-2 border-almost-white bg-transparent"
                            : props.countCheckedSwitch() < 3
                            ? "bg-orange"
                            : props.countCheckedSwitch() < 4
                            ? "bg-yellow"
                            : "bg-neon-green"
                        } `}
                    ></div>
                    <div className={`h-[1.75rem] w-[0.625rem] ${
                        props.countCheckedSwitch() < 3
                            ? "border-2 border-almost-white bg-transparent"
                            : props.countCheckedSwitch() < 4
                            ? "bg-yellow"
                            : "bg-neon-green"
                        } `}
                    ></div>
                    <div className={`h-[1.75rem] w-[0.625rem] ${
                        props.countCheckedSwitch() < 4
                            ? "border-2 border-almost-white bg-transparent"
                            : "bg-neon-green"
                        } `}
                    ></div>
                </div>
            </div>
        </section>
    );
}