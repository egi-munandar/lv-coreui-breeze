import {
    CCloseButton,
    CSidebar,
    CSidebarBrand,
    CSidebarFooter,
    CSidebarHeader,
    CSidebarToggler,
} from '@coreui/react';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import navigation from './_nav';
import { AppSidebarNav } from './AppSidebarNav';
import { can } from './HelperComponents';
import { toggleSidebar, toggleUnfoldable } from './reducer-slices/themeSlice';

const appName = import.meta.env.VITE_APP_NAME;
export default function AppSidebar() {
    const dispatch = useDispatch();
    const unfoldable = useSelector((state) => state.theme.unfoldable);
    const sidebarShow = useSelector((state) => state.theme.sidebarShow);
    const [navItems, setNavItems] = useState([]);
    const user = usePage().props.auth.user;
    useEffect(() => {
        let adr = [];
        navigation.map((v, i) => {
            let itm = { ...v };
            if (v.items) {
                const subs = [];
                v.items.map((vv) => {
                    if (vv.perms) {
                        if (can(vv.perms, user)) {
                            subs.push(vv);
                        }
                    } else {
                        subs.push(vv);
                    }
                });
                itm.items = subs;
            }
            if (v.perms) {
                if (can(v.perms, user)) {
                    adr.push(itm);
                }
            } else {
                adr.push(itm);
            }
            if (i + 1 === navigation.length) {
                setNavItems(adr);
            }
            return 1;
        });
    }, [user]);
    return (
        <CSidebar
            className="border-end"
            colorScheme="dark"
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch(toggleSidebar(visible));
            }}
        >
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand to="/">
                    <div className="sidebar-brand-full">
                        <span className="h3">
                            <FontAwesomeIcon
                                icon={faHelmetSafety}
                                className="me-2"
                            />
                            {appName}
                        </span>
                    </div>
                    <FontAwesomeIcon
                        icon={faHelmetSafety}
                        height={32}
                        className="sidebar-brand-narrow"
                    />
                </CSidebarBrand>
                <CCloseButton
                    className="d-lg-none"
                    dark
                    onClick={() => dispatch(toggleSidebar(false))}
                />
            </CSidebarHeader>
            <AppSidebarNav items={navItems} />
            <CSidebarFooter className="border-top d-none d-lg-flex">
                <CSidebarToggler
                    onClick={() => dispatch(toggleUnfoldable(!unfoldable))}
                />
            </CSidebarFooter>
        </CSidebar>
    );
}
