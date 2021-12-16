'use strict'

const Handlebars = require('handlebars')
const { request } = require('graphql-request')
const endpoint = 'http://localhost:3000/api'

const template = `
{{#with error}}
  There was an error: {{../error}}
{{/with}}
{{#each items}}
<div class="item">
  <h3>Proyecto:{{nombre}}</h3>
    <p>Estado: {{estadoProyecto}}</p>
    <p>Fase: {{fase}}</p>
    <p>Creación:{{creacion}}</p>
    <p>Presupuesto: $ {{presupuesto}}</p>
    <object>lider: {{lider.[0].name}}</object>

</div>
{{/each}}
`
const templateData = Handlebars.compile(template)

async function search () {
  const query = `
    query generalSearch{
      getProyectos{
        nombre
        estadoProyecto
        fase
        creacion
        presupuesto
        lider{
          name
        }
      }
    }
  `

  let result, html

  try {
    result = await request(endpoint, query)
    html = templateData({ items: result.getProyectos })
  } catch (error) {
    html = templateData({ error: error })
  }

  document.getElementById('result').innerHTML = html
}

window.onload = () => {
  document.getElementById('btn-search').addEventListener('click', search)
}
