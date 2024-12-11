export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'text-danger text-sm text-red-600 ' + className}
        >
            {message}
        </p>
    ) : null;
}
