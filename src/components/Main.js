import receipt1 from "../Data"
import Receipt from "./Receipt"

function Main(){


    return(
    <div>

        {receipt1.map((receiptData, index) => {
            return <Receipt  receiptData={receiptData} key={index}/>

        })
          }

    </div>


    )
}
export default Main





