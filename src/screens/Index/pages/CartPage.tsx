import React, { useState } from "react";
import { useCartStore } from "../../../store/cart";
import { Button } from "../../../components/ui/button";
import { Trash2Icon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";

export const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    nickname: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    clearCart();
    setIsCheckoutOpen(false);
    alert("Заказ успешно оформлен!");
  };

  if (items.length === 0) {
    return (
      <div className="container py-8 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-white mb-8">Корзина</h1>
        <div className="text-center text-white">
          <p className="text-xl">Корзина пуста</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Корзина</h1>
      <div className="bg-white rounded-lg p-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-blue text-lg">{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 border rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
              className="h-10 w-10"
            >
              <Trash2Icon className="w-6 h-6 text-red-500" />
            </Button>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-xl font-semibold">Итого:</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
          <DialogTrigger asChild>
            <Button className="w-full mt-6 bg-blue text-lg py-6">
              Оформить заказ
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Оформление заказа
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Никнейм</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={checkoutData.nickname}
                  onChange={(e) =>
                    setCheckoutData({ ...checkoutData, nickname: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium">Номер карты</label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  className="w-full p-2 border rounded"
                  value={checkoutData.cardNumber}
                  onChange={(e) =>
                    setCheckoutData({
                      ...checkoutData,
                      cardNumber: e.target.value.replace(/\D/g, ""),
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Срок действия</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full p-2 border rounded"
                    value={checkoutData.expiryDate}
                    onChange={(e) =>
                      setCheckoutData({
                        ...checkoutData,
                        expiryDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    required
                    maxLength={3}
                    className="w-full p-2 border rounded"
                    value={checkoutData.cvv}
                    onChange={(e) =>
                      setCheckoutData({
                        ...checkoutData,
                        cvv: e.target.value.replace(/\D/g, ""),
                      })
                    }
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue">
                Оплатить ${total.toFixed(2)}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};