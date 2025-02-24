import { BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Documentation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="h-6 w-6 mr-2" />
          ডকুমেন্টেশন
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>ইনশেখ কি?</AccordionTrigger>
            <AccordionContent>
              ইনশেখ একটি ব্যাপক উইন্ডোজ নিরাপত্তা টুল যা প্রশাসক এবং ব্যবহারকারীদের একটি স্বজ্ঞাত GUI ইন্টারফেসের মাধ্যমে নিরাপত্তা সেটিংস
              কনফিগার করতে সাহায্য করে।
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>সিস্টেম প্রয়োজনীয়তা</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>উইন্ডোজ ১০/১১</li>
                <li>পাওয়ারশেল ৫.১ বা পরবর্তী</li>
                <li>প্রশাসক অধিকার</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

