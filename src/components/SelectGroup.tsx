interface Option {
    label: string;
    value: string | number;
}


interface Props {
    options: Option[];
    label: string;
    className?: string;
}

export const SelectGroup = ({options, label, className} : Props) => {
    return (
        <div className="w-full">
            <label htmlFor="" className="text-gray-700 text-sm font-medium">{label}</label>
            <select name="gender" id="gender" className={`mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.label}</option>
                    );
                })}
                
            </select>
        </div>
    );
}

