import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src='/logo.svg' alt="Apple Logo" />

            <ul>
                {[
                    {label: "Store"},
                    {label: "Mac"},
                    {label: "iPhone"},
                    {label: "Watch"},
                    {label: "Vision"},
                    {label: "AirPods"},

                ].map((item, index) => (
                    <li key={index}>
                        <a href="#">{item.label}</a>
                    </li>
                ))
                }
            </ul>

            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar