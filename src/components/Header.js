
export default function Header() {
    
    return (
        <section  className="header">
            <div  className="topo">
                <div  className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./images/logo.png" alt="" />
                </div>
                <div  className="search">
                    <p>Pesquisar</p>
                </div>
                <div  className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

            </div>
        </section>
 );
}