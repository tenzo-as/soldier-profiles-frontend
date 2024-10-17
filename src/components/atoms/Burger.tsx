import clsx from 'clsx'
import Button from './Button'
import { FaCircleArrowRight } from 'react-icons/fa6'

type BurgerProps = {
    isOpen: boolean
    onClick: () => void
}

const Burger = ({ isOpen, onClick }: BurgerProps) => {
    return (
        <Button
            className={'justify-start relative overflow-hidden'}
            onClick={onClick}
            size={'p-[17px] text-[22px]'}
        >
            <p className={'text-xl font-bold leading-[22px]'}>5513</p>
            <div
                className={
                    'absolute right-0 top-0 bottom-0 bg-inherit h-14 w-14 flex items-center justify-center'
                }
            >
                <FaCircleArrowRight
                    className={clsx(
                        'transition-transform duration-300',
                        isOpen ? 'rotate-180' : 'rotate-0',
                    )}
                />
            </div>
        </Button>
    )
}

export default Burger
