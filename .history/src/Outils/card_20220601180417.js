import React from 'react'

const Card = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col col-lg-4">
                    <div className="card mb-3" style="max-width: 540px;">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                                alt="Trendy Pants and Shoes"
                                className="img-fluid rounded-start"
                            />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card