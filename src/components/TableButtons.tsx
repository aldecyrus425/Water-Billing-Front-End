import { Eye, Pen, Trash } from "lucide-react";

interface Props {
    view?: () => void;
    edit?: () => void;
    remove?: () => void;
}

export const TableButton = ({view, edit, remove}: Props) => {
    return (
        <td className='p-4 inline-flex gap-5 w-50 justify-center'>
            <Eye onClick={view} className='text-green-400 hover:text-green-700 cursor-pointer' />
            <Pen onClick={edit} className='text-blue-400 hover:text-blue-700 cursor-pointer' />
            <Trash onClick={remove} className='text-red-400 hover:text-red-700 cursor-pointer' />
        </td>
    );
}