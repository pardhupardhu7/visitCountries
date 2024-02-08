import './index.css'

const CountryItem = props => {
  const {countryDetails, updateCountry} = props
  const {id, name, isVisited} = countryDetails

  const addCountry = () => {
    updateCountry(id)
  }

  const buttonDisplayText = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="country-list-items">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="para-text">{buttonDisplayText}</p>
      ) : (
        <button type="button" className="visit-button" onClick={addCountry}>
          {buttonDisplayText}
        </button>
      )}
    </li>
  )
}

export default CountryItem
