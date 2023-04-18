/**
 * @typedef {Object} Tarea 
 * @property {number} userId 
 * @property {number} id 
 * @property {string} title 
 * @property {boolean} completed 
 */

/**
 * 
 * @returns {Promise<Tarea[]>} 
 */
async function getTareas() {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos"; 
        const respuesta = await fetch(url);
        const jsonObj = await respuesta.json();    
        return jsonObj;
    } catch (error) {
        throw error 
    }
}

/**
 * @param {HTMLElement} lista - Elemento HTML que será el padre de las tareas 
 * @param {Tarea[]} tareas - Lista de tareas para agregar a la lista 
 */
function mostrarTareas(lista, tareas) {
    tareas.map(t => {
        const li = document.createElement('li');
        li.textContent = t.title;
        li.setAttribute('id', 'li-'+t.id);
        lista.appendChild(li);
        return li;
    });    
}
