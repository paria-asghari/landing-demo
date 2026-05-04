import { AppLayout, Navbar, Sidebar } from "@heroui-pro/react";

export function DashboardLayout({ children }) {
    return (
        <AppLayout
            // aside={<DetailsPanel />}
            navbar={
                <Navbar maxWidth="full">
                    <Navbar.Header>
                        <AppLayout.MenuToggle />
                        <Sidebar.Trigger />
                        {/* … */}
                        <Navbar.Spacer />
                        <AppLayout.AsideTrigger />
                    </Navbar.Header>
                </Navbar>
            }
            sidebar={
                <>
                    <Sidebar>{/* … */}</Sidebar>
                    <Sidebar.Mobile>{/* … */}</Sidebar.Mobile>
                </>
            }
        >
            {children}
        </AppLayout>
    );
}