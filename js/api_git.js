const token_acess = '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';

const requestOptions = {
headers: {'Authorization': `Token ${token_acess}`}};

fetch('https://api.github.com/users/eujoanderson/repos', requestOptions)
  .then(response_date => response_date.json())
  .then(data => {

      data.forEach(reqData => {
        const elemento = document.getElementById("box_container")

        console.log(reqData)
        console.log(reqData.name, reqData.language, reqData.visibility, reqData.id, reqData.html_url)

        let status = reqData.language

        if (status === null) {
          status = "--";
        }

        //Date  
        const date = new Date(reqData.created_at)
        const dates = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear()}`
        //Create element Dad
        const element = document.createElement('div')
        const span = document.createElement('span')

        //Create element Child
        const title = document.createElement('h4')
        const paragraph = document.createElement('p')

        //Create avatar
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

        //Element DAD
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

