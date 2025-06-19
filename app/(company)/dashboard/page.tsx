'use client'

import React from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { Calendar24 } from '@/components/ui/date-time-picker'

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <Card className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-200">
        <CardHeader className="pb-1">
          <CardTitle className="text-xl font-bold text-gray-800">
            Candidate Name: John Doe
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Scheduled for June 25, 2025
          </CardDescription>
        </CardHeader>

        <CardContent className="text-base text-gray-700 mt-2">
          <p>Role: <span className="font-medium">Senior Frontend Developer</span></p>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row sm:justify-end gap-3 px-6 pb-6 mt-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                Join Meeting
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg font-semibold">Join Meeting</AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-gray-600">
                  Are you sure you want to join the interview?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto font-medium">
                Schedule Later
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-xl">
              <div className="mb-4 mt-2">
                <Calendar24 />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Schedule</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page
