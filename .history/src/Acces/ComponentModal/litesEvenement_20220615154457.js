import React from 'react'

const litesEvenement =()=> {
    const [user,setUser] = useState({title:"",date:"",tel:"",mail:""})
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