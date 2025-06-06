"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const { isAuthenticated } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError("")

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)

      // Randomly succeed or fail for demo purposes
      const success = Math.random() > 0.2

      if (success) {
        setIsComplete(true)
        clearCart()
      } else {
        setError("Payment failed. Please try again or use a different payment method.")
      }
    }, 2000)
  }

  if (!items.length && !isComplete) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-6">Add some games to your cart before proceeding to checkout.</p>
        <Button asChild>
          <Link href="/games">Browse Games</Link>
        </Button>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Complete!</h1>
          <p className="text-gray-300 mb-6">Thank you for your purchase. Your order has been processed successfully.</p>
          <p className="text-gray-300 mb-8">A confirmation email has been sent to your email address.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="neon-button">
              <Link href="/games">Continue Shopping</Link>
            </Button>
            <Button asChild className="neon-purple-button">
              <Link href="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-neon-blue mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
      </Link>

      <h1 className="text-3xl md:text-4xl font-gaming text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 relative flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.coverImage || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-400">Qty: {item.quantity || 1}</span>
                      <span className="font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gaming-highlight pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gaming-highlight">
                <span>Total</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h2 className="text-xl font-bold mb-6">Payment Details</h2>

            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <p className="text-red-400">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Billing Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>

                  <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="crypto">Crypto</TabsTrigger>
                    </TabsList>

                    <TabsContent value="credit-card">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleChange}
                            className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              placeholder="MM/YY"
                              required
                              value={formData.expiryDate}
                              onChange={handleChange}
                              className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              placeholder="123"
                              required
                              value={formData.cvv}
                              onChange={handleChange}
                              className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal">
                      <div className="text-center py-8">
                        <Image
                          src="/placeholder.svg?height=60&width=200"
                          alt="PayPal"
                          width={200}
                          height={60}
                          className="mx-auto mb-4"
                        />
                        <p className="text-gray-400 mb-4">You will be redirected to PayPal to complete your payment.</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="crypto">
                      <div className="text-center py-8">
                        <div className="flex justify-center space-x-4 mb-4">
                          <Image src="/placeholder.svg?height=40&width=40" alt="Bitcoin" width={40} height={40} />
                          <Image src="/placeholder.svg?height=40&width=40" alt="Ethereum" width={40} height={40} />
                          <Image src="/placeholder.svg?height=40&width=40" alt="USDC" width={40} height={40} />
                        </div>
                        <p className="text-gray-400 mb-4">
                          Pay with your preferred cryptocurrency. You will receive payment instructions after clicking
                          "Complete Order".
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="pt-4 border-t border-gaming-highlight">
                  <Button type="submit" className="neon-button w-full py-6 text-lg" disabled={isProcessing}>
                    {isProcessing ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                        Processing...
                      </div>
                    ) : (
                      <>Complete Order</>
                    )}
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By completing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
