import Main from "./Container/Main"

import Sidebar from "./Container/Sidebar"

export default function Container() {

    return (
        <section  className="container">
            <Main />
            <Sidebar />
    </section>
    );
}