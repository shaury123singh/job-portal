import Navbar from '../src/Components/Navbar/Navbar'
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/SearchBar/Searchbar'
import Jobcard from '../src/Components/JobCard/Jobcard'
import { useEffect, useState } from "react";
import { collection, query,where, orderBy, getDocs } from "firebase/firestore";
import {db} from './firebase.config'
function App() {

  const [jobs, setJobs] = useState([]);
// Fetching the data from Firebase  
  const fetchJobs = async() =>{
    // tempJob Array for pushing here the Firebase Data in Array Form
    const tempJobs = []
    const jobsRef = query(collection(db,"Jobs"));
    // orderBy used for arrange the data in Desending Order using 'PostedOn' Date 
    const q = query(jobsRef, orderBy("postedOn" ,"desc"));
    const req = await getDocs(q);
    req.forEach((job)=>{
      tempJobs.push(
        {...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  }
  
  const fetchJobsCustom = async(jobCriteria) =>{
    const tempJobs = []
    const jobsRef = query(collection(db,"Jobs"));
    // const q = query(jobsRef,where("jobtype", "==" ,jobCriteria.jobtype),where("title", "==" ,jobCriteria.title),where("location", "==" ,jobCriteria.location),where("experience", "==" ,jobCriteria.experience), orderBy("postedOn" ,"desc"));
    const q = query(
      jobsRef,
      // where("jobtype", "==", jobCriteria.jobtype),
      where("title", "==", jobCriteria.title),
      // where("location", "==", jobCriteria.location),
      // where("experience", "==", jobCriteria.experience),
      orderBy("postedOn", "desc")
    );
    const r = query(
      jobsRef,
      where("jobtype", "==", jobCriteria.jobtype),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q,r);
    req.forEach((job)=>{
      tempJobs.push( 
        {...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  }  
  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div className=''>
      <h1 className='Headline bg-slate-500 text-3xl  '></h1>
      <Navbar/>
      <Header/>
      <Search fetchJobsCustom ={fetchJobsCustom}/>
      {jobs.map((job)=>(
      <Jobcard key={job.id}{...job} />
      ))}
    </div>
  )
}

export default App






  //   // orderBy used for arrange the data in Desending Order using 'PostedOn' Date 
  //   // const q = query(JobsRef.where("experience","==",jobCritaria.experience), orderBy("postedOn" ,"desc"));
  //       ,orderBy("postedOn" , "desc")
  //       .where("location", "==", jobCritaria.location)
  //       .where("experience","==",jobCritaria.experience)
  //       .where("jobtype","==",jobCritaria.jobtype)
  //       .where("title","==",jobCritaria.title))
  //       const req = await getDocs(q);
  //       req.forEach((job)=>{
  //         tempJobs.push(
  //           {...job.data(),
  //           id: job.id,
  //           postedOn:job.data().postedOn.toDate()
  //         });
  //       });
  //       setJobs(tempJobs);
  //     }





    // tempJob Array for pushing here the Firebase Data in Array Form

//     const req = await firestore
//         .collection("Jobs")
//         .orderBy("postedOn" , "desc")
//         .where("location", "==", jobCritaria.location)
//         .where("experience","==",jobCritaria.experience)
//         .where("jobtype","==",jobCritaria.jobtype)
//         .where("title","==",jobCritaria.title)
//         .get();
//       const tempJobs = req.docs.map((job)=>({
//         ...job.data(),
//         id: job.id,
//         postedOn:job.data().postedOn.toDate(),
//       }));
// setJobs(tempJobs);
//     };



    // const tempJobs = []
    // const  JobsRef = query(collection(db,"Jobs"));
    // orderBy used for arrange the data in Desending Order using 'PostedOn' Date 
    
    
    
  