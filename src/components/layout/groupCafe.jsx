const Group = ({ children, className }) => {
    return (
        <div className={`flex flex-row justify-center items-center ${className}`}>
            {children}
        </div>
    )
}

export default Group
