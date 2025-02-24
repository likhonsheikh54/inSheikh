import { ShieldCheck, LockIcon as LockClosed, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "উইন্ডোজ ফায়ারওয়াল ব্যবস্থাপনা",
    description: "উইন্ডোজ ফায়ারওয়াল সেটিংস এর উন্নত কনফিগারেশন এবং পর্যবেক্ষণ।",
    icon: ShieldCheck,
  },
  {
    name: "বিটলকার ড্রাইভ এনক্রিপশন",
    description: "সংবেদনশীল তথ্য সুরক্ষিত করতে নিরবচ্ছিন্ন পূর্ণ-ডিস্ক এনক্রিপশন।",
    icon: LockClosed,
  },
  {
    name: "সিস্টেম শক্তিশালীকরণ",
    description: "দুর্বলতা কমাতে ব্যাপক সিস্টেম শক্তিশালীকরণ কৌশল।",
    icon: Server,
  },
]

export default function Features() {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">বৈশিষ্ট্যসমূহ</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">আপনার আঙুলের ডগায় উন্নত নিরাপত্তা</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.name}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle>{feature.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

