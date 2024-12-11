import { cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem } from '@coreui/react';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        route: 'dashboard',
        perms: ['Admin'],
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    // {
    //     component: CNavItem,
    //     name: 'Work Permit',
    //     to: '/work-permit',
    //     perms: ['Admin'],
    //     icon: <FontAwesomeIcon icon={faClipboardCheck} className="nav-icon" />,
    // },
    // {
    //     component: CNavItem,
    //     name: 'Inspeksi K3LH',
    //     to: '/inspeksi-k3lh',
    //     perms: ['Admin'],
    //     icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />,
    // },
    // {
    //     component: CNavItem,
    //     name: 'Pengukuran Lingkungan Kerja',
    //     to: '/pengukuran-lingkungan-kerja',
    //     perms: ['Admin'],
    //     icon: <FontAwesomeIcon icon={faUserNurse} className="nav-icon" />,
    // },
    // {
    //     component: CNavItem,
    //     name: 'Pengukuran Kualitas Lingkungan',
    //     to: '/pengukuran-kualitas-lingkungan',
    //     perms: ['Admin'],
    //     icon: <FontAwesomeIcon icon={faSeedling} className="nav-icon" />,
    // },
    // {
    //     component: CNavItem,
    //     name: 'Kesehatan Karyawan',
    //     to: '/kesehatan-karyawan',
    //     perms: ['Admin'],
    //     icon: <FontAwesomeIcon icon={faUserDoctor} className="nav-icon" />,
    // },
    {
        component: CNavGroup,
        name: 'Master',
        to: '/master',
        perms: ['Admin'],
        icon: <FontAwesomeIcon icon={faBoxes} className="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'User',
                to: '/master/user',
                perms: ['Admin'],
            },
        ],
    },
];

export default _nav;
