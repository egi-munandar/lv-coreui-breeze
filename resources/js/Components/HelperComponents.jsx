import CIcon from '@coreui/icons-react';
import { CSpinner } from '@coreui/react';
import PropTypes from 'prop-types';

export function SubmitButton({
    loading = false,
    disabled,
    text = 'Submit',
    variant = 'success',
    onClick = () => { },
    btnType = 'button',
    form = '',
    icon = <CIcon icon={cilSend} />,
}) {
    return (
        <button
            form={form}
            type={btnType}
            onClick={onClick}
            className={'btn btn-' + variant}
            disabled={disabled}
        >
            {loading ? (
                <CSpinner size="sm" component="span" aria-hidden="true" />
            ) : (
                icon
            )}
            <span className="ms-1">{text}</span>
        </button>
    );
}
SubmitButton.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.any,
    variant: PropTypes.string,
    btnType: PropTypes.oneOf(['button', 'submit']),
    form: PropTypes.string,
    onClick: PropTypes.func,
};
export const can = (permission, user) =>
    (user.perms || []).filter((el) => [...permission, 'SU'].includes(el)).length
        ? true
        : false;
