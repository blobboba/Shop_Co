import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import { Link } from 'react-router-dom';

export const CartDialog = () => {
  const { items } = useCartStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="p-0 h-6 w-6">
          <ShoppingCartIcon className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Корзина</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Корзина пуста</p>
          ) : (
            <Link to="/cart">
              <Button className="w-full bg-blue">
                Перейти в корзину ({items.length})
              </Button>
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};