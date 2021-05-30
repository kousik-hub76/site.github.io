import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-white">
                <form className="container-fluid justify-content-around">
                    <img src="https://www.tailorbrands.com/wp-content/uploads/2020/01/grounded-coffee-shop-logo.jpg"
                        style={{ height: '80px', width: '80px' }}></img>
                    <button
                        type="button"
                        className="btn"

                    >AJUDE</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar


