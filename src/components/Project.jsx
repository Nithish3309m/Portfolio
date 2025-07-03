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
                            <h5 className="card-title">Mini E-Commerce </h5>
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

            </div>
        </section>
    )
}