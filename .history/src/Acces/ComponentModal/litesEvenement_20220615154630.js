import React from 'react'

const litesEvenement =()=> {
    const [event,setEvent] = useState({title:"",date:""})
     const [eventList,setEventList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"evenement"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return event
            }))
        })
        
    },[])
  return (

    <div>litesEvenement</div>
  )
}

export default litesEvenement