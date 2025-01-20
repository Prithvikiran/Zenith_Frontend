async function submitform ({formValues,apiEndpoint}) {

    try
    {
        const response= await fetch(apiEndpoint,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify(formValues)
        });
        if(!response.ok){
            throw new Error(`HTTP error! Status:${response.status}`);
        }
        const data = await response.json()
        return data;
    } catch (error){
        throw new Error(error.message || `Something went wrong`);
    }

}

export default submitform;
