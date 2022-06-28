import React from 'react'

const litesEvenement =()=> {
    const [even,setUser] = useState({title:"",date:""})
     const [eventList,setEventList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"Apprenents"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
  return (

    <div>litesEvenement</div>
  )
}

export default litesEvenement