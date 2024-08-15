import { Input } from '@/components/ui/input/input'

import WaveCafe from '@/components/ui/waveCafe'
import Stack from '@/components/layout/stackCafe'

const Home = () => {
    const name = 'Ana'

    return (
        <Stack>
            <h1 className={'text-2xl font-bold'}>Olá {name}, seja bem-vinda</h1>
            <Input type={'text'} size={'full'} placeholder={'Pesquisar'} />
            <WaveCafe />
        </Stack>
    )
}

export default Home
