import React, { useRef, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import LoadingSpinner from './LoadingSpinner';

function refreshPage(){
    window.location.reload();
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

function downloadfile(){
    
    document.getElementById("image3-changetext").className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-white"
    document.getElementById("step3-ing").src = "https://i.ibb.co/DwNs7zG/Steps.png";
    document.getElementById("loadingpage").style.display = "none";
    document.getElementById("downloadingfile").style.display = "block";
    document.getElementById("homepage").style.display = "block";
}

function downloadfilefun(){

    //alert("downloading file function called")
    
    document.getElementById("downloadinglink").click();
    
}

function defaultvalue(){
   // resetdata()    ///clear all data from input box
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

function checkfile(){
    var filename=document.getElementById('formFile')
        if (filename.value===""){
            swal("No file chosen!!!")
        }else{
            if (filename.value.includes(".xlsx",1)){
                //alert(`select file name is ${filename.value}`)
                changepage()//calling second page function 
            }else{
                swal("Allow only '.xlsx' file format ")
            }
            
        }
      
}

function secondpagefunction(){
    document.getElementById("step2-ing").src = "https://i.ibb.co/DwNs7zG/Steps.png";
    document.getElementById("image2-changetext").className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-white"
    document.getElementById("step3-ing").src = "https://i.ibb.co/wNZ4nzy/Steps2.png";
    document.getElementById("all-category").style.display = "none";
    //document.getElementById("all-category").style.display = "none";loadingpage
    document.getElementById("loadingpage").style.display = "block";
    //document.getElementById("loadingpage").style.display = "none";
}


function changepage(){
    
    console.log("change page called")
    document.getElementById("step1-ing").src = "https://i.ibb.co/DwNs7zG/Steps.png";
    document.getElementById("step2-ing").src = "https://i.ibb.co/wNZ4nzy/Steps2.png";
    document.getElementById("image1-changetext").className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-white"
    
    //changing page 
    const targetDiv = document.getElementById("firstpage");

    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }

      document.getElementById("all-category").style.display = "block";
      //second page called
}


function MyApp() {
    const [file, setFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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

        if(validationscore(sumofallinputbox)!==true){
            //don't cal upload function
         }else{
             //uploadFile();
             secondpagefunction()
             uploadFile()
             //downloadfile()
         }  
        

}

    const handleChange = (e) => {
        
        setProgess(0)
        const file = e.target.files[0]
        console.log(file);
        setFile(file)
    }

    const generatedownload = (res) => {
        console.log("in result final");
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.id = "downloadinglink";
                link.setAttribute('download', 'output.xlsx');
                document.body.appendChild(link);
                // link.click();

                return(Promise.resolve(1))
                
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
                setIsLoading(true);      
                generatedownload(res).then(function(){
                    
                downloadfile();
                })
                //opentheSwal()
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
        
        <>
        
            <div id ='mainpage' className="flex items-center justify-center" >
                <div class="xl:w-10/12 w-full px-8">
                    <div class="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
                        <div class="w-52 h-16 relative md:mt-0 mt-4">
                            <img id ='step1-ing' src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step1" class="w-full h-full" />
                            <div id = 'image1-changetext'class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-indigo-800">
                                <p class="w-full text-sm font-medium leading-4 ">Choose File</p>
                                <p class="w-full text-xs mt-1 leading-none ">Select Input File</p>
                            </div>
                        </div>
                        <div class="w-52 h-16 relative md:mt-0 mt-4">
                            <img id ='step2-ing' src="https://i.ibb.co/c2k4Gbr/Steps3.png" alt="step2" class="w-full h-full" />
                            <div id = 'image2-changetext' class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-gray-700">
                                <p class="w-full text-sm font-medium leading-4 ">Configure Weightage</p>
                                <p class="w-full text-xs mt-1 leading-none ">Customize Ranking</p>
                            </div>
                        </div>
                        <div class="w-52 h-16 relative md:mt-0 mt-4">
                            <img id ='step3-ing' src="https://i.ibb.co/c2k4Gbr/Steps3.png" alt="step3" class="w-full h-full" />
                            <div id = 'image3-changetext' class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-gray-700">
                                <p class="w-full text-sm font-medium leading-4 ">Validation</p>
                                <p class="w-full text-xs mt-1 leading-none ">Check Input file</p>
                            </div>
                        </div>
                        <div class="w-52 h-16 relative lg:mt-0 mt-4">
                            <img id ='step4-ing' src="https://i.ibb.co/XCdjrhm/Steps4.png" alt="step4" class="w-full h-full" />
                            <div id = 'image4-changetext' class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0 text-gray-700">
                                <p class="w-full text-sm font-medium leading-4 ">Download Output</p>
                                <p class="w-full text-xs mt-1 leading-none ">Ranked Patents</p>
                            </div>
                        </div>
                    </div>
                    <div id = 'firstpage' class="xl:px-24">
                        <div class="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                                            fill="#4B5563"
                                        />
                                    </svg>
                                </div>
                                <p class="text-sm text-gray-800 pl-3">Patent Numbers & Bibliographic data should be in Template file format. Download Template file <a class="text-blue-700" href="http://www.effepro.com/Template-file.xlsx" target="_blank"> here</a></p>
                            </div>
                            <button class="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                                <svg aria-label="Close this banner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="#79808F" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Choose File</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Selected file should be in xlsx format with Patent numbers & Bibliographic data in template format.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">

                                    <div class="md:w-64">
                                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Default file input example</label>
                                <input onChange={handleChange} class="form-control block  w-full px-3  py-1.5  text-base  font-normal  text-gray-700    bg-white bg-clip-padding    border border-solid border-gray-300    rounded    transition    ease-in-out    m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
 
                                                          </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4 pt-8">
                                   
                                    <button className="mx-2 my-2  bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm" onClick={checkfile}>Next</button>
               
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div id ='all-category' class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4" style={{display:"none"}}>

                            <div>
                                
                                <div class="md:flex items-center  lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="password">Family Legal Status(Dead/Alive)</label>
                                        <input  type="number" id="Family_Legal_StatusDeadAlive_Counter" class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"  />
                                    </div>
                                    
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="securityCode"> Geographical Coverage</label>
                                        <input type="number" id="SimpleFamilyMembers_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>

                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="securityCode">Legal Status (Dead/Alive)</label>
                                        <input type="number" id="Legal_Status_DeadAlive_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="altPhone">Family member in Litigation</label>
                                        <input type="number" id="Is_Litigated_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadowborder-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    
                                    
                                </div>
                                <div class="md:flex items-center  mt-4">
                                    <div class="md:w-64">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="recoverEmail">Priority Country Code</label>
                                        <input type="number" id="PriorityCountryCode_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="altPhone"> Grant/ Published application</label>
                                        <input type="number" id="Legal_Status_Current_Counter"  class="w-full p-3 mt-3 bg-gray-100 border border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="altPhone">No. of Independent Claims</label>
                                        <input type="number" id="NumbersOfIndependentClaims_Counter"  class="w-full p-3 mt-3 bg-gray-100 border border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="altPhone">First claim word count</label>
                                        <input type="number" id="First_Claim_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    
                                </div>
                                <div class="md:flex items-center  mt-4">
                                    <div class="md:w-64">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="recoverEmail">Prosecution Period</label>
                                        <input type="number" id="FilingApplicationDate_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="altPhone">Prior art for Litigation</label>
                                        <input type="number" id="Is_Opposed_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="recoverEmail"> Forward Citation Count</label>
                                        <input type="number" id="ForwardCitationsIndividual_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"/>
                                    </div>

                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="recoverEmail"> Is Litigation</label>
                                        <input type="number" id="Litigation_counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
                                    </div>
                                   
                                    
                                </div>

                                <div class="md:flex items-left  mt-4">
                                    <div class="md:w-78">
                                        <label class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" id="recoverEmail">Remaining Life</label>
                                        <input type="number" id="EstimatedExpiryDate_Counter"  class="w-full p-3 mt-3 bg-gray-100 border rounded border-green-400 rounded border shadow focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800 " />
                                    </div>
                                    
                                    
                                    <div class="w-full md:mt-0 mt-4 pt-8 flex justify-end">
                                    
                                <button className="mx-2 my-2  bg-gray-500 transition duration-150 ease-in-out hover:bg-gray-500 rounded text-white px-8 py-3 text-sm" onClick={defaultvalue}>Enter Default Values</button>
                                <button className="mx-2 my-2  bg-red-400 transition duration-150 ease-in-out hover:bg-red-400 rounded text-white px-8 py-3 text-sm" onClick={resetdata}>Reset values </button>
                                <button className="mx-2 my-2  bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm" onClick={validatemaxrange}>Next</button>
              
                                   
                                </div>

                                </div>



                                
            
                            </div>
                        </div>
                </div>
            </div>
            <div id ='loadingpage' className="container mx-auto flex justify-center" style={{display:"none"}}>
            <LoadingSpinner />
                </div>
            <div id ='loadingpage1' className="py-8 px-8  container mx-auto flex justify-center" style={{display:"none"}}>
                <div className="md:ml-44 py-8 px-8 w-8/12  h-5 bg-green-200 rounded border rounded border-green-400 rounded border shadow">
                    <div className="w-full bg-indigo-700 h-3 bg-green-200 rounded relative">
                        <div className="absolute right-0">
                            <div className="relative bg-indigo-700  px-1 py-1 rounded mt-4 -mr-5">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#4c51bf">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                 
                                <p className="text-white text-xs font-bold">{progress}</p>
                                <LoadingSpinner />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<div class='mt-16 lg:flex justify-center border-b border-gray-200 pb-16' >

<button id = 'downloadingfile'  class="mx-2 my-2 flex items-center bg-red-400 transition duration-150 ease-in-out red-400 rounded rounded border border-green-300 text-white pl-3 pr-6 py-2 text-sm font-weight: 600;"onClick={downloadfilefun} style={{display:"none"}} >
      <svg class="fill-current w-full  h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Click to Download File</span>
         </button>

         <button id = 'homepage'  class="mx-2 my-2 flex items-right bg-indigo-700 transition duration-150 ease-in-out indigo-700 rounded rounded border border-indigo-700 text-white pl-3 pr-6 py-2 text-sm font-weight: 600;"onClick={refreshPage} style={{display:"none"}} >
      
      <span>Back To Home</span>
         </button>

         </div>

        </>
    );
}

export default MyApp;
