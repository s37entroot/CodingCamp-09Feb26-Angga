// File wajib sesuai struktur [cite: 22, 25]
let todos = [];

const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const todoContainer = document.getElementById('todo-container');
const filterSelect = document.getElementById('todo-filter');
const emptyMsg = document.getElementById('empty-msg');
const deleteAllBtn = document.getElementById('delete-all-btn');

// Fungsi Tambah & Validasi [cite: 17, 18]
addBtn.addEventListener('click', () => {
    if (todoInput.value.trim() === "" || dateInput.value === "") {
        alert("Please fill in both fields!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        task: todoInput.value,
        date: dateInput.value,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = "";
    dateInput.value = "";
    renderTodos();
});

// Fungsi Render dengan Tailwind Classes [cite: 16]
function renderTodos() {
    todoContainer.innerHTML = "";
    const filter = filterSelect.value;

    const filtered = todos.filter(t => {
        if (filter === "completed") return t.completed;
        if (filter === "incomplete") return !t.completed;
        return true;
    });

    emptyMsg.style.display = filtered.length === 0 ? "block" : "none";

    filtered.forEach(item => {
        const card = document.createElement('div');
        // Menggunakan Tailwind untuk styling kartu hitam
        card.className = "todo-card bg-black text-white p-4 rounded-lg flex items-center gap-4 shadow-lg text-left";
        card.innerHTML = `
            <input type="checkbox" ${item.completed ? 'checked' : ''} 
                   class="w-5 h-5 accent-blue-500" onchange="toggleStatus(${item.id})">
            <div class="flex-1">
                <p class="text-sm font-medium ${item.completed ? 'done-text' : ''}">${item.task}</p>
                <p class="text-[10px] text-[#ffde03]">Due: ${item.date}</p>
            </div>
            <button onclick="deleteItem(${item.id})" 
                    class="bg-[#e91e63] text-white text-xs font-bold px-2 py-1 rounded hover:bg-red-600">x</button>
        `;
        todoContainer.appendChild(card);
    });
}

function toggleStatus(id) {
    todos = todos.map(t => t.id === id ? {...t, completed: !t.completed} : t);
    renderTodos();
}

function deleteItem(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

deleteAllBtn.addEventListener('click', () => {
    if(confirm("Clear all tasks?")) {
        todos = [];
        renderTodos();
    }
});

filterSelect.addEventListener('change', renderTodos);