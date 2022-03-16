// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {images, updateActiveId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = images
  const changeImageUrl = () => {
    updateActiveId(id)
  }
  const activeTabClassName = isActive ? 'active-tab-item' : ''

  return (
    <li className={`thumbnail-img ${activeTabClassName}`} key={id}>
      <button type="button" onClick={changeImageUrl} key={id}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="button-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
