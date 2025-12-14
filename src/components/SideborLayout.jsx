import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SideborLayout(){
    const navigati = useNavigate()
    function logout(){
        localStorage.removeItem("auth");
   navigati("/")
   toast.warn("Siz tizimdan chiqib ketdingiz!!!")
    }
    return(
        <>
            <div >
                <aside class="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-20 w-64">
                    <div class="p-4 border-b border-gray-200 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-graduation-cap h-5 w-5 text-white">
                                    <path
                                        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                    </path>
                                    <path d="M22 10v6"></path>
                                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                </svg>
                            </div>
                            <h1 class="text-black">EduAdmin</h1>
                        </div>

                        <a href=""
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all outline-none size-9 h-8 w-8 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-chevron-left h-4 w-4">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                        </a>
                    </div>

                    <nav class="p-4 space-y-2">
                        <a href="/dashoard"
                            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg shadow-blue-500/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-layout-dashboard h-5 w-5 flex-shrink-0">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <h1>Dashboard</h1>
                        </a>

                        <a href="/teachers"
                            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg shadow-blue-500/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-users h-5 w-5 flex-shrink-0">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <h1>Teachers</h1>
                        </a>

                        <a href="/students"
                            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg shadow-blue-500/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-graduation-cap h-5 w-5 flex-shrink-0">
                                <path
                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                </path>
                                <path d="M22 10v6"></path>
                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                            </svg>
                            <h1>Students</h1>
                        </a>

                        <a href="./settings.html"
                            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg shadow-blue-500/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-settings h-5 w-5 flex-shrink-0">
                                <path
                                    d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915">
                                </path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            <h1>Settings</h1>
                        </a>
                        <button onClick={logout}
                         className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg shadow-blue-500/50">
                            Logout</button>
                    </nav>
                </aside>
            </div>

        </>
    )
}
export default SideborLayout