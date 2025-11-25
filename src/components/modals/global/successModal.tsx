import { Check } from "lucide-react";
import { ModalContainer } from "../modalContainer";

interface Props {
    isVisible: boolean;
    message: string;
    onClose: () => void;
}

export const SuccessModal = ({isVisible, message, onClose} : Props) => {
    return (
        isVisible && 
        <ModalContainer>
            <div className="p-2 rounded-xl bg-white shadow-2xl transition-all duration-150">
                <div className="inline-flex gap-2 flex-col text-center items-center w-100 p-5">
                    <div className="bg-green-300 p-6 rounded-full w-min">
                        <Check className="w-10 h-10"/>
                    </div>
                    <p className="text-2xl font-medium text-slate-500">Success</p>
                    <span className="text-lg italic text-slate-500">{message}</span>
                    <button className="mt-2 py-1 px-8 text-xl bg-green-300 text-slate-600 font-medium rounded-md cursor-pointer" onClick={onClose}>OK</button>
                </div>
            </div>
        </ModalContainer>
    );
}