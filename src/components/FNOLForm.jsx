import { use, useContext } from 'react'
import { useState } from 'react'


import DisplaySpinner from '../shared/utility/spinner/DisplaySpinner';


function FNOLForm() {

    // policy number, incident date, location, description, and contact info

    const [policyNumber, setPolicyNumber] = useState(0);
    const [incidentDate, setincidentDate] = useState(new Date);
    const [location, setLocation] = useState(new Date);
    const [description, setDescription] = useState(new Date);
    const [contactInfo, setContactInfo] = useState(new Date);

    const async handleSubmit = () => {

        console.log("handleSubmit is called");


        try{

          const apiResponse =  await APIConnect(FNOLURL, formData);

          let fnolDataProviderContext = useContext(FNOLDataProvider);

          fnolDataProviderContext.put(apiResponse.data.reference_number)


          navigate(<FNOLFormSuccess apiResponse={apiResponse}></FNOLFormSuccess>)

        } catch (error e){

            navigate(<FNOLFormError error={e}></FNOLFormError>) 
        }
        

    }

  return (
   <>
      <div>FNOLForm</div>

      <loading && DisplaySpinner>

        policy_number : <input type="text" name="policyNumber"
          onChange={setPolicyNumber(e.target.value())}></input>
        incident date : <input type="text" name="incidentDate"
        onChange={setincidentDate(e.target.value())}></input>
        location : <input type="text" name="location"
         onChange={setLocation(e.target.value())}></input>
        description : <input type="text" name="description"
        onChange={setDescription(e.target.value())}>></input>
        contact info : <input type="text" name="contactInfo"
        onChange={setContactInfo(e.target.value())}></input>

        <input type="submit" value="submit" onClick={handleSubmit}></input>

   </>
  )
}

export default FNOLForm
