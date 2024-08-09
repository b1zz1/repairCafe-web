import Image from "next/image"

import Wave from "/public/assets/wave.svg"
import WaveAlt from "/public/assets/wave-alt.svg"

const WaveCafe = ({ variant = "default" }) => {
  return (
    <>
      {variant === "default" && (
        <Image
          src={Wave}
          alt="Wave"
          className="fixed left-0 bottom-0 pointer-events-none select-none w-full"
          height="auto"
          width="auto"
        />
      )}
      {variant === "alt" && (
        <Image
          src={WaveAlt}
          alt="Wave"
          className="fixed left-0 bottom-0 pointer-events-none select-none w-full"
          height="auto"
          width="auto"
        />
      )}
    </>
  )
}

export default WaveCafe
