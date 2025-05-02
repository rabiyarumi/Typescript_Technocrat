{
  //========= spread operator ===========\\
  const sis1: string[] =["Urmi", "Surmi", "Ruby"];
  const sis2: string[] =["Abira", "Afi", "Afroz"];
  sis1.push(...sis2)

  const mentors1 ={
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
  }

  const mentors2 ={
    prisma: "Firoz",
    Next: "Tanmoy",
    cloud: "Nahid"
  }

  const mentorList ={
    ...mentors1,
    ...mentors2
  }


  //========= Rest operator ============\\
  const greetFriends = (...friends: string[]) => {
   friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
  }
  
  greetFriends("abul", "babul", "Kabul")
}

