import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';

export const AuthDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-auto px-2.5 py-1.5 rounded-[5px] border-[#0072ce] bg-white"
        >
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-stroke text-xs">
            Войти
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white !p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Добро пожаловать
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Пароль</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>
              <Button className="w-full bg-blue">Войти</Button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Пароль</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Подтвердите пароль</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>
              <Button className="w-full bg-blue">Зарегистрироваться</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};