import { createContext, useContext, useState } from "react";
import { SuccessModal } from "../components/modals/global/successModal";

interface ModalContextType {
    showSuccess: (message? : string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({children} : { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const showSuccess = (message = "Success") => {
        setMsg(message);
        setIsOpen(true);
    }

    return(
        <ModalContext.Provider value={{showSuccess}}>
            {children}
            <div>
                <SuccessModal isVisible={isOpen} message={msg} onClose={() => setIsOpen(false)} />
            </div>
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx ) throw new Error("useModal must be used inside ModalProvider");
    return ctx;
}