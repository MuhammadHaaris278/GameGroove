"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, clearCart, itemCount, totalPrice } = useCart()

  const toggleCart = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Cart Icon */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCart}
          className="text-white hover:text-neon-blue"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-neon-blue text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </div>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={toggleCart}>
          {/* Cart Panel */}
          <div
            className="bg-gaming-dark border-l border-gaming-highlight w-full max-w-md overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gaming-highlight flex justify-between items-center sticky top-0 bg-gaming-dark z-10">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Your Cart ({itemCount})
              </h2>
              <Button variant="ghost" size="icon" onClick={toggleCart}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">Your cart is empty</p>
                  <Button className="neon-button" onClick={toggleCart}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-gaming-highlight">
                    {items.map((item) => (
                      <li key={item.id} className="py-4 flex gap-4">
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
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 p-0"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                disabled={(item.quantity || 1) <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-6 text-center">{item.quantity || 1}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 p-0"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-gray-400 hover:text-red-500"
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <div className="text-xs text-red-500 mt-1">
                              Save ${(item.originalPrice - item.price).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gaming-highlight pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="font-medium">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-400">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between mb-4 text-lg font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="space-y-3">
                      <Button className="neon-button w-full" asChild onClick={toggleCart}>
                        <Link href="/checkout">Checkout</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-red-500 border-red-500 hover:bg-red-500/10"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
