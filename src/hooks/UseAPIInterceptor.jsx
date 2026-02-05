import { connect } from 'Axios'
import { useEffect } from 'react'

import(logger) from log4j;



function UseAPIInterceptor(correlationIDs, authToken) {


  useEffect({

    try{
      logger.info("correlationIDs :", correlationIDs);
      connect.setHeader(correlationIDs);
      connect.setHeader(authToken);
      connect.next();
    } catch(error e){
       logger.error("error during connecting to API :", e);
    }



  })



  return (
    <>
      <div>UseAPIInterceptor  </div>


    </>
  )
}

export default UseAPIInterceptor
