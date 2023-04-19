import { useAtom } from 'jotai';
import { optionsAtom } from '../constants/atom';
import { useAsyncEffect } from 'ahooks';

export default function useGetOptions() {

    const [options, setOptions] = useAtom(optionsAtom);

    useAsyncEffect(async () => {
        if (!options) {
            await getOptions()
        }
    }, []);

    const getOptions = async () => {
        try {

        } catch (error) {

        }
    }

    return { options, updateOptions: getOptions, setOptions }
}