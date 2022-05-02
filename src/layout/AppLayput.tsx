/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import AppNavigation from './components/AppNavigation'




export default function AppLayout() {
    return (
        <>

            <div className="min-h-full">
                <AppNavigation />

                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-lg leading-6 font-semibold text-gray-900">Team Manager</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}
