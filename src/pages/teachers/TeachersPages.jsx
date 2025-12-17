
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function TeachersPagas() {

    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("");
    const [isModalOpen, setisModalOpen] = useState(false)
    const [name , setname] = useState("")
    const [avatar, setAvatar] = useState("")
    const [age, setAge]  = useState("")
    const [experience, setExperience] = useState("")
    const [profession, setProfession] = useState("")
    const [rating, setRating]  = useState("")
    const [gmail, setGmail] = useState("")
    const [user, setUsername] = useState("")
    const [phone, setPhone ] = useState("")
    const [linkedin , setLinkedin] = useState("")
    const [ selected , setSelected ] = useState(null)

    async function getAllTeachers() {
        try {
            let res = await axios.get(
                `https://69242f5d3ad095fb84730f49.mockapi.io/teachers?name=${search}`
            )
            setTeachers(res.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllTeachers();
    }, [search])
    console.log(teachers);

    async function deleteTeacher(id) {
        try {
            await axios.delete(`https://69242f5d3ad095fb84730f49.mockapi.io/teachers/${id}`)
            toast(`You deleted the teacher with ID ${id}`)
            getAllTeachers();
        } catch (err) {
            console.log(err);
        }
    }

  async  function addTeacher(e){
    e.preventDefault()
try{
   if(selected){
       await axios.put(`https://69242f5d3ad095fb84730f49.mockapi.io/teachers/${selected}`, { name, avatar, age, experience, profession, rating, gmail, user, phone, linkedin })

   }else{
       await axios.post("https://69242f5d3ad095fb84730f49.mockapi.io/teachers", { name, avatar, age, experience, profession, rating, gmail, user, phone, linkedin })

   }
    toast.success("Siz O'qiduvchini qo'shdingiz");
    setisModalOpen(false)
    getAllTeachers()
    setSelected(null)
    setname("")
    setAvatar("")
    setAge("")
    setExperience("")
    setProfession("")
    setRating("")
    setGmail("")
    setUsername("")
    setPhone("")
    setLinkedin("")
}catch(err){
    console.log(err);
    
}
    }

   async function editTeacher(id){
    setSelected(id)
    setisModalOpen(true);
    try{
        let res = await axios.get(`https://69242f5d3ad095fb84730f49.mockapi.io/teachers/${id}`);
        console.log(res.data.name);
        setname(res.data.name)
        setAvatar(res.data.avatar)
        setAge(res.data.age)
        setExperience(res.data.experience)
        setProfession(res.data.profession)
        setRating(res.data.rating)
        setGmail(res.data.gmail)
        setUsername(res.data.user)
        setPhone(res.data.phone)
        setLinkedin(res.data.linkedin)
        
    }catch(err){
   console.log(err);
    }
}
 
    function closeModal(){
        setisModalOpen(false);
        setSelected(null)
        setname("")
        setAvatar("")
        setAge("")
        setExperience("")
        setProfession("")
        setRating("")
        setGmail("")
        setUsername("")
        setPhone("")
        setLinkedin("")
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center flex-col h-screen">
                <div className=" relative w-[100px] h-[100px] border-4px border-black-500 rounded-[50px] animate-spin font-bold  flex
            items-center justify-center flex-col   ">
                    <span className="absolute  w-20px h-4px bg-[white] rounded-4px top-[-4px] block "></span>
                </div>
            </div>
        )
    }


    return (
        <>
            <div class="flex-1 transition-all duration-300  bg-gray-50">
                <header
                    class="bg-white  border-b border-gray-200  px-8 py-4 flex items-center justify-between 
            top-0 z-10 transition-colors duration-300">
                    <div class="flex items-center gap-4">
                        <h1 class=" text-black">School Management System</h1>
                    </div>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all  
                dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input 
                dark:hover:bg-input/50 size-9 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-moon h-5 w-5" aria-hidden="true">
                            <path
                                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401">
                            </path>
                        </svg></button>
                </header>
                <main class="p-8">
                    <div>
                        <div class="flex items-center justify-between mb-8 gap-[5px]">
                            <div>
                                <h2 class="text-black mb-2">Teachers</h2>
                                <p class="text-[12px] text-gray-400">Showing 24 of 24 teachers</p>
                            </div>

                            <button
                                onClick={() => setisModalOpen(true)}
                                class="inline-flex items-center border  text-white text-[12px]  rounded-md text-sm font-medium transition-all     text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-plus h-5 w-5" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>Add Teachers</button>
                        </div>
                        <div class="mb-6 space-y-4">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                    aria-hidden="true">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                                <input onChange={(e) => setSearch(e.target.value)}
                                    type="text" className="flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base  outline-none 
                               pl-10 bg-white  border-gray-200"     placeholder="Search teachers by name..." />
                            </div>
                            <div class="flex flex-wrap items-center gap-10px">
                                <form class="max-w-sm mx-auto ">
                                    <select id="countries"
                                        class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body rounded-[10px] bg-white">
                                        <option selected>All Gender</option>
                                        <option value="male">Male</option>
                                        <option value="CA">Female</option>
                                    </select>
                                </form>
                                <form class="max-w-sm mx-auto ">
                                    <select id="sortName"
                                        class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body rounded-[10px] bg-white">
                                        <option selected value="default">Default</option>
                                        <option value="asc">A-Z</option>
                                        <option value="desc">Z-A</option>
                                    </select>
                                </form>
                                <form class="max-w-sm mx-auto p-[10px]">
                                    <select id="countries"
                                        class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body rounded-[10px] bg-white">
                                        <option selected>All Gender</option>
                                        <option value="male">0-5 years</option>
                                        <option value="male">6-10 years</option>
                                        <option value="male">11-20 years</option>
                                        <option value="male">20+ years</option>
                                    </select>
                                </form>
                                <form class="max-w-sm mx-auto ">
                                    <select id="countries"
                                        class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body rounded-[10px] bg-white">
                                        <option selected>All Gender</option>
                                        <option value="male">4.5+ stars</option>
                                        <option value="CA">4.0+ stars</option>
                                        <option value="CA">3.5+ stars</option>

                                    </select>
                                </form>
                                <div class="max-w-sm mx-auto">
                                    <select id="profession"
                                        class="block w-full px-3 py-2.5     bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body rounded-[10px] bg-white">
                                        <option selected>All Profession</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {
                                teachers.map((el) => (

                                    <div key={el.id}
                                        class="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  border-gray-200 border-gray-200 group">
                                        <div class="flex flex-col items-center text-center mb-4">
                                            <a href="../packalar/teachers-students.html?teacherId=${el.id}"
                                                class="relative flex size-10  overflow-hidden rounded-full h-20 w-20 mb-3  ring-blue-100 ">
                                                <Link to={`/teachers/${el.id}`}>
                                                    <img src={el.avatar} className="aspect-square size-full" alt="" />
                                                </Link>
                                            </a>
                                            <h3 class="text-[15px] text-black mb-1">{el.name}</h3>
                                            <h1 class="items-center justify-center rounded-md border border-gray-200 px-2 py-0.5 text-xs bg-gray-300 mb-10px">{el.profession}</h1>
                                            <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                                                <span
                                                    class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-briefcase h-4 w-4" aria-hidden="true">
                                                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                                    </svg>{el.experience}y</span>
                                                <span class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="lucide lucide-users h-4 w-4" aria-hidden="true">
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                    </svg>{el.age}y</span>
                                            </div>
                                            <div class="flex items-center gap-1 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                </path>
                                            </svg><span class="text-black">{el.rating}</span></div>
                                        </div>
                                        <div class="space-y-2 mb-4">
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-phone h-4 w-4  text-blue-500"
                                                aria-hidden="true">
                                                <path
                                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                                </path>
                                            </svg>
                                                <p class="truncate">{el.phone}</p>
                                            </div>
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-mail h-4 w-4  text-green-500"
                                                aria-hidden="true">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            </svg>
                                                <p class="truncate">{el.gmail}</p>
                                            </div>
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="lucide lucide-send h-4 w-4  text-blue-400"
                                                    aria-hidden="true">
                                                    <path
                                                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                                    </path>
                                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                                </svg>
                                                <h1 class="truncate">@{el.user}</h1>
                                            </div>
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                                                <path
                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                </path>
                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                                <h1 class="truncate">{el.linkedin}</h1>
                                            </div>
                                        </div>

                                        <div class=" flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity  duration-200">
                                            <button
                                            onClick={() => editTeacher(el.id)}
                                                class="inline-flex items-center justify-center  text-sm font-medium  transition-all 
                                  border bg-background text-foreground  h-8 rounded-md px-3  flex-1 gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                                    <path
                                                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                                    </path>
                                                    <path d="m15 5 4 4"></path></svg>
                                                Edit</button>
                                            <button
                                                onClick={() => deleteTeacher(el?.id)}
                                                class="inline-flex items-center justify-center  text-sm font-medium transition-all
                                 border bg-background  h-8 rounded-md px-3  flex-1 gap-2 text-red-600 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                                    aria-hidden="true">
                                                    <path d="M10 11v6"></path>
                                                    <path d="M14 11v6"></path>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                                    <path d="M3 6h18"></path>
                                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                                Delete</button>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                </main>
            </div>


            {
                isModalOpen ? (
                    <div onClick={closeModal}
                        className="fixed top-0 z-20 left-0 w-full h-full bg-black/80 flex items-center justify-center">
                        <form action="" 
                        onSubmit={addTeacher}
                        onClick={(e) => e.stopPropagation()}
                            className="border border-r-red-50 max-w-[700px] w-full p-5  rounded-[40px] bg-white grid grid-cols-2 gap-5 hover:border-red-500 hover:shadow-xl hover:shadow-blue-600">
                            <input 
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="FullName" type="text" />
                            <input
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                             className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Avatar" type="text" />
                            <input
                            value={age} 
                            onChange={(e) => setAge(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Age" type="text" />
                            <input
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)} 
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Experience" type="text" />
                            <input 
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Profession" type="text" />
                            <input 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Rating" type="text" />
                            <input 
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Gmail" type="text" />
                            <input
                            value={user}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Username" type="text" />
                            <input 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Phone" type="text" />
                            <input
                            value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                className="border rounded-[5px] py-2px px-10px outline-none hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600" placeholder="Linkedin" type="text" />
                            <div class="w-full ">
                                
                                <button 

                                    class="border rounded-[5px] py-2px px-10px outline-none bg-[orangered] border-[orangered] text-white hover:bg-[blue] hover:border-blue-500 cursor-pointer p-2">
                                   {selected ? "Tahrirlash" : "Qo'shish"}       
                                          </button>
                            </div>
                        </form>
                    </div>) : ""

            }

        </>
    )
}
export default TeachersPagas