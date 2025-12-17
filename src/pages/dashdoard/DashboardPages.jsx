import { useState } from "react"

function DashboardPages(){

    return(
        <>
            <div class="flex-1 transition-all duration-300 bg-gray-50">
                <header class="bg-white  border-b border-gray-200  px-8 py-4 flex items-center justify-between sticky top-0 z-10 transition-colors duration-300">
                    <div class="flex items-center gap-4">
                        <h1 class=" text-black">School Management System</h1>
                    </div><button data-slot="button"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all  border bg-background text-foreground  size-9 rounded-full"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-moon h-5 w-5" aria-hidden="true">
                            <path
                                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401">
                            </path>
                        </svg></button>
                </header>
                <main class="p-8">
                    <div class="">
                        <div class="mb-8">
                            <h2 class=" text-black text-[20px] mb-2">Dashboard Overview</h2>
                            <p class="text-gray-600 text-gray-400 text-[12px]">Welcome to your school management dashboard</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div
                                class=" flex flex-col gap-6 rounded-xl border border-gray-200 bg-white  hover:shadow-lg transition-shadow duration-300">
                                <div class=" p-6">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-gray-600  mb-1">Total Teachers</p>
                                            <p class=" text-black">24</p>
                                        </div>
                                        <div class="p-3 rounded-lg bg-blue-50 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-users h-6 w-6 text-blue-600 dark:text-blue-400"
                                                aria-hidden="true">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" flex flex-col gap-6 rounded-xl border bg-white  border-gray-200  hover:shadow-lg transition-shadow duration-300">
                                <div class=" p-6">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-gray-600  mb-1">Total Students</p>
                                            <p class="text-black">80</p>
                                        </div>
                                        <div class="p-3 rounded-lg bg-purple-50 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-graduation-cap h-6 w-6 text-purple-600 dark:text-purple-400"
                                                aria-hidden="true">
                                                <path
                                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                                </path>
                                                <path d="M22 10v6"></path>
                                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" flex flex-col gap-6 rounded-xl border bg-white  border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                <div class=" p-6">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-gray-600  mb-1">Avg Teacher Rating</p>
                                            <p class="text-black">4.1</p>
                                        </div>
                                        <div class="p-3 rounded-lg bg-yellow-50 "><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-star h-6 w-6 text-yellow-600 "
                                            aria-hidden="true">
                                            <path
                                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                            </path>
                                        </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" flex flex-col gap-6 rounded-xl border bg-white border-gray-200  hover:shadow-lg transition-shadow duration-300">
                                <div class=" p-6">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-gray-600  mb-1">Avg Student Rating</p>
                                            <p class="text-black">3.5</p>
                                        </div>
                                        <div class="p-3 rounded-lg bg-green-50 "><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-trending-up h-6 w-6 text-green-600 "
                                            aria-hidden="true">
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div
                                class=" flex flex-col gap-6 rounded-xl border bg-white  border-gray-200 ">
                                <div
                                    class=" grid auto-rows-min  items-start gap-1.5 px-6 pt-6 ">
                                    <h4 class="leading-none text-gray-900 text-white">Quick Actions
                                    </h4>
                                </div>
                                <div class="px-6 flex flex-col gap-[30px]  pb-[30px]">
                                    <a href="./packalar/teachers.html">
                                        <button
                                            class="w-full p-4 text-left rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-users h-5 w-5" aria-hidden="true">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                                <div>
                                                    <h1>Manage Teachers</h1>
                                                    <h1 class="text-sm text-blue-100">View and manage all teachers</h1>
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                    <a href="./packalar/students.html">
                                        <button class="w-full p-4 text-left rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white 
                                hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-graduation-cap h-5 w-5" aria-hidden="true">
                                                <path
                                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                                </path>
                                                <path d="M22 10v6"></path>
                                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                            </svg>
                                                <div>
                                                    <h1>Manage Students</h1>
                                                    <h1 class="text-sm text-purple-100">View and manage all students</h1>
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div class=" flex flex-col gap-6 rounded-xl border bg-white  border-gray-200 ">
                                <div class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 
                            has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                    <h4 class="leading-none text-black">Recent
                                        Activity</h4>
                                </div>
                                <div class="px-6 [&amp;:last-child]:pb-6">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                                            <div>
                                                <p class="text-[14px] text-black">New teacher added</p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-3">
                                            <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                                            <div>
                                                <p class="text-[14px]  text-black">Student ratings updated</p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">5 hours ago</p>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-3">
                                            <div class="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                                            <div>
                                                <p class="text-[14px]  text-black">New students enrolled</p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">1 day ago</p>
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
export default DashboardPages