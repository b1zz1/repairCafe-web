const Stack = ({ children, className }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            {children}
        </div>
    )
}

export default Stack
