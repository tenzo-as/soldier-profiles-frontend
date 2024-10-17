import { useTranslation } from '@/hooks/useTranslation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Heading from '@/components/atoms/Heading'
import {
    Autocomplete,
    Button,
    Step,
    StepLabel,
    Stepper,
    TextField,
    MobileStepper,
} from '@mui/material'
import IconButton from '@/components/atoms/IconButton'

type FormInput = {
    birthDate: Date
    region: string
    nationality: string
    religion: string

    education: string
    languages: string[]
    skills: string
    medicalContraindications?: string
    fitnessLevel: FitnessLevel
    chronicDiseases?: string
    psychologicalIssues?: string
    badHabits?: string
    disciplineLevel: DisciplineLevel
    behaviorFeatures?: string
    additionalInfo?: string
}

const DraftPage = () => {
    const { t } = useTranslation()

    const { register, handleSubmit } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = data => console.log(data)

    const [activeStep, setActiveStep] = useState<number>(0)

    const steps: Step[] = [
        {
            name: t('Личная информация'),
            fields: [
                {
                    type: StepFieldType.Input,
                    key: 'birthDate',
                    label: t('Когда родился Ваш сын?'),
                },
                {
                    type: StepFieldType.Select,
                    key: 'region',
                    label: t('Из какого города?'),
                    options: [t('Талдыкорган'), t('Алматы'), t('Шымкент')],
                },
                {
                    type: StepFieldType.Select,
                    key: 'nationality',
                    label: t('Национальность'),
                    options: [t('Казах'), t('Русский'), t('Узбек'), t('Уйгур'), t('Турок')],
                },
                {
                    type: StepFieldType.Select,
                    key: 'religion',
                    label: t('Религия'),
                    helperText: t('Это важно для нас, чтобы уважать его культурные традиции'),
                    options: [t('Мусульманин'), t('Христианин'), t('Атеист'), t('Буддист')],
                },
            ],
        },
        {
            name: t('Образование и навыки'),
            fields: [
                {
                    type: StepFieldType.Input,
                    key: 'education',
                    label: t('Образование'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'languages',
                    label: t('Языки'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'skills',
                    label: t('Профессиональные навыки (увлечения)'),
                },
            ],
        },
        {
            name: t('Физическая подготовка'),
            fields: [
                {
                    type: StepFieldType.Input,
                    key: 'medicalContraindications',
                    label: t('Медицинские противопоказания'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'fitnessLevel',
                    label: t('Оценка физической подготовки'),
                },
            ],
        },
        {
            name: t('Здоровье и особенности'),
            fields: [
                {
                    type: StepFieldType.Input,
                    key: 'chronicDiseases',
                    label: t('Хронические заболевания'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'psychologicalIssues',
                    label: t('Психологические травмы или отклонения'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'badHabits',
                    label: t('Вредные привычки'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'disciplineLevel',
                    label: t('Оценка дисциплины'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'behaviorFeatures',
                    label: t('Особенности поведения'),
                },
                {
                    type: StepFieldType.Input,
                    key: 'additionalInfo',
                    label: t('Дополнительная информация'),
                },
            ],
        },
    ]

    const prevStep = () =>
        setActiveStep(prevState => {
            if (prevState <= 0) return 1

            return prevState - 1
        })

    const nextStep = () =>
        setActiveStep(prevState => {
            if (prevState > 3) return 4

            return prevState + 1
        })

    const isFirstStep = activeStep === 0
    const maxSteps = steps.length
    const isLastStep = activeStep === maxSteps - 1

    const saveData = () => {}

    return (
        <div
            className={`grow flex flex-col max-w-xl w-full mx-auto px-6 pt-8 ${mobileStepperStyles.paddingBottomForWrapper}`}
        >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((_, index) => (
                    <Step key={index}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>
            <form
                className={'grow grid gap-4 content-center py-6'}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading variant={'h2'} className={'text-center mb-2 text-[24px] sm:text-2xl'}>
                    {steps[activeStep].name}
                </Heading>
                {steps[activeStep].fields.map(field => {
                    switch (field.type) {
                        case StepFieldType.Input:
                            return (
                                <TextField
                                    key={field.key}
                                    label={field.label}
                                    {...register(field.key)}
                                />
                            )

                        case StepFieldType.Select:
                            return (
                                <Autocomplete
                                    key={field.key}
                                    options={field.options}
                                    renderInput={props => (
                                        <TextField label={field.label} {...props} />
                                    )}
                                    {...register(field.key)}
                                />
                            )

                        case StepFieldType.Date:
                            return (
                                <TextField
                                    key={field.key}
                                    label={field.label}
                                    {...register(field.key)}
                                />
                            )
                    }
                })}
                <div className={'flex items-center gap-4 mt-4'}>
                    {!isFirstStep && (
                        <IconButton onClick={prevStep}>
                            <IoMdArrowRoundBack />
                        </IconButton>
                    )}
                    <Button
                        className={'grow'}
                        variant={'contained'}
                        type={isLastStep ? 'submit' : 'button'}
                        onClick={isLastStep ? saveData : nextStep}
                    >
                        {isLastStep ? t('Отправить данные') : t('Далее')}
                    </Button>
                </div>
            </form>
            <MobileStepper
                variant={'progress'}
                steps={maxSteps}
                position='static'
                activeStep={activeStep}
                className={`fixed inset-x-0 bottom-0 !shadow-[0_0_16px_-1px_rgba(0,0,0,0.1)] !py-0 lg:!hidden ${mobileStepperStyles.height}`}
                LinearProgressProps={{
                    className: 'mx-4 rounded !w-auto grow',
                }}
                backButton={
                    <Button
                        size={'small'}
                        variant={'contained'}
                        className={isLastStep ? 'grayscale-[30%]' : ''}
                        onClick={prevStep}
                        disabled={isFirstStep}
                    >
                        <FaChevronLeft className={'mr-1'} />
                        {t('Назад')}
                    </Button>
                }
                nextButton={
                    <Button
                        size={'small'}
                        variant={'contained'}
                        onClick={nextStep}
                        disabled={isLastStep}
                    >
                        {t('Далее')}
                        <FaChevronRight className={'ml-1'} />
                    </Button>
                }
            />
        </div>
    )
}

export default DraftPage

const mobileStepperStyles = {
    height: 'h-[58px]',
    paddingBottomForWrapper: 'pb-[58px]',
}

enum FitnessLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

enum DisciplineLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

type Step = {
    name: string
    fields: StepField[]
}

type StepField = StepFieldInput | StepFieldSelect | StepFieldDate

enum StepFieldType {
    Input = 'input',
    Select = 'select',
    Date = 'date',
}

type StepFieldInput = {
    type: StepFieldType.Input
    key: keyof FormInput
    label: string
    helperText?: string
}

type StepFieldSelect = {
    type: StepFieldType.Select
    key: keyof FormInput
    label: string
    helperText?: string
    options: string[]
}

type StepFieldDate = {
    type: StepFieldType.Date
    key: keyof FormInput
    label: string
    helperText?: string
}
