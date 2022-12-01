import React from 'react'
import { NavLink } from 'react-router-dom'
import './Catagories.css'

function Catagories() {
  return (
    <section className="Catagories">
        <div className="content-middle">
            <div className="catagories-nav">
                <ul>
                    <li><a href="#">This Week</a></li>
                    <li><a href="#">Last Week</a></li>
                    <li><a href="#">This Month</a></li>
                    <li><a href="#">This Year</a></li>
                    <li><a href="#">This Year Top</a></li>
                    <li><a href="#">All Time</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Catagories