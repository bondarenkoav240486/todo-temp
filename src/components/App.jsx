import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "utils/RestrictedRoute";
import SharedLayout from "./SharedLayout";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
// const TasksPage = lazy(() => import('../pages/Tasks/Tasks'));

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <div>
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path="/register"
                            element={
                                <RestrictedRoute
                                    redirectTo="/tasks"
                                    component={<RegisterPage />}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <RestrictedRoute
                                    redirectTo="/tasks"
                                    component={<LoginPage />}
                                />
                            }
                        />
                        {/* <Route
                            path="/tasks"
                            element={
                                <PrivateRoute redirectTo="/login" component={<TasksPage />} />
                            }
                        /> */}
                        <Route path="*" element={<HomePage />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </div>
    );
}

export default App;