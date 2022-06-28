import React from 'react'
import { connect } from 'react-redux'

export const UserContext = (props) => {
  return (
    <div>UserContext</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserContext)