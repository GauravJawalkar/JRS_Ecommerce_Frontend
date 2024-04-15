

const Heading = ({ headingName }) => {
    return (
        <>
            <div className='flex items-center justify-center flex-col my-4'>
                <span className="h-1 bg-red-200 max-w-[30%] min-w-[50%] my-4"></span>
                <h1 className='text-[2.8rem] max-sm:text-3xl text-red-600 font-semibold animate-pulse'>{headingName}</h1>
                <span className="h-1 bg-red-200 w-1/2 my-4"></span>
            </div>
        </>
    )
}

export default Heading