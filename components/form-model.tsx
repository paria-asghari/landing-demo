type Field = {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    light?: boolean;
};

export default function FormModel({ field, light }: { field: Field; light?: boolean }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-blue-400 text-sm">{field.label}</label>
            <input
                type={field.type}
                className={light
                    ? "bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 outline-none focus:border-blue-500 placeholder:text-slate-400"
                    : "bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500 placeholder:text-slate-400"
                }
                placeholder={field.placeholder}
                required={field.required}
            />
        </div>
    )
}