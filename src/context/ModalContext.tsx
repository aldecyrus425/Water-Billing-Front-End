import { createContext, useContext, useState } from "react";
import { SuccessModal } from "../components/modals/global/successModal";
import { AlertModal } from "../components/modals/global/alertModal";

interface ModalContextType {
    showSuccess: (message? : string) => void;
    showAlert: (message? : string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({children} : { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const [isAlertOpen, setAlertOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const showSuccess = (message = "Success") => {
        setMsg(message);
        setIsOpen(true);
    }

    const showAlert = (alertMessage = "Something Wrong") => {
        setAlertMsg(alertMessage);
        setAlertOpen(true);
    }


    return(
        <ModalContext.Provider value={{showSuccess, showAlert}}>
            {children}
            <div>
                <SuccessModal isVisible={isOpen} message={msg} onClose={() => setIsOpen(false)} />
                    <AlertModal isVisible={isAlertOpen} message={alertMsg} onClose={() => setAlertOpen(false)} />
            </div>
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx ) throw new Error("useModal must be used inside ModalProvider");
    return ctx;
}