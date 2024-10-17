import { useTranslation } from '@/hooks/useTranslation'

const DraftHeader = () => {
    const { t } = useTranslation()

    return (
        <div
            className={
                'w-full h-14 fixed top-0 left-0 right-0 bg-fuchsia-400 shadow-md flex items-center justify-center z-10'
            }
        >
            <img
                className={'object-center object-cover rounded-[4px] w-9 h-9'}
                src={'/media/logo/ulttyq-ulan.svg'}
                alt={t('Национальная гвардия')}
            />
            <span
                className={
                    'ml-4 whitespace-nowrap font-medium text-white text-[20px] tracking-widest'
                }
            >
                ULTTYQ ULAN
            </span>
        </div>
    )
}

export default DraftHeader
