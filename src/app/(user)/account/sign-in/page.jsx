import { Input } from "@/components/ui/input/input";
import Stack from "@/components/layout/stack";
import WaveCafe from "@/components/ui/waveCafe";
import IconCafe from "@/components/ui/iconCafe";

import {
PiEnvelopeSimple,
PiLockSimple,
} from "react-icons/pi";

const SignIn = () => {
    return (
        <>
            <Stack className={"gap-3"}>
                <h1 className={"text-2xl font-bold"}>Faça seu login</h1>
                <Input type={"text"} size={"full"} placeholder={"Email"} error={false} leftIcon={<IconCafe Icon={ PiEnvelopeSimple } color={"purple"} error={false} />} />
                <Input type={"password"} size={"full"} placeholder={"Senha"} error={false} leftIcon={<IconCafe Icon={ PiLockSimple } color={"purple"} error={false} />} />
            </Stack>
            <WaveCafe />
        </>
    )
}

export default SignIn
