export default function Projects() {
    return (
        <section className="mb-5">
            <h2 className="mb-4 text-primary">Projects</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Grocery Store</h5>
                            <p className="card-text">
                                A full-stack web application that allows users to browse, search, and purchase grocery products online with a user-friendly interface.
                            </p>
                            <p><strong>Tech Stack:</strong> PHP, MySQL, JavaScript, HTML/CSS, Bootstrap</p>
                            <ul className="mt-2">
                                <li>Customer login and order tracking</li>
                                <li>Admin panel for inventory and order management</li>
                                <li>Cash-on-delivery with delivery code verification</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Mini E-Commerce</h5>
                            <p className="card-text">
                                A basic shopping web app built with React and Node.js where users can browse products, add items to cart, and place orders.
                            </p>
                            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
                            <ul className="mt-2">
                                <li>Product listing and detail view</li>
                                <li>Simple cart functionality</li>
                                <li>Place order form (no payment integration)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border-0 d-flex flex-column justify-content-between">
                        <div className="card-body d-flex flex-column h-100">
                            <div className="flex-grow-1">
                                <h5 className="card-title text-warning">Matrimonial Web Application</h5>
                                <p className="card-text">
                                    A full-stack matchmaking platform allowing users to register, set preferences, and connect with compatible matches. Real-time chat is enabled only after mutual interest and acceptance.
                                </p>
                                <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, JWT, Socket.io</p>
                                <ul className="mt-2">
                                    <li>User registration with gender and preference selection</li>
                                    <li>Send, accept, or reject interest requests</li>
                                    <li>Chat available only after mutual connection</li>
                                    <li>Admin panel to manage users</li>
                                </ul>
                            </div>
                            <div className="mt-3 d-flex justify-content-end">
                                <a
                                    href="https://matrimoni-chi.vercel.app/"
                                    className="btn btn-sm btn-primary me-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/Nithish3309m/matrimoni"
                                    className="btn btn-sm btn-outline-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Frontend Repo
                                </a>
                                <a
                                    href="https://github.com/Nithish3309m/matrimoniserver"
                                    className="btn btn-sm btn-outline-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Backend Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
