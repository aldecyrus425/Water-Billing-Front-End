import { FormButton } from "../../FormButton";
import { InputGroup } from "../../InputGroup";
import { SelectGroup } from "../../SelectGroup";
import { ModalContainer } from "../modalContainer";
import { ModalHeader } from "../modalHeader";

interface Props {
    isVisible: boolean;
    onClose: () => void;

}

export const CreateConsumerModal = ({ isVisible, onClose }: Props) => {
    return (
        isVisible &&
        <ModalContainer>
            <div className="p-2 rounded-xl bg-white shadow-2xl">
                <ModalHeader onClose={onClose} title="Create Consumer Form" description="This form is for the creation of consumer" />
                <form action="">
                    <p className="font-medium text-slate-700 italic mt-2">User Information</p>
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

                    <p className="font-medium text-slate-700 italic mt-2 border-t border-slate-500">Consumer Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-2">
                        <InputGroup label="Account Number" placeholder="" isDisabled className="text-slate-500" value="123891371289" />
                        <InputGroup label="Meter Number" placeholder="Please Enter Meter Number"  />
                        <SelectGroup label="Classification" options={[
                            { label: "Residential", value: "Residential" },
                            { label: "Commercial", value: "Commercial" }
                        ]} />
                        <InputGroup label="Address" placeholder="Please Enter Address" />
                    </div>
                    <FormButton onClose={onClose} />
                </form>
            </div>
        </ModalContainer>
    );
}