import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { PrivateRoute } from "utils/PrivateRoute";
import { RestrictedRoute } from "utils/RestrictedRoute";
import SharedLayout from "./SharedLayout";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
const ImportantPage = lazy(() => import('../pages/Important/Important'));
const ListsPage = lazy(() => import('../pages/Lists/Lists'));;


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
                        <Route
                            path="/important"
                            element={
                                <RestrictedRoute
                                    redirectTo="/important"
                                    component={<ImportantPage />}
                                />
                            }
                        />
                        <Route
                            path="/lists"
                            element={
                                <RestrictedRoute
                                    redirectTo="/lists"
                                    component={<ListsPage />}
                                />
                            }
                        />
                            {/* <Route
                            path="/tasks"
                            element={
                                <RestrictedRoute
                                    redirectTo="/tasks"
                                    component={<TasksPage />}
                                />
                            }
                        /> */}
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