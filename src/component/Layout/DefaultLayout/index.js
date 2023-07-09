import Header from "../component/Header";
import Sidebar from "./Sidebar";
function DefaultLayout({ children }) {
    return (
        <div className="Wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout