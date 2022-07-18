import Main from "./container/Main"

import Sidebar from "./container/Sidebar"

export default function Container() {

    return (
        <section  className="container">
            <Main />
            <Sidebar />
    </section>
    );
}