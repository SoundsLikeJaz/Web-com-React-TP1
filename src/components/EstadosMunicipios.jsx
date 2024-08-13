import { useEffect, useState } from "react";


export default function EstadosMunicipios({corFundo}) {

    const [estados, setEstados] = useState([]);
    const [municipios, setMunicipios] = useState([]);

    useEffect(() => console.log("renderizei o componente " + corFundo));

    useEffect(() => {
        const novaLista = [{ key: 0, value: "Selecione..." }];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then(result => result.json())
            .then(data => {
                data.forEach(item => {
                    novaLista.push({ key: item.id, value: item.nome });
                });
                setEstados(novaLista);
            });
        setMunicipios([]);
    }, []);

    function atualizaMunicipios(event) {
        const uf = event.target.value;
        const novaLista = [];
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(result => result.json())
            .then(data => {
                data.forEach(item => {
                    novaLista.push({ key: item.id, value: item.nome });
                });
                setMunicipios(novaLista);
            });
    }

    return (
        <div style={{backgroundColor:corFundo}}>
            <h3>Unidades da Federação</h3>
            <select name="estados" onChange={atualizaMunicipios}>
                {estados.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select><br />
            <select name="municipios">
                {municipios.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}