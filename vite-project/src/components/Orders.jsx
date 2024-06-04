import { useContext } from "react"
import {DataContext} from '../Context'
import { Link } from "react-router-dom"

export default function Cart() {
  const {items,setItems} = useContext(DataContext)
  return (
    <>
    <div className="container">
    <div className="row p-4">
        <div className="col-xl-8">
      {items.map((item,i)=>{
          return(
              <div key={i}>
              <div className="card border shadow-none mb-3">
                  <div className="card-body">
  
                      <div className="d-flex align-items-start border-bottom pb-3">
                          <div className="me-4">
                              <img src={item.img} alt="" className="avatar-lg rounded object-fit-cover" height={"80px !important"} width={"80px"}/>
                          </div>
                          <div className="flex-grow-1 align-self-center overflow-hidden">
                              <div>
                                  <h5 className="text-truncate font-size-18"><a href="#" className="text-dark">{item.name} </a></h5>
                                  <p className="text-muted mb-0">
                                      <i className="bx bxs-star text-warning"></i>
                                      <i className="bx bxs-star text-warning"></i>
                                      <i className="bx bxs-star text-warning"></i>
                                      <i className="bx bxs-star text-warning"></i>
                                      <i className="bx bxs-star-half text-warning"></i>
                                  </p>
                                  <p className="mb-0 mt-1">Color : <span className="fw-medium">Gray</span></p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                              <ul className="list-inline mb-0 font-size-16">
                                  <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                          <i className="mdi mdi-trash-can-outline"></i>
                                      </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                          <i className="mdi mdi-heart-outline"></i>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
  
                      <div>
                          <div className="row">
                              <div className="col-md-4">
                                  <div className="mt-3">
                                      <p className="text-muted mb-2">Price</p>
                                      <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">500/-</del></span>{item.price}/-</h5>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="mt-3">
                                      <p className="text-muted mb-2">Quantity</p>
                                      <div className="d-inline-flex">
                                          <select className="form-select form-select-sm w-xl">
                                              <option value="1">1</option>
                                              <option value="2" selected="">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5">5</option>
                                              <option value="6">6</option>
                                              <option value="7">7</option>
                                              <option value="8">8</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="mt-3">
                                      <p className="text-muted mb-2">Total</p>
                                      <h5>$900</h5>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                  </div>
              </div>
              {/* <!-- end card --> */}
          
          
          </div>
        )
      })}  




            <div className="row my-4">
                <div className="col-sm-6">
                    <Link to="/menu" className="btn btn-link text-muted">
                        <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </Link>
                </div>
                 {/* <!-- end col --> */}
                <div className="col-sm-6">
                    <div className="text-sm-end mt-2 mt-sm-0">
                        <a href="ecommerce-checkout.html" className="btn btn-success">
                            <i className="mdi mdi-cart-outline me-1"></i> Checkout </a>
                    </div>
                </div> 
                {/* <!-- end col --> */}
            </div> 
            {/* <!-- end row--> */}
        </div>

        <div className="col-xl-4">
            <div className="mt-5 mt-lg-0">
                <div className="card border shadow-none">
                    <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                    </div>
                    <div className="card-body p-4 pt-2">

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>Sub Total :</td>
                                        <td className="text-end">$ 780</td>
                                    </tr>
                                    <tr>
                                        <td>Discount : </td>
                                        <td className="text-end">- $ 78</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge :</td>
                                        <td className="text-end">$ 25</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax : </td>
                                        <td className="text-end">$ 18.20</td>
                                    </tr>
                                    <tr className="bg-light">
                                        <th>Total :</th>
                                        <td className="text-end">
                                            <span className="fw-bold">
                                                $ 745.2
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- end table-responsive --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end row --> */}
    
</div>
    </>
  )
}
