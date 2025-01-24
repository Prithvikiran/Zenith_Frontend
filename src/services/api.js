async function connect({ formValues, apiEndpoint, method, headers }) {
    try {
      const response = await fetch(apiEndpoint, {
        method, 
        headers, 
        body: JSON.stringify(formValues),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message || `Something went wrong`);
    }
  }
  
  export default connect;
  


