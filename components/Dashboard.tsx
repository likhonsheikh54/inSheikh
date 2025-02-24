"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [securityScore, setSecurityScore] = useState(75)

  return (
    <Card>
      <CardHeader>
        <CardTitle>নিরাপত্তা ড্যাশবোর্ড</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">সামগ্রিক নিরাপত্তা স্কোর</h3>
            <Progress value={securityScore} className="w-full" />
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">{securityScore}%</p>
          </div>
          <Button onClick={() => setSecurityScore(Math.floor(Math.random() * 100))} className="w-full">
            স্কোর রিফ্রেশ করুন
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

