// http://localhost:3000/user/sign-up

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";

import {PiUserFill} from "react-icons/pi";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input/input"
import userSchema from "@/schemas/userSchema";
import Stack from "@/components/layout/stackCafe";
import IconCafe from "@/components/ui/iconCafe";
import WaveCafe from "@/components/ui/waveCafe"

const SignUp = () => {
    const form = useForm({
        resolver: yupResolver(userSchema)
    })
    const {
        register,
        handleSubmit,
        getValues,
        getFieldState,
        formState: { errors }
    } = form

    const [error, setError] = useState(false)
    const onSubmit = async () => {}

    const check = () => {
        errors.name? setError(true) : setError(false)
        console.log(error)
    }

    return (
        <Stack className={"gap-5 w-full"}>
            <h1 className={"text-2xl font-bold"}>Sign up</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-col w-full gap-3"}>
                    <FormField
                        control={form.control}
                        name={"name"}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Nome"
                                        size={"full"}
                                        leftIcon={<IconCafe Icon={PiUserFill} error={error} />}
                                        error={error}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"surname"}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Sobrenome"
                                        leftIcon={<IconCafe Icon={PiUserFill} error={error}/>}
                                        error={error}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button>Sign up</Button>
                </form>
            </Form>
            <Button onClick={check}>Checar erros</Button>
            <WaveCafe />
        </Stack>
    )
}

export default SignUp
