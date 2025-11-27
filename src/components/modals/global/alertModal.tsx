import { AlertCircle } from "lucide-react";
import { ModalContainer } from "../modalContainer";

interface Props {
    isVisible: boolean;
    onClose: () => void;
    message: string;
}

export const AlertModal = ({ isVisible, onClose, message }: Props) => {
    return (
        isVisible &&
        <ModalContainer>
            <div className="bg-white w-100 py-5 flex items-center justify-center flex-col rounded-lg gap-2">
                <AlertCircle className="w-20 h-20 text-red-500" />
                <p className="text-xl font-medium text-slate-800 my-3">{message}</p>
                <button className="py-2 px-4 bg-red-400 rounded-lg mt-2 text-slate-100 font-medium cursor-pointer" onClick={onClose}>Okay</button>
            </div>
        </ModalContainer>
    );
}