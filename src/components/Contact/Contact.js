import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h2>Do you want to be a successful programmer?</h2>
            <br />
            <h5>Email Address : programming45@gmail.com</h5>
            <br />
            <h5>Phone Number : +08801747459745</h5>
            <br />
            <h5>Location : Mirpur-10,Dhaka,Bangladesh</h5>
            <br />
            <br />
            <h5>Fillup the form and contact us</h5>
            <form class="row g-3 needs-validation mx-5 mb-5" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Your email</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend"></span> */}
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label text-center">Your address</label>
                    <input type="text" class="form-control" id="validationCustom03" required />
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label text-center">Phone number</label>
                    <input type="text" class="form-control" id="validationCustom03" required />
                </div>
                <div class="col-12">
                    <button class="btn btn bg-color" type="submit">Contact Now</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;