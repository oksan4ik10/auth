import { useRef, useState } from 'react';
import type { FieldError } from 'react-hook-form';
import { TInputPropsForm } from '../../models/type';




interface IProps {
    register: TInputPropsForm;
    error: FieldError | undefined;
}
function InputPassword(props: IProps) {
    const { register, error } = props;
    const ref = useRef<HTMLLabelElement>(null);
    const [isOpenPassword, setIsOpenPassword] = useState(false)

    const openPassword = () => {
        if (!ref.current) return;
        const input = ref.current.querySelector("input") as HTMLInputElement;
        if (!input) return
        if (isOpenPassword) input.type = "password"
        else input.type = "text";
        setIsOpenPassword(!isOpenPassword);

    }
    console.log(register);

    return (<>
        <label className={"form__label password " + (error ? "error" : "")} ref={ref}>
            <span>Password</span>
            <input type="password" placeholder="Password" name="password" {...register} />

            <span className={"password__text " + (isOpenPassword ? "check" : "")} onClick={openPassword}></span>
            {error && <p className='error-message'>{error.message}</p>}

        </label>

    </>
    );
}

export default InputPassword;