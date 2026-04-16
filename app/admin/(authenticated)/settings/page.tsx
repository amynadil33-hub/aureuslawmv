"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  Bell,
  Shield,
  Palette,
} from "lucide-react"

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-navy">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your firm&apos;s website settings and configurations
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-stone">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="h-5 w-5 text-gold" />
                Firm Information
              </CardTitle>
              <CardDescription>
                Basic information about your law firm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firmName">Firm Name</Label>
                  <Input id="firmName" defaultValue="Aureus Law" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    defaultValue="Strategic Legal Counsel for the Maldives"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Firm Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  defaultValue="Aureus Law is a premier Maldivian law firm providing expert legal counsel to individuals, businesses, and institutions."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="founded">Year Founded</Label>
                <Input id="founded" defaultValue="2010" className="w-32" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="h-5 w-5 text-gold" />
                Website Settings
              </CardTitle>
              <CardDescription>
                Configure website display options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Team Section on Homepage</Label>
                  <p className="text-sm text-muted-foreground">
                    Display featured team members on the homepage
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Testimonials</Label>
                  <p className="text-sm text-muted-foreground">
                    Display client testimonials on the homepage
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Blog/Insights Section</Label>
                  <p className="text-sm text-muted-foreground">
                    Display latest insights on the homepage
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Careers Page</Label>
                  <p className="text-sm text-muted-foreground">
                    Show the careers page with job listings
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-gold" />
                Office Address
              </CardTitle>
              <CardDescription>
                Your firm&apos;s physical address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1</Label>
                <Input id="address1" defaultValue="5th Floor, H. Meerubahuruge" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <Input id="address2" defaultValue="Meheli Goalhi" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Malé" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="Maldives" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-gold" />
                Contact Details
              </CardTitle>
              <CardDescription>
                Phone numbers and email addresses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Main Phone</Label>
                  <Input id="phone" defaultValue="+960 330-1234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fax">Fax</Label>
                  <Input id="fax" defaultValue="+960 330-1235" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">General Email</Label>
                  <Input id="email" defaultValue="info@aureuslaw.mv" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="careersEmail">Careers Email</Label>
                  <Input id="careersEmail" defaultValue="careers@aureuslaw.mv" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-gold" />
                Office Hours
              </CardTitle>
              <CardDescription>
                Your firm&apos;s operating hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="weekdays">Weekdays</Label>
                  <Input id="weekdays" defaultValue="8:00 AM - 5:00 PM" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="friday">Friday</Label>
                  <Input id="friday" defaultValue="Closed" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekends">Weekends</Label>
                <Input id="weekends" defaultValue="By Appointment Only" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-gold" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                Configure when you receive email notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Contact Inquiries</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive an email when someone submits the contact form
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Career Applications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive an email when someone applies for a position
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Analytics Summary</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive a weekly summary of website analytics
                  </p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="notificationEmail">Notification Email</Label>
                <Input
                  id="notificationEmail"
                  type="email"
                  defaultValue="admin@aureuslaw.mv"
                />
                <p className="text-sm text-muted-foreground">
                  All notifications will be sent to this email address
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-gold" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage security and access settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for all admin users
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after 30 minutes of inactivity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Login Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send email notification on new device login
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible actions - proceed with caution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
                <div>
                  <p className="font-medium">Clear All Contact Submissions</p>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete all contact form submissions
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Clear Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end border-t pt-6">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-gold hover:bg-gold-dark text-white"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
