import React from 'react';
import '../../css/style.css';

class ImageResults extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  }

  

  render() {
    let imageListContent;
    if(this.props.images) {
      imageListContent = (
        <div className="image-list">{this.props.images.map(img => <div key={img.id} className="image-box" style={{gridRowEnd: `span ${this.state.spans}`}}><img ref={this.imageRef} className="image-box__photo" src={img.largeImageURL} alt={img.tags[0]}/></div>)}</div>
      )
    } else {
      imageListContent = (
        null
      );
    }
    return (
      <div className="gallery__images">
        {imageListContent}
      </div>
    )
  }
}

export default ImageResults
