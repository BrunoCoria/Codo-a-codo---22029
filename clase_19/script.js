// map
const personas = [
    {
        id: Math.random(),
        edad: 15,
        nombre: 'Carlos',
        apellido: 'López'
    },
    {
        id: Math.random(),
        edad: 25,
        nombre: 'Juan',
        apellido: 'Pérez'
    },
];

// Guardar solamente los ID
const mapeados = personas.map(x=> x.id);
console.log(mapeados);

const apiResult = 
{
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
      },     
    ],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  }

//   Obtener un objeto con el id y mail de los objetos con id mayor a 7
  const filtered = apiResult.data.filter(x => x.id > 7);

  const mapeo = filtered.map((aux) =>{
      const obj = {
          id: aux.id,
          email: aux.email
      }
      return obj
  })

  console.log(mapeo);

//   Obtener un objeto con el nombre de los objetos con id mayores a 8
  const filtrado = apiResult.data.filter(x => x.id > 8);
  const mapa = filtrado.map((xd) =>{
    const objeto = {
        nombre: xd.first_name,
        apellido: xd.last_name
    }
    return objeto;
  })

  console.log(mapa);

//   Obtener el ID
const ids = apiResult.data.map((id) =>{
    const object = {
        id: id.id
    }
    return object;
})

console.log(ids);