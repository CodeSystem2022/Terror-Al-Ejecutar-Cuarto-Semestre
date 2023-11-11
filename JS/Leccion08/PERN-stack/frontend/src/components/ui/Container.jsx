

export function Container({children, className}) {
    return(
        <div className={"max-w-7x1 px4 mx-aout" + className}{children}></div>
    )
}

export default Container