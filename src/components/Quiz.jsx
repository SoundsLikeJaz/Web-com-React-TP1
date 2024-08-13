import {useState} from "react";

export default function Quiz({ pergunta, children }) {

    const [visivel, setVisivel] = useState(false);

    function handleClick(){
        setVisivel(!visivel);
    }

    return (
        <section className="questionBox">
            <h3>{pergunta}</h3>
            <button onClick={handleClick}>{visivel ? "Ocultar Resposta" : "Exibir Resposta"}</button>
            {visivel &&
                <div>
                    <p>{children}</p>
                </div>
            }
        </section>
    );
}