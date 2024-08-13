import {useState} from "react";

export default function Placar({time}) {

    const [pontos, setPontos] = useState(0);

    function handleClick() {
        setPontos(pontos + 1);
    }

    return (
        <div>
            <h2>{time}</h2>
            <p>{pontos} {pontos === 1 ? "gol" : "gols"} até o momento!</p>
            <button onClick={handleClick}>Aumentar pontuação</button>
        </div>
    );
}