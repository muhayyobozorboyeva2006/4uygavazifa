
import axios from "axios";
import { useEffect, useState } from "react"

function TeachersPagas(){

    const [teachers , setTeachers] = useState([]);
     
     useEffect(() => {

   async  function getAllTeachers(){
        try{
     let res = await axios.get(
        "https://69242f5d3ad095fb84730f49.mockapi.io/teachers"
     )
     console.log(res.data);
     setTeachers(res.data)
        }catch(err){
            console.log(err);   
        }
     }

         getAllTeachers();
     } , [])
     console.log(teachers);
     


    return(
                <>
            <div class="flex-1 transition-all duration-300 ml-64 bg-gray-50">
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
                            <button id="cardbtn"
                                class="inline-flex items-center justify-center text-white text-[12px]  rounded-md text-sm font-medium transition-all   
                       h-9 px-4 py-2  gap-2 bg-gradient-to-r from-blue-500 to-purple-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-plus h-5 w-5" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                                Add Teacher</button>
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
                        
                            </div>
                            <div class="flex flex-wrap items-center gap-[10px]">
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
                                
                                    <div
                                        class="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  border-gray-200 border-gray-200 group">
                                        <div class="flex flex-col items-center text-center mb-4">
                                            <a href="../packalar/teachers-students.html?teacherId=${el.id}"
                                                class="relative flex size-10  overflow-hidden rounded-full h-20 w-20 mb-3  ring-blue-100 ">
                                                <img src={el.avatar} className="aspect-square size-full" alt="" />

                                            </a>
                                            <h3 class="text-[15px] text-black mb-1">{el.name}</h3>
                                            <h1 class="items-center justify-center rounded-md border border-gray-200 px-2 py-0.5 text-xs bg-gray-300 mb-[10px]">{el.profession}</h1>
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
                                            </svg><span class="text-black">3.6</span></div>
                                        </div>
                                        <div class="space-y-2 mb-4">
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500"
                                                aria-hidden="true">
                                                <path
                                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                                </path>
                                            </svg>
                                                <p class="truncate">{el.createdAt}</p>
                                            </div>
                                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500"
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
                                                    stroke-linejoin="round" class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400"
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
                                                class="inline-flex items-center justify-center  text-sm font-medium transition-all
                                 border bg-background  h-8 rounded-md px-3  flex-1 gap-2 text-red-600 "><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                                    aria-hidden="true">
                                                    <path d="M10 11v6"></path>
                                                    <path d="M14 11v6"></path>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                                    <path d="M3 6h18"></path>
                                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>Delete</button></div>
                                    </div>
                               
                            ))
                        }  
             </div>
                    </div>

                </main>
            </div>
           
             
        

        </>
    )
}
export default TeachersPagas