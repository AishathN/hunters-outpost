import React from 'react'
import Select from 'react-select'

const options = [
  { value: 16, label: 'Toys' },
  { value: 4, label: 'Art' },
  { value: 7, label: 'Books' },
  { value: 8, label: 'Movies' },
  { value: 13, label: 'Household' },
  { value: 17, label: 'Vehicles' },
  { value: 6, label: 'Experiences' },
  { value: 3, label: 'Antiques' },
  { value: 11, label: 'Furniture' },
  { value: 2, label: 'Edible_items' },
  { value: 3, label: 'Antiques' },
  { value: 14, label: 'Miscellaneous' },
  { value: 12, label: 'Games' },
  { value: 15, label: 'Tools' }
]

const MissionForm = ({ handleSubmit, handleChange, handleMultiChange, formData, buttonText }) => {

  return (
    <div className="new-form-area">
    <div className="new-form">

    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Mission Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Mission Title"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </div>

          <div className="field">
            <label className="label">Image (optional)</label>
            <div className="control">
              <input
                className="input"
                placeholder="Image URL"
                name="poster_image"
                onChange={handleChange}
                value={formData.image}
              />
            </div>
          </div>

          <div className="field">
                <label className="label">Category</label>
                <div className="control">
                  <Select options={options}
                  onChange={handleMultiChange}
                  isMulti
                  // value={formData.category}
                  />
                </div>
              </div>
              <div className="field">
              <label className="label">category</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    // onChange={handleCheckChange}
                    value={16}
                  />
                    Toys
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    // onChange={handleCheckChange}
                    value={7}
                  />
                    Art
                </label>
                </div>
                </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="input"
                placeholder="description"
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button">{buttonText}</button>
          </div>

        </form>

        </div>
      </div>


  )
}

export default MissionForm