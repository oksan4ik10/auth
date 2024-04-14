import { useRef, useState } from 'react';
import type { FieldError } from 'react-hook-form';
import { TInputPropsForm } from '../../models/type';



interface IProps {
    register: TInputPropsForm;
    error: FieldError | undefined;
}
function InputPassword(props: IProps) {
    const { register, error } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isOpenPassword, setIsOpenPassword] = useState(false)
    console.log(error);



    const openPassword = () => {
        if (!ref.current) return;
        if (isOpenPassword) ref.current.type = "password";
        else ref.current.type = "text";
        setIsOpenPassword(!isOpenPassword);

    }
    return (
        <label className={"form__label password " + (error ? "error" : "")}>
            <span>Password</span>
            <input type="password" placeholder="Password" {...register} ref={ref} />
            <span className={"password__text " + (isOpenPassword ? "check" : "")} onClick={openPassword}></span>
        </label>
    );
}

export default InputPassword;