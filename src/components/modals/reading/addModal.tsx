import { FormButton } from "../../FormButton";
import { InputGroup } from "../../InputGroup";
import { ModalContainer } from "../modalContainer";
import { ModalHeader } from "../modalHeader";

interface Props {
    isVisible: boolean
    onClose: () => void
}

export const CreateReadingModal = ({ isVisible, onClose }: Props) => {

    return (
        isVisible &&
        <ModalContainer>
            <div className="p-2 rounded-xl bg-white shadow-2xl">
                <ModalHeader title="Create Reading" description="This modal is for creation of reading" onClose={onClose} />

                <form action="" className="flex gap-3 items-end">
                    <InputGroup label="Meter Number" placeholder="Please Enter Meter Number" className="w-full"/>
                    <button type="submit" className="w-50 h-10 border border-red-700 rounded-lg cursor-pointer text-red-700 bg-white font-bold hover:bg-red-700 hover:text-white">Search</button>
                </form>
                <form action="">

                    <p className="font-medium text-slate-700 italic mt-2">User Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-2">
                        <InputGroup label="Full Name" placeholder="" isDisabled />
                        <InputGroup label="Address" placeholder="" isDisabled />
                        <InputGroup label="Email" type="email" placeholder="" isDisabled />
                        <InputGroup label="Phone" placeholder="" isDisabled />
                    </div>

                    <p className="font-medium text-slate-700 italic mt-2 border-t border-slate-500">Reading Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-2">
                        <InputGroup label="Account Number" placeholder="" isDisabled value="123891371289" />
                        <InputGroup label="Meter Number" placeholder="" isDisabled />
                        <InputGroup label="Previous Reading" placeholder="" value="1234" isDisabled />
                        <InputGroup label="Current Reading" placeholder="Please Enter Current Reading" />  
                    </div>
                    <FormButton onClose={onClose} />
                </form>
            </div>
        </ModalContainer>
    );
}