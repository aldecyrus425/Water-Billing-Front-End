import { Button } from "./Button";

interface Props {
    onClose: () => void;
}

export const FormButton = ({onClose} : Props) => {
    return (
        <div className="w-full flex justify-end items-center gap-2 mt-5">
            <Button buttonClick={onClose} label="Cancel" type="button" className="w-50 border border-red-700 text-red-700 bg-white font-bold hover:bg-red-700 hover:text-white" />
            <Button label="Save" type="submit" className="w-50 border border-green-700 text-green-700 bg-white font-bold hover:bg-green-700 hover:text-white" />
        </div>
    );
}