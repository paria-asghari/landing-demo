type Field = {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
};

export default function FormModel({ field }: { field: Field }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-blue-400 text-sm">{field.label}</label>
            <input
                type={field.type}
                className="bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500 placeholder:text-slate-400"
                placeholder={field.placeholder}
                required={field.required}
            />
        </div>
    )
}