import './index.css'

const VisitedCountries = props => {
  const {item, removeCountry} = props
  const {name, imageUrl, id} = item

  const onClickDelete = () => {
    removeCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <p className="country-name">{name}</p>
      <button type="button" className="delete-button" onClick={onClickDelete}>
        Remove
      </button>
    </li>
  )
}

export default VisitedCountries
