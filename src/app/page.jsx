// http://localhost:3000

import React from 'react'

import { Input } from '@/components/ui/input/input'

import WaveCafe from '@/components/ui/waveCafe'
import Flex from '@/components/layout/flexCafe'
import Stack from '@/components/layout/stackCafe'
import Group from '@/components/layout/groupCafe'
import IconCafe from '@/components/ui/iconCafe'
import { PiMagnifyingGlass, PiFunnel, PiPaperPlaneRight } from 'react-icons/pi'
import {Button} from "@/components/ui/button";

const Home = () => {
    const name = 'Ana'

    return (
        <Stack className={'w-full'}>
            <Stack className={'gap-md'}>
                <h1 className={"invisible md:visible"}>
                    <p>Olá {name},</p>O que vamos reparar hoje?
                </h1>
                <Group className={'w-full gap-3'}>
                    <Input
                        type={'text'}
                        size={'full'}
                        placeholder={'Pesquisar'}
                        leftIcon={
                            <IconCafe Icon={PiMagnifyingGlass} color={'purple'} />
                        }
                        rightIcon={
                            <IconCafe Icon={PiFunnel} color={'purple'} />
                        }
                    />
                    <span>
                        <Button size={"icon"}><IconCafe Icon={PiPaperPlaneRight} /></Button>
                    </span>
                </Group>
            </Stack>
            <WaveCafe />
        </Stack>
    )
}

export default Home
