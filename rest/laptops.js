const IP="192.168.100.35";
const PORT=3002;
const URL="http://"+IP+":"+PORT+"/"

export const getAllLaptops=(fnRefreshList)=>{
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}

export const saveLaptopsRest=(laptop,fnShowMessage)=>{

    const config={
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            marca: laptop.brand,
            procesador: laptop.processor,
            memoria: laptop.memory,
            disco: laptop.disk
            
        })
       
    }

    fetch(
        URL+"laptops"
    ).then(response=>response.json()
    ).then((body)=>{
        fnShowMessage();
        console.log(body);
    });
}