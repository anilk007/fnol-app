import { BrowserRouter } from 'react'
import FNOLForm from '../components/FNOLForm'



function Router() {



   

  return (
   <>
     {
        switch(path):
          "/" : <Home></Home>
          "/fnol-form" : <FNOLForm></FNOLForm>
          "/fnol-form-success" : <FNOLFormSuccess></FNOLFormSuccess>
          "/fnol-form-error" : <FNOLFormError></FNOLFormError>


     }

    

      

   </>
  )
}

export default Router
