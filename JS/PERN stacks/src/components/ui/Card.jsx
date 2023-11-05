

export function Card({children, className}) {
    return (
        <div className={`bg-zinc-900 p-14 rounded-mb${className}`}>{children}</div>
    )
}