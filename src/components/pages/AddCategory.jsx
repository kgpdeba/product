import React from "react";
import Sidebar from "../Sidebar";
import Banner from "../Banner";
import AddCategoryForm from "./AddCategoryForm";

const AddCategory = () =>{
    return(
        <>
             <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                    <div className='col-12 col-md-10 m-0 p-0'>
                        <Banner />
                        <AddCategoryForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCategory