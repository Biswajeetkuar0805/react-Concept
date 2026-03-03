import Child from "./child"

const Parent=()=>{
const cricketers = [
  {
    name: "Virat Kohli",
    age: 35,
    jerseyNo: 18,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "Rohit Sharma",
    age: 36,
    jerseyNo: 45,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "Jasprit Bumrah",
    age: 30,
    jerseyNo: 93,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "MS Dhoni",
    age: 42,
    jerseyNo: 7,
    specialist: "Wicketkeeper",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "Hardik Pandya",
    age: 30,
    jerseyNo: 33,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "Ravindra Jadeja",
    age: 35,
    jerseyNo: 8,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },
  {
    name: "KL Rahul",
    age: 31,
    jerseyNo: 1,
    specialist: "Wicketkeeper",
    imageUrl: "REAL_IMAGE_URL",
    country: "India"
  },

  {
    name: "Babar Azam",
    age: 29,
    jerseyNo: 56,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "Pakistan"
  },
  {
    name: "Shaheen Afridi",
    age: 23,
    jerseyNo: 10,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "Pakistan"
  },
  {
    name: "Mohammad Rizwan",
    age: 31,
    jerseyNo: 16,
    specialist: "Wicketkeeper",
    imageUrl: "REAL_IMAGE_URL",
    country: "Pakistan"
  },

  {
    name: "Joe Root",
    age: 33,
    jerseyNo: 66,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "England"
  },
  {
    name: "Ben Stokes",
    age: 32,
    jerseyNo: 55,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "England"
  },
  {
    name: "Jos Buttler",
    age: 33,
    jerseyNo: 63,
    specialist: "Wicketkeeper",
    imageUrl: "REAL_IMAGE_URL",
    country: "England"
  },

  {
    name: "Steve Smith",
    age: 34,
    jerseyNo: 49,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "Australia"
  },
  {
    name: "David Warner",
    age: 37,
    jerseyNo: 31,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "Australia"
  },
  {
    name: "Pat Cummins",
    age: 30,
    jerseyNo: 30,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "Australia"
  },
  {
    name: "Glenn Maxwell",
    age: 35,
    jerseyNo: 32,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "Australia"
  },

  {
    name: "Kane Williamson",
    age: 33,
    jerseyNo: 22,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "New Zealand"
  },
  {
    name: "Trent Boult",
    age: 34,
    jerseyNo: 18,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "New Zealand"
  },

  {
    name: "Shakib Al Hasan",
    age: 36,
    jerseyNo: 75,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "Bangladesh"
  },

  {
    name: "Quinton de Kock",
    age: 31,
    jerseyNo: 12,
    specialist: "Wicketkeeper",
    imageUrl: "REAL_IMAGE_URL",
    country: "South Africa"
  },
  {
    name: "Kagiso Rabada",
    age: 28,
    jerseyNo: 25,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "South Africa"
  },

  {
    name: "Chris Gayle",
    age: 44,
    jerseyNo: 45,
    specialist: "Batter",
    imageUrl: "REAL_IMAGE_URL",
    country: "West Indies"
  },
  {
    name: "Andre Russell",
    age: 35,
    jerseyNo: 12,
    specialist: "All-rounder",
    imageUrl: "REAL_IMAGE_URL",
    country: "West Indies"
  },

  {
    name: "Lasith Malinga",
    age: 40,
    jerseyNo: 99,
    specialist: "Bowler",
    imageUrl: "REAL_IMAGE_URL",
    country: "Sri Lanka"
  }
]




    
    return(
        <div id="parent" className="parent">
{/*  
         <Child name="Sundari" age={28} email="kavya@gmail.com"/>
         <hr/>
           <Child name="Kavya" age={24} email="kavya@gmail.com"/>
           <hr/>
             <Child name="Mala" age={28} email="kavya@gmail.com"/>
             <hr/> */}
             {
                cricketers.map((u)=>{
                   return <Child data={u}/>

                   
                })
             }

    

        </div>


    )
}

export default Parent