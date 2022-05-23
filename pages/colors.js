import React from 'react'

const colors = () => {
  return (
    <div>
        <h1 className='capitalize text-4xl font-medium'>Theme colors</h1>
        <div className='flex space-x-5 max-w-7xl mx-auto flex-wrap'>
            <div className='min-w-max'>
                <h2 className='capitalize text-2xl font-medium'>Primary Colors</h2>
                <div className='bg-primary capitalize px-3 py-4'>
                    <span className='text-primary-contrast'>Primary</span>
                    <div className='mt-2 block mx-5 bg-primary-contrast text-primary rounded-md p-2'>Primary contrast</div>
                </div>
                <div className='bg-primary-light capitalize px-3 py-4'>
                    <span className='text-primary-light-contrast'>Primary light</span>
                    <div className='mt-2 block mx-5 bg-primary-light-contrast text-primary-light rounded-md p-2'>Primary light contrast</div>
                </div>
                <div className='bg-primary-dark capitalize px-3 py-4'>
                    <span className='text-primary-dark-contrast'>Primary dark</span>
                    <div className='mt-2 block mx-5 bg-primary-dark-contrast text-primary-dark rounded-md p-2'>Primary dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>Secondary Colors</h2>
                <div className='bg-secondary capitalize px-3 py-4'>
                    <span className='text-secondary-contrast'>secondary</span>
                    <div className='mt-2 block mx-5 bg-secondary-contrast text-secondary rounded-md p-2'>secondary contrast</div>
                </div>
                <div className='bg-secondary-light capitalize px-3 py-4'>
                    <span className='text-secondary-light-contrast'>secondary light</span>
                    <div className='mt-2 block mx-5 bg-secondary-light-contrast text-secondary-light rounded-md p-2'>secondary light contrast</div>
                </div>
                <div className='bg-secondary-dark capitalize px-3 py-4'>
                    <span className='text-secondary-dark-contrast'>secondary dark</span>
                    <div className='mt-2 block mx-5 bg-secondary-dark-contrast text-secondary-dark rounded-md p-2'>secondary dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>accent Colors</h2>
                <div className='bg-accent capitalize px-3 py-4'>
                    <span className='text-accent-contrast'>accent</span>
                    <div className='mt-2 block mx-5 bg-accent-contrast text-accent rounded-md p-2'>accent contrast</div>
                </div>
                <div className='bg-accent-light capitalize px-3 py-4'>
                    <span className='text-accent-light-contrast'>accent light</span>
                    <div className='mt-2 block mx-5 bg-accent-light-contrast text-accent-light rounded-md p-2'>accent light contrast</div>
                </div>
                <div className='bg-accent-dark capitalize px-3 py-4'>
                    <span className='text-accent-dark-contrast'>accent dark</span>
                    <div className='mt-2 block mx-5 bg-accent-dark-contrast text-accent-dark rounded-md p-2'>accent dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>neutral Colors</h2>
                <div className='bg-neutral capitalize px-3 py-4'>
                    <span className='text-neutral-contrast'>neutral</span>
                    <div className='mt-2 block mx-5 bg-neutral-contrast text-neutral rounded-md p-2'>neutral contrast</div>
                </div>
                <div className='bg-neutral-light capitalize px-3 py-4'>
                    <span className='text-neutral-light-contrast'>neutral light</span>
                    <div className='mt-2 block mx-5 bg-neutral-light-contrast text-neutral-light rounded-md p-2'>neutral light contrast</div>
                </div>
                <div className='bg-neutral-dark capitalize px-3 py-4'>
                    <span className='text-neutral-dark-contrast'>neutral dark</span>
                    <div className='mt-2 block mx-5 bg-neutral-dark-contrast text-neutral-dark rounded-md p-2'>neutral dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>info Colors</h2>
                <div className='bg-info capitalize px-3 py-4'>
                    <span className='text-info-contrast'>info</span>
                    <div className='mt-2 block mx-5 bg-info-contrast text-info rounded-md p-2'>info contrast</div>
                </div>
                <div className='bg-info-light capitalize px-3 py-4'>
                    <span className='text-info-light-contrast'>info light</span>
                    <div className='mt-2 block mx-5 bg-info-light-contrast text-info-light rounded-md p-2'>info light contrast</div>
                </div>
                <div className='bg-info-dark capitalize px-3 py-4'>
                    <span className='text-info-dark-contrast'>info dark</span>
                    <div className='mt-2 block mx-5 bg-info-dark-contrast text-info-dark rounded-md p-2'>info dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>success Colors</h2>
                <div className='bg-success capitalize px-3 py-4'>
                    <span className='text-success-contrast'>success</span>
                    <div className='mt-2 block mx-5 bg-success-contrast text-success rounded-md p-2'>success contrast</div>
                </div>
                <div className='bg-success-light capitalize px-3 py-4'>
                    <span className='text-success-light-contrast'>success light</span>
                    <div className='mt-2 block mx-5 bg-success-light-contrast text-success-light rounded-md p-2'>success light contrast</div>
                </div>
                <div className='bg-success-dark capitalize px-3 py-4'>
                    <span className='text-success-dark-contrast'>success dark</span>
                    <div className='mt-2 block mx-5 bg-success-dark-contrast text-success-dark rounded-md p-2'>success dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>warning Colors</h2>
                <div className='bg-warning capitalize px-3 py-4'>
                    <span className='text-warning-contrast'>warning</span>
                    <div className='mt-2 block mx-5 bg-warning-contrast text-warning rounded-md p-2'>warning contrast</div>
                </div>
                <div className='bg-warning-light capitalize px-3 py-4'>
                    <span className='text-warning-light-contrast'>warning light</span>
                    <div className='mt-2 block mx-5 bg-warning-light-contrast text-warning-light rounded-md p-2'>warning light contrast</div>
                </div>
                <div className='bg-warning-dark capitalize px-3 py-4'>
                    <span className='text-warning-dark-contrast'>warning dark</span>
                    <div className='mt-2 block mx-5 bg-warning-dark-contrast text-warning-dark rounded-md p-2'>warning dark contrast</div>
                </div>
            </div>
            <div className='max-w-max'>
                <h2 className='capitalize text-2xl font-medium'>error Colors</h2>
                <div className='bg-error capitalize px-3 py-4'>
                    <span className='text-error-contrast'>error</span>
                    <div className='mt-2 block mx-5 bg-error-contrast text-error rounded-md p-2'>error contrast</div>
                </div>
                <div className='bg-error-light capitalize px-3 py-4'>
                    <span className='text-error-light-contrast'>error light</span>
                    <div className='mt-2 block mx-5 bg-error-light-contrast text-error-light rounded-md p-2'>error light contrast</div>
                </div>
                <div className='bg-error-dark capitalize px-3 py-4'>
                    <span className='text-error-dark-contrast'>error dark</span>
                    <div className='mt-2 block mx-5 bg-error-dark-contrast text-error-dark rounded-md p-2'>error dark contrast</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default colors