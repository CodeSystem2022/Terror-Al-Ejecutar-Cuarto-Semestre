

export function Button({ children, className, ...props  }) {
    return(
        <button className={`relative inline-flex intem-center gap-1.5 rounded-md px-3 py-1.5 text-sm bg-blue-500 font-semibold 
        text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:
        outline-blue-500 disable:opacity-50 disable:cursor-not-allowed  ${className}` }{...props}>{children}</button>
    )
}

export default Button