import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './UserDataForm.css';
import { Icon } from 'semantic-ui-react';

const UserDataForm = ({ name, phone, email, postalCode, handlerOnChange, getShippingCosts }) => {

  return (
    <>
        <a className="addUserData" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
            <div>
                <Icon size='large' name='add circle' />
                <span>Datos Personales</span>
            </div>
        </a>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Datos Personales</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre:</label>
                                <input type="text" className="form-control" name="name" id="recipient-name" value={name} onChange={handlerOnChange}></input>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-phone" className="col-form-label">Telefono:</label>
                                <input type="text" className="form-control" name="phone" id="recipient-phone" value={phone} onChange={handlerOnChange}></input>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-email" className="col-form-label">Email:</label>
                                <input type="email" className="form-control" name="email" id="recipient-email" value={email} onChange={handlerOnChange}></input>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-postalcode" className="col-form-label">Codigo Postal:</label>
                                <input type="text" className="form-control" name="postalCode" id="recipient-postalcode" value={postalCode} onChange={handlerOnChange}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={getShippingCosts} className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserDataForm