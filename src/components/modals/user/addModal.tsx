import { ModalContainer } from "../modalContainer"
import { InputGroup } from "../../InputGroup"
import { SelectGroup } from "../../SelectGroup"
import type React from "react"
import { ModalHeader } from "../modalHeader"
import { FormButton } from "../../FormButton"

interface Props {
    isVisible: boolean;
    onclose: () => void;
}

export const CreateUserModal = ({ isVisible, onclose }: Props) => {

    const submitUserInformation = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log("Hellow")
    }
    
    return isVisible &&
        <ModalContainer>
            <div className="p-2 rounded-xl bg-white shadow-2xl">
                <ModalHeader onClose={onclose} title="Create User Form" description="This form is for the creation of user"/>
                <form action="#" onSubmit={submitUserInformation}>
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

                    
                    <FormButton onClose={onclose} />
                </form>
            </div>
        </ModalContainer>
}