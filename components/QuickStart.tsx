import { Code2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuickStart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Code2 className="h-6 w-6 mr-2" />
          দ্রুত শুরু
        </CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            git clone https://github.com/likhonsheikh54/inSheikh.git
            <br />
            cd inSheikh
            <br />
            .\inSheikh.ps1
          </code>
        </pre>
      </CardContent>
    </Card>
  )
}

