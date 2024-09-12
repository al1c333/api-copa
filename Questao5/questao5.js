async function exibir_dados (){
    try {
        const response = await fetch("https://worldcupjson.net/matches/64")
        const final_data = await response.json()
        const mainId = document.getElementById("conteudo")
        mainId.innerHTML = `
            <div class="time-info">
                <h3>Campeão: ${final_data.home_team.name}</h3>
                <p><b>${final_data.home_team.name}</b> ${final_data.home_team.goals} x ${final_data.away_team.goals} <b>${final_data.away_team.name}</b></p>
            </div>
            <div class="detalhes">
                <p><strong>Local e Estádio:</strong> ${final_data.location} - ${final_data.venue}</p>
                <p><strong>Data e Hora:</strong> ${new Date(final_data.datetime).toLocaleString()}</p>
            </div>
        `
    } catch (error){
        console.error("Erro ao obter dados", error)
    }
    
}
exibir_dados()
