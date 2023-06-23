import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString()
  })
  const editMode = false
  const handleSubmit = () => {
    console.log('Submitted!')
  }
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update this Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select
              name='category'
              value={formData.category}
              onChange={handleChange}
              >
                {categories?.map((category, _index) => (
                  <option key={_index} value={category}>{category}</option>
                ))}
            </select>
            
            <label htmlFor="new-category">New Category</label>
            <input
              type="text"
              id="new-category"
              name="category"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />

          </section>
        </form>
      </div>
    </div>
  )
};

export default TicketPage;