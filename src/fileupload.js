import React, { useRef, useState } from 'react';
import axios from 'axios';
import './index.css';
//import swal from 'sweetalert'
import swal from '@sweetalert/with-react'

//import download from 'downloadjs'
function testingswal(){
    swal('usersays', "Hello world!")
}

function validationscore(scoreval){
    
    if (scoreval>100){
        swal("Your Weightage score above 100")
        // swal({
        //     title: "Your Weightage score above 100",
        //   });
        return false
    }else if(scoreval<100){
        swal("Your Weightage score below 100")
        // swal({
        //     title: "Hi,Your Weightage score below 100",
        //   });
        return false
    }else{
        return true    //if score is equall to 100
    }
}

function opentheSwal() {
    swal(
        'File downloaded',
        'Sucessfully!',
        'success'
    );
    
}

function validatefiletype(filename){
    console.log("in filevalidation function............ ")
    if (filename!==""){
        if (filename.includes(".xlsx",1)){
            return true
        
        }else{
            swal("Allow only '.xlsx' file format ")
            // swal({
            //     title: "Allow only '.xlsx' file format ",
            //   });
            return false
        }
        
    }else{
        swal("No file chosen!!!")
        // swal({
        //     title: "No file chosen!!!",
        //   });
        return false
    }
    
}


function defaultvalue(){
    resetdata()    ///clear all data from input box
    document.getElementById("Family_Legal_StatusDeadAlive_Counter").value=5
    document.getElementById("SimpleFamilyMembers_Counter").value=5
    document.getElementById("Legal_Status_DeadAlive_Counter").value=10
    document.getElementById("PriorityCountryCode_Counter").value=5
    document.getElementById("Legal_Status_Current_Counter").value=15
    document.getElementById("Is_Litigated_Counter").value=5
    document.getElementById("FilingApplicationDate_Counter").value=5
    document.getElementById("First_Claim_Counter").value=15
    document.getElementById("NumbersOfIndependentClaims_Counter").value=5
    document.getElementById("ForwardCitationsIndividual_Counter").value=10
    document.getElementById("Is_Opposed_Counter").value=0
    document.getElementById("EstimatedExpiryDate_Counter").value=5
    document.getElementById("Litigation_counter").value=15

    
}
function resetdata(){
    document.getElementById("Family_Legal_StatusDeadAlive_Counter").value=""
    document.getElementById("SimpleFamilyMembers_Counter").value=""
    document.getElementById("Legal_Status_DeadAlive_Counter").value=""
    document.getElementById("PriorityCountryCode_Counter").value=""
    document.getElementById("Legal_Status_Current_Counter").value=""
    document.getElementById("Is_Litigated_Counter").value=""
    document.getElementById("FilingApplicationDate_Counter").value=""
    document.getElementById("First_Claim_Counter").value=""
    document.getElementById("NumbersOfIndependentClaims_Counter").value=""
    document.getElementById("ForwardCitationsIndividual_Counter").value=""
    document.getElementById("Is_Opposed_Counter").value=""
    document.getElementById("EstimatedExpiryDate_Counter").value=""
    document.getElementById("Litigation_counter").value=""

}

function FileUpload() {

    const [file, setFile] = useState('');
    //const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0);
    const el = useRef();

    function validatemaxrange(){
    
        let Family_Legal_StatusDeadAlive_Counter = Number(document.getElementById("Family_Legal_StatusDeadAlive_Counter").value)
        let SimpleFamilyMembers_Counter =Number(document.getElementById("SimpleFamilyMembers_Counter").value)
        let Legal_Status_DeadAlive_Counter =Number(document.getElementById("Legal_Status_DeadAlive_Counter").value)
        let PriorityCountryCode_Counter =Number(document.getElementById("PriorityCountryCode_Counter").value)
        let Legal_Status_Current_Counter =Number(document.getElementById("Legal_Status_Current_Counter").value)
        let Is_Litigated_Counter =Number(document.getElementById("Is_Litigated_Counter").value)
        let FilingApplicationDate_Counter =Number(document.getElementById("FilingApplicationDate_Counter").value)
        let First_Claim_Counter =Number(document.getElementById("First_Claim_Counter").value)
        let NumbersOfIndependentClaims_Counter =Number(document.getElementById("NumbersOfIndependentClaims_Counter").value)
        let ForwardCitationsIndividual_Counter =Number(document.getElementById("ForwardCitationsIndividual_Counter").value)
        let Is_Opposed_Counter =Number(document.getElementById("Is_Opposed_Counter").value)
        let EstimatedExpiryDate_Counter =Number(document.getElementById("EstimatedExpiryDate_Counter").value)
        let Litigation_counter =Number(document.getElementById("Litigation_counter").value)
    
        let sumofallinputbox=(Family_Legal_StatusDeadAlive_Counter+SimpleFamilyMembers_Counter+Legal_Status_DeadAlive_Counter
         +PriorityCountryCode_Counter+Legal_Status_Current_Counter+Is_Litigated_Counter+
         FilingApplicationDate_Counter+First_Claim_Counter+NumbersOfIndependentClaims_Counter+
         ForwardCitationsIndividual_Counter+Is_Opposed_Counter+EstimatedExpiryDate_Counter+Litigation_counter)
        
         let filenameval=''
        try {
            if (file.name !==undefined){
                filenameval=file.name
            }
          }
          catch(err) {
            filenameval=''
          }
    
         
        if (validatefiletype(filenameval)!==true ){
           //don't cal upload function
        }else if(validationscore(sumofallinputbox)!==true){
           //don't cal upload function
        }else{
            uploadFile();
            
            
            
        }
    }

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]
        console.log(file);
        setFile(file)
    }

    const uploadFile = () => {

        let Family_Legal_StatusDeadAlive_Counter = Number(document.getElementById("Family_Legal_StatusDeadAlive_Counter").value)
        let SimpleFamilyMembers_Counter =Number(document.getElementById("SimpleFamilyMembers_Counter").value)
        let Legal_Status_DeadAlive_Counter =Number(document.getElementById("Legal_Status_DeadAlive_Counter").value)
        let PriorityCountryCode_Counter =Number(document.getElementById("PriorityCountryCode_Counter").value)
        let Legal_Status_Current_Counter =Number(document.getElementById("Legal_Status_Current_Counter").value)
        let Is_Litigated_Counter =Number(document.getElementById("Is_Litigated_Counter").value)
        let FilingApplicationDate_Counter =Number(document.getElementById("FilingApplicationDate_Counter").value)
        let First_Claim_Counter =Number(document.getElementById("First_Claim_Counter").value)
        let NumbersOfIndependentClaims_Counter =Number(document.getElementById("NumbersOfIndependentClaims_Counter").value)
        let ForwardCitationsIndividual_Counter =Number(document.getElementById("ForwardCitationsIndividual_Counter").value)
        let Is_Opposed_Counter =Number(document.getElementById("Is_Opposed_Counter").value)
        let EstimatedExpiryDate_Counter =Number(document.getElementById("EstimatedExpiryDate_Counter").value)
        let Litigation_counter =Number(document.getElementById("Litigation_counter").value)
    
        
        
        const formData = new FormData();
        formData.append('file', file)
        formData.append('Family_Legal_StatusDeadAlive_Counter', Family_Legal_StatusDeadAlive_Counter)
        formData.append('SimpleFamilyMembers_Counter', SimpleFamilyMembers_Counter)
        formData.append('Legal_Status_DeadAlive_Counter', Legal_Status_DeadAlive_Counter)
        formData.append('PriorityCountryCode_Counter', PriorityCountryCode_Counter)
        formData.append('Legal_Status_Current_Counter', Legal_Status_Current_Counter)
        formData.append('Is_Litigated_Counter', Is_Litigated_Counter)
        formData.append('First_Claim_Counter', First_Claim_Counter)
        formData.append('FilingApplicationDate_Counter', FilingApplicationDate_Counter)
        formData.append('NumbersOfIndependentClaims_Counter', NumbersOfIndependentClaims_Counter)
        formData.append('ForwardCitationsIndividual_Counter', ForwardCitationsIndividual_Counter)
        formData.append('Is_Opposed_Counter', Is_Opposed_Counter)
        formData.append('EstimatedExpiryDate_Counter', EstimatedExpiryDate_Counter)
        formData.append('Litigation_counter', Litigation_counter)
        

            axios.post('http://localhost:4500/upload/',formData, {
                    headers:
                {
                    'Content-Disposition': "attachment; filename=template.xlsx",
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                },
               responseType: 'arraybuffer',
                onUploadProgress: (ProgressEvent) => {
                    let progress = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress)
                }
            }).then(res => {            
                console.log("in result final");

                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'output.xlsx');
                document.body.appendChild(link);
                link.click();
                opentheSwal()
                //download(res.blob(), "output.xlsx");
               // console.log(res);
                //download(res, "output.xlsx");
               // console.log(res);
                // const blob = res.blob();
                // download(blob, 'output.xlsx');
                // console.log("file downloaded")
                // console.log(res);
                // getFile({ name: res.data.name, path: 'http://localhost:4500' + res.data.path })
                // console.log("result is")
                // console.log(data)
    
                // el.current.value = "";
            }).catch(err => {
                console.log("in error")
                console.log(err)
            })
        }
        
    return (
        <div >

<nav className="">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between py-4">

      <img className="w-28 h-28" src="Effectual-Logo-1.png" alt="abc"/>

    </div>
  </div>

</nav>
              <div className="container mx-auto bg-white shadow rounded " >
            <div className="xl:w-full border-b border-gray-300 py-5">
                <div className="flex items-center w-11/12 mx-auto">
                    <div className="container mx-auto">
                        <div className="mx-auto xl:w-full">
                            <p className="text-lg text-gray-800 font-bold">Patent Ranking Tool</p>
                            <div className="text-gray-500 pt-1">
                            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                {/* <div className="progessBar" style={{ width: progress }}>{progress}</div>
                 */}
                <div className="h-20 w-20 mx-auto bg-white rounded-full shadow border-8 border-indigo-700 flex items-center justify-center">
                <p className="text-indigo-700 text-xs font-bold">{progress}</p>
            </div>

                <button onClick={validatemaxrange} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Upload</button>
                <button onClick={testingswal} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">testing</button>
               
            </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col  items-center py-2 px-4">
                {/* Code block starts */}
                
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Family Legal Status(Dead/Alive)
                    </label>
                    <input type="number" id="Family_Legal_StatusDeadAlive_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>
                
                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Geographical Coverage
                    </label>
                    <input  type="number" id="SimpleFamilyMembers_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>

                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Legal Status (Dead/Alive)
                    </label>
                    <input type="number" id="Legal_Status_DeadAlive_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>


                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Priority Country Code
                    </label>
                    <input type="number" id="PriorityCountryCode_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>

                {/* Code block ends */}
            </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col  items-center py-8 px-4">
                {/* Code block starts */}
                
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Grant/ Published application
                    </label>
                    <input type="number" id="Legal_Status_Current_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>

                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Family member in Litigation
                    </label>
                    <input type="number" id="Is_Litigated_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>


                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Prosecution Period
                    </label>
                    <input type="number" id="FilingApplicationDate_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>


                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    First claim word count
                    </label>
                    <input type="number" id="First_Claim_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>

                {/* Code block ends */}
            </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col  items-center py-2 px-4">
                {/* Code block starts */}
                
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    No. of Independent Claims
                    </label>
                    <input type="number" id="NumbersOfIndependentClaims_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>

                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Forward Citation Count
                    </label>
                    <input type="number" id="ForwardCitationsIndividual_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>


                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Prior art for Litigation 
                    </label>
                    <input type="number" id="Is_Opposed_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>


                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Remaining Life
                    </label>
                    <input type="number" id="EstimatedExpiryDate_Counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>
                

                {/* Code block ends */}
            </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col  items-center py-8 px-4">
                {/* Code block starts */}
                
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col mx-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                    Is Litigation
                    </label>
                    <input type="number" id="Litigation_counter" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-7 flex items-center pl-3 text-sm text-black-800 border-green-400 rounded border shadow" />
                    
                </div>
                
                     
                
                {/* Code block ends */}
            </div>
        </div>


            <form>
                <div>
                    <div className='justify-start'>
                   
                        </div>
                    <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 flex justify-end rounded-bl rounded-br">
                       
                        <button type="button" className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out" onClick={resetdata}>Reset Values</button>
                        <button type="button"  className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" onClick={defaultvalue}>Enter Default Values </button>
                    
                    </div>
           
                </div>
            </form>

            <style>
                {` .checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
            </style>
        </div>
        

            {/* {data.path && <div><textarea value={data.path} onChange={uploadFile} /></div>}
            {data.path && <img src={data.path} alt={data.name} />} */}

        </div>


    );
}

export default FileUpload;
