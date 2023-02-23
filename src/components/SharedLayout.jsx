import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import css from '../components/App.module.css';

const SharedLayout = () => {
    return (
        <div className={css.main_box}>
            <AppBar />
            <Suspense fallback={false}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default SharedLayout;