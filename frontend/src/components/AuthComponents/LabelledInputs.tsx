import { ChangeEvent } from "react"
interface propsInput {
    label: string,
    placeholder: string,
    types?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function Lablledinputs({ label, placeholder, types, onChange }: propsInput) {
    return (
        <div className="w-7/12">
            <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" >
                    {label}
                </label>
                <input onChange={onChange} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={types || "text"} placeholder={placeholder} />
            </div>
        </div>
    )
}