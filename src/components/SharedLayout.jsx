import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

const SharedLayout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={false}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default SharedLayout;