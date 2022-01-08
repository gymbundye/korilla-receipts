function Receipt(props) {

  const {receiptData} = props

    return (

      <div className="Receipt">

        <p>Person:{receiptData.person}</p>
        <p>Order: {receiptData.order}</p>
        <p>Main:  {receiptData.main}</p>
        <p>Rice:  {receiptData.rice}</p>
        <p>Sauce: {receiptData.sauce}</p>
        <p>Drink: {receiptData.drink}</p>
        <p>Cost:  {receiptData.cost}</p>
        

      </div>
    );
  }
  
  export default Receipt;