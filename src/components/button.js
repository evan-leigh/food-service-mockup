import {Link} from 'gatsby'
import * as React from 'react'

const Button = ({children, className, to}) => {
  return (
    <button className={className}>
      <Link to={to} className="link" >{children}</Link>
    </button>
  )
}

export default Button
