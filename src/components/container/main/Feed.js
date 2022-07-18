
import React from "react";

export default function Feed() {

    const [contador, setContador] = React.useState(101523);
    const [corBotao, setCorBotao] = React.useState("visible");
    const [formatoBotao, setFormatoBotao] = React.useState("heart-outline");

    return (
        <div  className="feed">
            <div  className="post">
                <div  className="profile">
                    <div  className="profile-pic"><img src="./images/meowed 2.png" alt=""/></div>
                    <p>meowed</p>
                </div>
                <div  className="post-photo"><img src="./images/gato-telefone 1.png" alt=""/></div>
                <div  className="post-reactions">
                    <div  className="reaction-icons">
                        <div  className="like-comment-share">
                            <ion-icon onClick={() => {
                                if (corBotao === "visible") {
                                setContador(contador + 1);
                                setCorBotao("red");
                                setFormatoBotao("heart");
                                } else {
                                    setContador(contador - 1);
                                    setCorBotao("visible");
                                    setFormatoBotao("heart-outline")
                                }
                            }} 
                                name={formatoBotao} class={corBotao} ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div  className="save-post">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div  className="likes">
                        <img src="./images/respondeai 2.png" alt=""/>
                        <p>Curtido por<strong  className="medium"> respondeai </strong> e <strong  className="medium">outras {contador} pessoas</strong></p>
                    </div>
                </div>
            </div>
            <div  className="post">
                <div  className="profile">
                    <div  className="profile-pic"><img src="./images/meowed 2.png" alt=""/></div>
                    <p>meowed</p>
                </div>
                <div  className="post-photo"><img src="./images/gato-telefone 1.png" alt=""/></div>
                <div  className="post-reactions">
                    <div  className="reaction-icons">
                        <div  className="like-comment-share">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div  className="save-post">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div  className="likes">
                        <img src="./images/respondeai 2.png" alt=""/>
                        <p>Curtido por<strong  className="medium"> respondeai </strong> e <strong  className="medium">outras 101.523 pessoas</strong></p>
                    </div>
                </div>
            </div>
            <div  className="post">
                <div  className="profile">
                    <div  className="profile-pic"><img src="./images/meowed 2.png" alt=""/></div>
                    <p>meowed</p>
                </div>
                <div  className="post-photo"><img src="./images/gato-telefone 1.png" alt=""/></div>
                <div  className="post-reactions">
                    <div  className="reaction-icons">
                        <div  className="like-comment-share">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div  className="save-post">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div  className="likes">
                        <img src="./images/respondeai 2.png" alt=""/>
                        <p>Curtido por<strong  className="medium"> respondeai </strong> e <strong  className="medium">outras 101.523 pessoas</strong></p>
                    </div>
                </div>
            </div>
            <div  className="post">
                <div  className="profile">
                    <div  className="profile-pic"><img src="./images/meowed 2.png" alt=""/></div>
                    <p>meowed</p>
                </div>
                <div  className="post-photo"><img src="./images/gato-telefone 1.png" alt=""/></div>
                <div  className="post-reactions">
                    <div  className="reaction-icons">
                        <div  className="like-comment-share">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div  className="save-post">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div  className="likes">
                        <img src="./images/respondeai 2.png" alt=""/>
                        <p>Curtido por<strong  className="medium"> respondeai </strong> e <strong  className="medium">outras 101.523 pessoas</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}