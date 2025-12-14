import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SingelStudent(){
    const {id} = useParams()
    const [student , setStudents] = useState(null)

    useEffect(() => {
        async function getStudenta(){
            try{
     let res = await axios.get(
         `https://69242f5d3ad095fb84730f49.mockapi.io/students/${id}`
     )
     console.log(res);
     setStudents(res.data)
            }catch(err){
                console.log(err);
                
            }
        }
     getStudenta()
    } , [id])
    return(
        <>
            <div class="flex-1 transition-all duration-300 ml-64 bg-gray-50">
                <header class="bg-white  border-b border-gray-200  px-8 py-4 flex items-center justify-between 
                top-0 z-10 transition-colors duration-300">
                    <div class="flex items-center gap-4">
                        <h1 class=" text-black">School Management System</h1>
                    </div>
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all  
                    dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input 
                    dark:hover:bg-input/50 size-9 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-moon h-5 w-5" aria-hidden="true">
                            <path
                                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401">
                            </path>
                        </svg>
                    </button>
                </header>
                <main class="p-8">
                    <div>
                        <div class="mb-6 ">
                            <button class=" items-center justify-center  rounded-md text-sm font-medium transition-all   gap-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-chevron-left h-4 w-4" aria-hidden="true">
                                    <path d="m15 18-6-6 6-6"></path>
                                </svg>Back to Students</button>
                            <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <h1 class="cursor-pointer hover:text-blue-600">Dashboard</h1><span>/</span>
                                <h1 class="cursor-pointer hover:text-blue-600">Students</h1><span>/</span>
                                <h1 class="text-gray-900 ">Becky Hegmann</h1></div>
                        </div>
                        </div>
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        
                         <div
                                class=" flex flex-col gap-6 rounded-xl border lg:col-span-1 bg-white  border-gray-200 ">
                                <div class="p-[20px]">
                                    <div class="flex flex-col items-center text-center">
                                        <div class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-32 w-32 mb-4 ring-4 ring-blue-100 ">
                                            <img src={student.avatar} className="aspect-square size-full" alt="" />
                                           
                                            </div>
                                        <h2 class=" text-black mb-2">{student.name}</h2>
                                        <h1 class="items-center justify-center rounded-md border border-gray-200 px-2 py-0.5 text-xs font-medium  shrink-0  bg-gray-300  mb-4">Mathematics</h1>
                                        <div class="w-full space-y-4 mb-6">
                                            <div class="flex items-center justify-between text-sm">
                                                <h1 class=" text-black-400">Age</h1>
                                                <h1 class="text-black-400">{student.ega} years</h1>
                                            </div>
                                            <div class="flex items-center justify-between text-sm">
                                                <h1 class="ttext-black-400">Experience</h1>
                                                <h1 class="text-black-400">${student.phon} years</h1>
                                            </div>
                                            <div class="flex items-center justify-between text-sm">
                                                <h1 class="text-black-400">Gender</h1>
                                                <h1 class="text-black-400">male</h1>
                                            </div>
                                            <div class="flex items-center justify-between text-sm">
                                                <h1 class="text-black-400">Rating</h1>
                                                <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                                    aria-hidden="true">
                                                    <path
                                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                    </path>
                                                </svg>
                                                    <h1 class="text-black-400">{student.user}</h1>
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <button
                                            class="flex items-center justify-center  rounded-md text-sm font-medium transition-all text-white bg-[black] w-full h-[35px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                                <path
                                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                                </path>
                                                <path d="m15 5 4 4"></path>
                                            </svg>
                                            Edit Profile </button>
                                    </div>
                                </div>
           </div>
    
                            <div class="flex  gap-6 rounded-xl border border-gray-200 lg:col-span-2 bg-white  mb-[30px]">

                                <div class="flex flex-col gap-2 w-full ">
                                    <div class=" grid items-start gap-1.5 px-6 pt-6 ">
                                        <div class="bg-gray-200  h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-3">
                                            <button id="info" class=" flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium hover:bg-white cursor-pointer ">Contact Info</button>
                                            <button id="statistics" class="flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium hover:bg-white cursor-pointer">Statistics</button></div>
                                    </div>
                                    <div class="px-6 ">
                                        <div>
                                            <div id="infolar" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[30px]">
                                                <div class="p-5 rounded-lg bg-gray-50 ">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="p-2 rounded-lg bg-blue-100 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-phone h-5 w-5 text-blue-600 "
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p class="text-sm text-gray-600 ">Phone</p>
                                                            <p class="text-gray-900 ">1-652-600-4622</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 rounded-lg bg-gray-50 ">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="p-2 rounded-lg bg-green-100 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-mail h-5 w-5 text-green-600 dark:text-green-400"
                                                                aria-hidden="true">
                                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p class="text-sm text-gray-600 ">Email</p>
                                                            <p class="text-gray-900 truncate">Derek_Wolf96@yahoo.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 rounded-lg bg-gray-50 ">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="p-2 rounded-lg bg-blue-100 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" class="lucide lucide-send h-5 w-5 text-blue-400"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                                                </path>
                                                                <path d="m21.854 2.147-10.94 10.939"></path>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p class="text-sm text-gray-600 ">Telegram</p>
                                                            <p class="text-gray-900">@derekwolf</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-4 rounded-lg bg-gray-50 ">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="p-2 rounded-lg bg-blue-100 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-linkedin h-5 w-5 text-blue-600 "
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                                </path>
                                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                                <circle cx="4" cy="4" r="2"></circle>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p class="text-sm text-gray-600 ">LinkedIn</p>
                                                            <p class="text-gray-900  truncate">linkedin.com/in/derek-wolf</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="statisticslar" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[30px] hidden">
                                                <div
                                                    class="p-4 rounded-lg  from-blue-50 bg-blue-500">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <h1 class="text-sm text-blue-900 ">Performance Rating</h1>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-star h-5 w-5 text-blue-600 " aria-hidden="true">
                                                            <path
                                                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <p class="text-2xl text-blue-900  mb-2">4.5/5.0</p>
                                                
                                                </div>
                                                <div
                                                    class="p-4 rounded-lg  from-yellow-50 bg-yellow-100 ">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <h1 class="text-sm text-yellow-900 ">Coins Earned</h1>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-coins h-5 w-5 text-yellow-600 "
                                                            aria-hidden="true">
                                                            <circle cx="8" cy="8" r="6"></circle>
                                                            <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                                            <path d="M7 6h1v4"></path>
                                                            <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                                        </svg></div>
                                                    <p class="text-2xl text-yellow-900  mb-2">263/1000</p>
                                                </div>
                                                <div
                                                    class="p-4 rounded-lg from-green-50 bg-green-100 ">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <h1 class="text-sm text-green-900">Grade Level</h1>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-award h-5 w-5 text-green-600 dark:text-green-400"
                                                            aria-hidden="true">
                                                            <path
                                                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                                            </path>
                                                            <circle cx="12" cy="8" r="6"></circle>
                                                        </svg>
                                                    </div>
                                                    <p class="text-2xl text-green-900 ">Grade 10</p>
                                                </div>
                                                <div
                                                    class="p-4 rounded-lg  from-purple-50 bg-purple-100 ">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <h1 class="text-sm text-purple-900 ">Progress Trend</h1>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-trending-up h-5 w-5 text-purple-600 dark:text-purple-400"
                                                            aria-hidden="true">
                                                            <path d="M16 7h6v6"></path>
                                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                                        </svg></div>
                                                    <p class="text-2xl text-purple-900 ">Improving</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                   
                </main>
    
            </div>
        </>
    )
}
export default SingelStudent