const Flex = ({ children, className }) => {
    return (
        <div className={`flex flex-col w-full items-center justify-center ${className}`}>
            {children}
        </div>
    )
}

export default Flex
