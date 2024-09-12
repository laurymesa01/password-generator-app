export interface CheckboxProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    id: string;
    label: string;
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <section className="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" className="checkbox peer"/>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className="absolute hidden peer-checked:block stroke-white outline-none pointer-events-none ml-0.5">
                        <path className="w-4 h-4" stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
                    </svg>
                    <label className="ms-2 p text-almost-white">{props.label}</label>
        </section>
    );
}