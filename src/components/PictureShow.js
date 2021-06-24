import React, {useRef} from 'react'
import '../App.css'

const PictureShow = (props) => {
  
  const ref = useRef(null)
  const contextRef = useRef(null)

  let image = new Image()

  image.src = props.picture.image_url

  const canvas = ref.current
  React.useEffect(() => {
    const canvas = ref.current
    const context = canvas.getContext("2d")

    let image = new Image()

    image.src = props.picture.image_url
    image.onload = function() {
      context.drawImage(image,0,0);
}
    
  }, [])


  const handleClick = event => {
  
  }


  return (
    <div>
      <h1>{props.picture.title}</h1>
      <img src={props.picture.image_url} alt={props.picture.title} height={200} width={200} />
      <canvas ref={ref} id="canvas"></canvas>
      <h4 className="text-center my-3">Filters</h4>
      <div className="row text-center my-4">
        <div className="col-md-3">
          <div className="btn-group btn-group-sm">
          <button onClick={(event) => handleClick(event)} className="filter-btn brightness-remove btn btn-info">-</button>
          <button className="btn btn-secondary btn-disabled" disabled>Brightness</button>
          <button className="filter-btn brightness-add btn btn-info">+</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="btn-group btn-group-sm">
          <button className="filter-btn contrast-remove btn btn-info">-</button>
          <button className="btn btn-secondary btn-disabled" disabled>Contrast</button>
          <button className="filter-btn contrast-add btn btn-info">+</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="btn-group btn-group-sm">
          <button className="filter-btn saturation-remove btn btn-info">-</button>
          <button className="btn btn-secondary btn-disabled" disabled>Saturation</button>
          <button className="filter-btn saturation-add btn btn-info">+</button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="btn-group btn-group-sm">
          <button className="filter-btn vibrance-remove btn btn-info">-</button>
          <button className="btn btn-secondary btn-disabled" disabled>Vibrance</button>
          <button className="filter-btn vibrance-add btn btn-info">+</button>
          </div>
        </div>
      </div>
      <h4 className="text-center my-3">Effects</h4>
      <div className="row mb-3">
        <div className="col-md-3">
          <button className="filter-btn vintage-add btn btn-dark btn-block">Vintage</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn lomo-add btn btn-dark btn-block">Lomo</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn clarity-add btn btn-dark btn-block">Clarity</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn sincity-add btn btn-dark btn-block">Sin City</button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <button className="filter-btn crossprocess-add btn btn-dark btn-block">Cross Process</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn pinhole-add btn btn-dark btn-block">Pinhole</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn nostalgia-add btn btn-dark btn-block">Nostalgia</button>
        </div>

        <div className="col-md-3">
          <button className="filter-btn hermajesty-add btn btn-dark btn-block">Her Majesty</button>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6">
          <button id="download-btn" className="btn btn-primary btn-block">Download Image</button>
        </div>
        <div className="col-md-6">
          <button id="revert-btn" className="btn btn-danger btn-block">Remove Filters</button>
        </div>
      </div>
    </div>
  )
}

export default PictureShow
