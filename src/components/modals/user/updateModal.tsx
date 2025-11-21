import { FormButton } from "../../FormButton";
import { InputGroup } from "../../InputGroup";
import { SelectGroup } from "../../SelectGroup";
import { ModalContainer } from "../modalContainer";
import { ModalHeader } from "../modalHeader";

interface Props {
    onClose: () => void;
    isVisible: boolean;
}

export const UpdateUserModal = ({ onClose, isVisible }: Props) => {

    const updateData = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Update");
    }

    return (
        isVisible &&
        <ModalContainer>
            <div className="p-2 rounded-xl bg-white shadow-2xl">
                <ModalHeader onClose={onClose} title="Update User Information" description="This form is for the updating user information." />
                <form onSubmit={updateData}>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-2">
                        <InputGroup label="Full Name" placeholder="Please Enter Fullname" />
                        <SelectGroup label="Gender" options={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" }
                        ]} />
                        <InputGroup label="Address" placeholder="Please Enter Address" />
                        <InputGroup label="Email" type="email" placeholder="Please Enter Email" />
                        <InputGroup label="Password" type="password" placeholder="Please Create Password" />
                        <InputGroup label="Password" type="password" placeholder="Please Create Password" />
                        <InputGroup label="Phone" placeholder="Please Enter Phone Number" />
                        <InputGroup label="Profile Picture" type="file" placeholder="" />
                    </div>
                    <FormButton onClose={onClose} />
                </form>
            </div>
        </ModalContainer>
    );
}