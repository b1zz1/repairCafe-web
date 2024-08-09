import React from "react";

const IconCafe = ({ Icon, size="md", background=false, color }) => {
  const sizeClasses = {
    sm: "1rem",
    md: "2rem",
    lg: "5rem",
  }

  return (
      <>
        {background && <Icon size={`${sizeClasses[size]}`} className={"bg-purple.6"}/>}
        {!background && <Icon size={`${sizeClasses[size]}`} color={color} />}
      </>
  )
}

export default IconCafe
