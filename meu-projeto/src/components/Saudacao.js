function Saudacao({nome}) {

    function gerarSudacao(algumnome) {
        return `OLá, ${algumnome}, tudo bom?`
    }

    return (
     <>
        {nome && <p>{gerarSudacao(nome)}</p>}
     </> 
    )
}

export default Saudacao