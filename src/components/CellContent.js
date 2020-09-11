import React from 'react'
import StatusIcon from './StatusIcon'

function CellContent({id, content}) {
    return (
      id == 'status-table' ? 
      <div> {content == 'active' ? 
      <StatusIcon content={'Active'}/> :
       content == 'cenceled' ? 
       <StatusIcon content={'Canceled'}/> 
       : content} 
       </div> : 
      <div> {content} </div>
     
       
    )
}

export default CellContent
