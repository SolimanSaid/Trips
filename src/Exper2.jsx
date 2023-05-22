import React from 'react'

export default function Exper2({rating}) {
  return (
    <div>
      {rating>=1
      ?(<i className="bi bi-star-fill"></i>)
      :rating>=.05 ?(<i className="bi bi-star-half"></i>):(<i className="bi bi-star"></i>)
      }
 {rating>=2 ?(<i className="bi bi-star-fill"></i>) :rating>=1.5 ?( <i className="bi bi-star-half"></i>):(<i className="bi bi-start"></i>)  }

    </div>
  )
}
