import {forwarRef} from 'react'

export const Textarea = forwarRef((props, ref) => {
    return (
        <textarea type="text" className="bg-zinc-800 px-3 py-2 block my-2 w-full"
        {...props} ref={ref}>
            {props.children}
        </textarea>
    )
})

export default Textarea;