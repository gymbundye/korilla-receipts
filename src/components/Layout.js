
import receipts from "../Data";
import Receipt from "./Receipt";

export default function Layout() {
  return( <div>
     {receipts.map((receipt) => {return <Receipt receipt = {receipt} />})
     }
  </div>)
 }