import AppHeader from '@/Components/AppHeader';
import AppSidebar from '@/Components/AppSidebar';
import { CContainer, CSpinner } from '@coreui/react';
import { Fragment, Suspense } from 'react';

export default function AdminLayout({ children }) {
    return (
        <Fragment>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                    <CContainer className="px-4" lg>
                        <Suspense fallback={<CSpinner color="primary" />}>
                            {children}
                        </Suspense>
                    </CContainer>
                </div>
            </div>
        </Fragment>
    );
}
