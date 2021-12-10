import { useState } from "react";

const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChangeInput = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }
    const clear = () => {
        setForm(inicialState)
    }
    return { form, onChangeInput, clear }
}
export default useForm;