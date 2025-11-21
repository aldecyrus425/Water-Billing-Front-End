import { X } from "lucide-react"

interface Props {
    title: string;
    description?: string;
    onClose: () => void;
}

export const ModalHeader = ({title, description, onClose}: Props) => {
    return (
        <div className="relative border-b border-slate-300 py-2">
            <div className="">
                <h1 className="font-medium text-2xl">{title}</h1>
                <p className="text-sm font-semibold text-slate-700 italic">{description}</p>
            </div>
            <X className="absolute top-0 right-0 cursor-pointer hover:text-red-600/80" onClick={onClose} />
        </div>
    )
}