/* 1er Ejercicio */

/* const nombre = document.querySelector('#name')


nombre.addEventListener('input, validarNombre')



function validarNombre(){
let nv = nombre.value
let slicedName = nv.split('@');
if(nv.includes('@')) && slicedName.length <= 2 && slicedName[1].includes(''){
nombre.classList.remove('invalid')

}else{
  nombre.classList.add('invalid')
}
} */

/* /* 2 EJERCICIO */
const users = [
  {
    id: 1,
    nombre: 'Ronnie',
    apellido: 'Santoyo'
  },
  {
    id: 2,
    nombre: 'Augusto',
    apellido: 'Santoyo'
  },
  {
    id: 3,
    nombre: 'William',
    apellido: 'Santoyo'
  },
  {
    id: 4,
    nombre: 'Oliver',
    apellido: 'Santoyo'
  },
  {
    id: 5,
    nombre: 'Harold',
    apellido: 'Santoyo'
  },

]

for (let i = 0; i < users.length; i++) {
  console.log(users[i]['nombre'])
}

/* 3er EJERCICIO */

const user_list = document.querySelector('#user_list')

for (let i = 0; i < users.length; i++) {
  if (users[i]['nombre'] !== 'Oliver') {
    user_list.innerHTML += '<li>' + users[i]['nombre'] + '</li>'
  }
}
/* 4to EJERCICIO */
const nombreInput = document.querySelector('#apellido')
const apellidoInput = document.querySelector('#apellido')
const add_user = document.querySelector('#add_user');
function showUsers(){
user_list.innerHTML = ''
for (let i = 0; i < users.length);
}







