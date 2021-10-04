import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='mb-5 my-2'>
            <h2>About Our <span className='text-color'>Agency</span></h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-3 my-3">
                <div class="col">
                    <div class="card h-100 p-3 shadow-sm">
                        <img src="https://c.tadst.com/gfx/750w/international-programmer-day.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <h5>Expert : JavaScript</h5>
                            <p class="card-text">A JavaScript developer is responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application. ... JavaScript developers often work alongside other front-end web developers who specialize in markup and styling.</p>
                        </div>
                        <div>
                            <button className="button">More Info</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 p-3 shadow-sm">
                        <img src="https://www.soldevelo.com/blog/wp-content/uploads/What-makes-a-great-programmer-banner-1536x1024-1.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Jenelius Merry</h4>
                            <h5>Expert : C++</h5>
                            <p class="card-text">They create software, applications, and other programs using the C++ programming language. They work on creating codes that will be the foundation of the software or program they build. C++ developers are involved in the planning stage of the program.</p>
                        </div>
                        <div>
                            <button className="button">More Info</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 p-3 shadow-sm">
                        <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Haward Voe</h5>
                            <h5>Expert : Python</h5>
                            <p class="card-text">Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances</p>
                        </div>
                        <div>
                            <button className="button">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;