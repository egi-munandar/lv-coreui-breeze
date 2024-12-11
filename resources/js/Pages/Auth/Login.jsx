import { SubmitButton } from '@/Components/HelperComponents';
import AuthLayout from '@/Layouts/AuthLayout';
import { cilLockLocked, cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
    CAlert,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormCheck,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import {
    faHelmetSafety,
    faSignIn,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, useForm } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME;
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });
    const submitLogin = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    return (
        <AuthLayout>
            <Head title="Login" />
            <div className="bg-body-tertiary min-vh-100 d-flex align-items-center flex-row">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm
                                            onSubmit={submitLogin}
                                            id="flogin"
                                        >
                                            <h1>Login</h1>
                                            <p className="text-body-secondary">
                                                <FontAwesomeIcon
                                                    icon={faSignIn}
                                                />{' '}
                                                Sign In to your account
                                            </p>
                                            {errors.username && (
                                                <CAlert color="danger">
                                                    {errors.username}
                                                </CAlert>
                                            )}
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilUser} />
                                                </CInputGroupText>
                                                <CFormInput
                                                    required
                                                    onChange={(e) =>
                                                        setData(
                                                            'username',
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="Username"
                                                    autoComplete="username"
                                                />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupText>
                                                    <CIcon
                                                        icon={cilLockLocked}
                                                    />
                                                </CInputGroupText>
                                                <CFormInput
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={(e) =>
                                                        setData(
                                                            'password',
                                                            e.target.value,
                                                        )
                                                    }
                                                    autoComplete="current-password"
                                                />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs={6}>
                                                    <SubmitButton
                                                        loading={processing}
                                                        btnType="submit"
                                                        form="flogin"
                                                        variant="primary px-4"
                                                        text="Login"
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={faUnlock}
                                                            />
                                                        }
                                                    />
                                                </CCol>
                                                <CCol
                                                    xs={6}
                                                    className="text-right"
                                                >
                                                    <CFormCheck
                                                        onChange={(e) =>
                                                            setData(
                                                                'remember',
                                                                e.target
                                                                    .checked,
                                                            )
                                                        }
                                                        checked={data.remember}
                                                        inline
                                                        label="Remember Me"
                                                    />
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard
                                    className="bg-primary py-5 text-white"
                                    style={{ width: '44%' }}
                                >
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>{appName}</h2>
                                            <FontAwesomeIcon
                                                icon={faHelmetSafety}
                                                size="8x"
                                            />
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </AuthLayout>
    );
}
// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData('remember', e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }
