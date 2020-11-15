
/**
 * This is slightly clunky but we lazy load this component to start loading
 * all of the imports from this file. When the component renders it means that
 * everything is loaded, and we call the call-back which tells the parent to
 * render the rest of the application.
 */

import { useEffect } from 'react'

// Service imports
import '@battle/service'

const Load = ({ onLoaded }) => {
  useEffect(() => {
    onLoaded(true)
  })

  return null
}

export default Load
