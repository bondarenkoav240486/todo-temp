import Navigation from "../Navigation/Navigation";

const AppBar = () => {
    return (
        <div>
            <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : <NavAuth />} Auth will appear */}
        </div>
    );
}

export default AppBar;