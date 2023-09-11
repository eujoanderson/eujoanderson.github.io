const token_acess = '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';

const requestOptions = {
headers: {'Authorization': `Token ${token_acess}`}};

fetch('https://api.github.com/users/eujoanderson/repos', requestOptions)
  .then(response_date => response_date.json())
  .then(data => {

      data.forEach(reqData => {
        const elemento = document.getElementById("box_container")

        console.log(reqData)
        console.log(reqData.name, reqData.language, reqData.visibility, reqData.id, reqData.html_url, reqData.created_at)

        let status = reqData.language

        if (status === null) {
          status = "--";
        }

        const date = new Date(reqData.created_at)
        const dates = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear()}`
        console.log(dates)

        const element = document.createElement('div')
        const span = document.createElement('span')

        const title = document.createElement('h4')
        const paragraph = document.createElement('p')

        const avatar = document.createElement("a")
        avatar.className = "bx bxl-github"
        avatar.style = "font-size:50px;"
        avatar.href = reqData.html_url
        avatar.target = "__blank"
        avatar.id = reqData.id
        avatar.title = reqData.name

        element.className = "box"
        element.id = "box"

        span.innerHTML = status
        span.className = "languages"

        title.innerHTML = reqData.name
        paragraph.innerHTML = dates

        elemento.appendChild(element)
        element.appendChild(avatar)
        element.appendChild(title)
        element.appendChild(paragraph)
        paragraph.appendChild(span)
        
      })
    })
    .catch(error => {
      console.error('Ocorreu um problema ao obter os detalhes do repositório:', error);
});
