import React, {useState} from 'react';

const PreviewCard = (props) => {

  const renderPreview = () => {
    if (props.preview.length > 0) {
      return (
        <img className='preview-card' src={`./cards/${props.preview}.png`}/>
      )
    } else {
        return null;
    }
  }
  return (
    <div className = 'preview-container'>
    {renderPreview()}
    </div>
  )
}

export default PreviewCard;