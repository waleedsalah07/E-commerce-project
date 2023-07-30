import styles from "./Footer.module.css"
import imag_1 from "../../images/download.png"
import imag_2 from "../../images/images.png"
import imag_3 from "../../images/download (1).png"
import imag_4 from "../../images/images (2).png"


const Footer =() => {
let Token = localStorage.getItem('userToken')
  return (
 <>
 
{Token?  <div className=" mt-5 bg-main-light border footer fixed bottom-0 end-0 start-0  "  id="Footer">
   <div className={styles.words}>
   <h3 className={styles.word-1}> Get the fresh Cart app</h3>
     <h6 className={styles.word-2}> we will send you a link,open it on your phone to download the app</h6>
   </div>
   <div className="d-flex justify-content-center mt-3 border-bottom py-2">
   <input type="text" className='form-control w-75 mb-2 mx-3' placeholder='Email..' />
   <button  className =' btn-sm btn bg-main  text-white ms-3 mx-3 'type='submit'> share app Link</button>
   </div>
   <div  className='d-flex  justify-content-between  border-bottom  container'>
   <div className='d-flex align-items-center py-4 ms-5 '>
     <h5 className="d-none d-md-block h6  ">Payment Partners</h5>
     <img   className=" d-none d-md-block imgg  mx-2 "  src={imag_4} alt="" />
     <img    className=" d-none d-md-block imggg " src={imag_3} alt="" />
   
   </div>
   <div className='d-flex align-items-center ms-5 '>
   <h6 className="d-none d-md-block h6  "> Get delivers with Fresh cart </h6>
   <img   className=" d-none d-md-block imgg mx-2  "  src={imag_1} alt="" />
     <img   className="d-none d-md-block imgg    "  src={imag_2} alt="" />
     </div>
   </div>
   </div>:null}
</>
  )
}
export default Footer
