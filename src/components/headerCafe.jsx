import { Button } from '@/components/ui/button/button'

import Group from '@/components/layout/groupCafe'
import IconCafe from '@/components/ui/iconCafe'

import { PiUser } from 'react-icons/pi'

const HeaderCafe = () => {
    return (
        <header className={'fixed inset-0 flex w-full h-20 px-8 bg-white.1'}>
            <Group className={'flex justify-between w-full'}>
                <Button variant="ghost">Café Reparo</Button>
                <Button variant="default" size={'icon'}>
                    <IconCafe Icon={PiUser} size={'sm'} />
                </Button>
            </Group>
        </header>
    )
}

export default HeaderCafe
