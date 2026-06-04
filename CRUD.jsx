import { useState } from 'react'

const CRUD = () => {
  const [form, setForm] = useState({ name: '', email: '' })
  const [items, setItems] = useState([])
  const [editId, setEditId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setForm({ name: '', email: '' })
    setEditId(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = form.name.trim()
    const trimmedEmail = form.email.trim()

    if (!trimmedName || !trimmedEmail) return

    if (editId !== null) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, name: trimmedName, email: trimmedEmail } : item
        )
      )
    } else {
      setItems((prev) => [
        ...prev,
        { id: Date.now(), name: trimmedName, email: trimmedEmail }
      ])
    }

    resetForm()
  }

  const handleEdit = (item) => {
    setForm({ name: item.name, email: item.email })
    setEditId(item.id)
  }

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
    if (editId === id) resetForm()
  }

  return (
    <div>
      <h2>Simple CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">{editId !== null ? 'Update' : 'Add'}</button>
        {editId !== null && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email}{' '}
              <button type="button" onClick={() => handleEdit(item)}>
                Edit
              </button>{' '}
              <button type="button" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CRUD
