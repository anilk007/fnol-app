First Notice of Loss (FNOL) Web application

 A customer reports an incident, and the system must validate, process, audit, and store the information.

 below are implemented :
 (1) Create a FNOL Submission Form with fields like policy number, incident date, location, description, and contact info.
 (2) Implement Context API to manage app-wide state such as form data, submission status, and API responses.
(3)
Add a custom Axios interceptor to append headers (e.g., correlation IDs, auth tokens) and 
to centrally log or manipulate API responses.
(4) On submission:

Show a loading indicator
Call the Node.js API
Redirect to Success or Error screen depending on API response (e.g., incidentId returned vs. validation failure).
Store the submission result in Context so the success page can show details (e.g., generated reference number).

