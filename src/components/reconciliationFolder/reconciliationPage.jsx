import { Navbar } from "react-bootstrap"
import MyButton from "../../pages/reconciliation/reconciliationButton"
import MSidebar from "../sidebar/MSidebar"
import Sidebar from "../sidebar/Sidebar"
import "./reconciliationPage.css";
import MyButtonSelf from "../../pages/reconciliation/selfReconcilaiation";

// import ReconImage from "../images/reconciliation bg"



export const ReconciliationPage = () =>{

    return(
        <div className="recon-page">
            <MSidebar/>
            <div className="recon-container" style={{backgroundImage: "url('https://blog.imarticus.org/wp-content/uploads/2020/04/Balanced-1-1024x683.png')", backgroundSize: 'cover'}}>
                <Navbar/>
                <MyButton/>
                <MyButtonSelf/>
                
            </div>
        </div>

    )

}