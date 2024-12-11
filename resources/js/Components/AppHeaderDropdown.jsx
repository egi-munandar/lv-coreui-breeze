import {
    cilBell,
    cilCommentSquare,
    cilCreditCard,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilUser,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react';
import { Link, usePage } from '@inertiajs/react';

import axios from 'axios';
import Swal from 'sweetalert2';
// import avatar8 from './../../assets/images/avatars/8.jpg';

const AppHeaderDropdown = () => {
    const user = usePage().props.auth.user;
    const submitLogout = () => {
        Swal.fire({
            icon: 'question',
            title: 'Logout App?',
            showCancelButton: true,
            confirmButtonText: 'Logout',
            showLoaderOnConfirm: true,
            preConfirm: () =>
                axios
                    .post('/logout')
                    .then(() => {
                        Swal.fire({
                            toast: false,
                            showConfirmButton: false,
                            timer: 1000,
                            icon: 'success',
                            title: 'Logout Success',
                        });
                    })
                    .catch(),
        });
    };
    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle
                placement="bottom-end"
                className="py-0 pe-0"
                caret={false}
            >
                <CAvatar
                    src="https://fastly.picsum.photos/id/159/128/128.jpg?hmac=9liYpq_AFT3x_GkyG7ptn9QPFzP-l-1fFVI9-r7ZYQk"
                    size="md"
                />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
                    {user.name}
                </CDropdownHeader>
                <CDropdownItem href="#">
                    <CIcon icon={cilBell} className="me-2" />
                    Updates
                    <CBadge color="info" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilEnvelopeOpen} className="me-2" />
                    Messages
                    <CBadge color="success" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilTask} className="me-2" />
                    Tasks
                    <CBadge color="danger" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilCommentSquare} className="me-2" />
                    Comments
                    <CBadge color="warning" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownHeader className="bg-body-secondary fw-semibold my-2">
                    Settings
                </CDropdownHeader>
                <CDropdownItem href="#">
                    <CIcon icon={cilUser} className="me-2" />
                    Profile
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilSettings} className="me-2" />
                    Settings
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilCreditCard} className="me-2" />
                    Payments
                    <CBadge color="secondary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilFile} className="me-2" />
                    Projects
                    <CBadge color="primary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem as={Link} method="post" href={route('logout')}>
                    <CIcon icon={cilLockLocked} className="me-2" />
                    Logout
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};

export default AppHeaderDropdown;
