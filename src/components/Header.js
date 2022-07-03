import PropTypes from "prop-types"
import Button from "./Button"
import React from "react"

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click")
  }
  return (
    <header className="header">
      <h1>
        {title}
        <Button color="purple" text="Add" onClick={onClick} />
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
