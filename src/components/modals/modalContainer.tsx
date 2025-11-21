interface Props {
    children: React.ReactNode
}

export const ModalContainer = ({children} : Props) => {
    return (
        <div className="w-screen h-screen bg-slate-600/30 backdrop-blur-sm absolute top-0 right-0 flex items-center justify-center">
            {children}
        </div>
    )
}