import { Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DownloadSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Download className="h-6 w-6 mr-2" />
          ডাউনলোড
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">ইনশেখ এর সর্বশেষ সংস্করণ ডাউনলোড করুন:</p>
        <Button asChild>
          <a href="/downloads/inSheikh.exe" download>
            <Download className="h-4 w-4 mr-2" />
            ইনশেখ.exe ডাউনলোড করুন
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

