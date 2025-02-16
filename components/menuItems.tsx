"use client";
import React, { useState, useRef } from "react";
import { Navbar } from "./navbar";

// Sample JSON data
export const menuData = [
  {
    category: "Breakfast",
    items: [
      {
        id: 1,
        name: "Masala Dosa",
        price: 80,
        veg: true,
        image:
          "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      },
      {
        id: 2,
        name: "Idli with Sambar",
        price: 60,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-1.jpg",
      },
      {
        id: 3,
        name: "Pongal",
        price: 70,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/04/ven-pongal-recipe.jpg",
      },
      {
        id: 4,
        name: "Vada with Coconut Chutney",
        price: 50,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1.jpg",
      },
      {
        id: 5,
        name: "Upma",
        price: 60,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/upma-recipe-1.jpg",
      },
    ],
  },
  {
    category: "Lunch",
    items: [
      {
        id: 6,
        name: "Meals (Thali)",
        price: 150,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/maharashtrian-kadhi-recipe.jpg",
      },
      {
        id: 7,
        name: "Vegetable Biryani",
        price: 120,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/bombay-vegetable-biryani-recipe.jpg",
      },
      {
        id: 8,
        name: "Curd Rice",
        price: 70,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-5.jpg",
      },
      {
        id: 9,
        name: "Sambar Rice",
        price: 80,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2017/10/sambar-rice-recipe.jpg",
      },
      {
        id: 10,
        name: "Lemon Rice",
        price: 70,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/lemon-rice-recipe-1.jpg",
      },
    ],
  },
  {
    category: "Snacks",
    items: [
      {
        id: 11,
        name: "Bonda",
        price: 50,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/vegetable-bonda-recipe.jpg",
      },
      {
        id: 12,
        name: "Paniyaram",
        price: 60,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2022/05/paniyaram-recipe-kuzhi-paniyaram.jpg",
      },
      {
        id: 13,
        name: "Rava Uttapam",
        price: 80,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/rava-uttapam-recipe.jpg",
      },
      {
        id: 14,
        name: "Onion Pakoda",
        price: 50,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2024/05/onion-pakoda-recipe-2.jpg",
      },
      {
        id: 15,
        name: "Coconut Chutney Sandwich",
        price: 70,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/corn-sandwich-recipe01.jpg",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 16,
        name: "Payasam",
        price: 90,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2017/08/sabudana-payasam-recipe.jpg",
      },
      {
        id: 17,
        name: "Rava Kesari",
        price: 70,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/kesari-recipe.jpg",
      },
      {
        id: 18,
        name: "Pongal with Jaggery",
        price: 80,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/04/ven-pongal-recipe.jpg",
      },
      {
        id: 19,
        name: "Mysore Pak",
        price: 100,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2016/10/mysore-pak.jpg",
      },
      {
        id: 20,
        name: "Coconut Ladoo",
        price: 60,
        veg: true,
        image:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2014/07/motichoor-ladoo.jpg",
      },
    ],
  },
];

const MenuScreen = () => {
  const [cart, setCart] = useState([]);
  const bluetoothDeviceRef = useRef(null);
  const writableCharacteristicRef = useRef(null);
  const [menuItemData, setMenuItemData] = useState(menuData);

  const addToCart = (item: any) => {
    setCart((prevCart: any) => {
      const existingItem = prevCart.find(
        (cartItem: any) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevCart.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: any) => {
    setCart((prevCart: any) =>
      prevCart
        .map((item: any) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item: any) => item.quantity > 0)
    );
  };

  const calculateSubtotal = (): number => {
    return cart.reduce((total, item: any) => total + item.price * item.quantity, 0);
  };
  
  const calculateTotal = (): number => {
    const subtotal = calculateSubtotal();
    const serviceCharge = 0; // Assuming 10% service charge
    const cgst = subtotal * 0.025; // 2.5% CGST
    const sgst = subtotal * 0.025; // 2.5% SGST
    return subtotal + serviceCharge + cgst + sgst;
  };
  

  const handlePrint = async (): Promise<void> => {
    if (!("bluetooth" in navigator)) {
        alert("Web Bluetooth API is not supported by your browser.");
        return;
    }

    try {
        let device: any = bluetoothDeviceRef.current;
        let writableCharacteristic: any = writableCharacteristicRef.current;

        if (!device || !device.gatt || !device.gatt.connected) {
            console.log("Requesting new Bluetooth device...");
            //@ts-ignore
            device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"],
            });

            if (!device.gatt) {
                throw new Error("GATT server not available on this device.");
            }

            const server = await device.gatt.connect();
            const service = await server.getPrimaryService(
                "e7810a71-73ae-499d-8c15-faa9aef0c3f2"
            );
            const characteristics = await service.getCharacteristics();
            writableCharacteristic =
                characteristics.find(
                    (char: any) =>
                        char.properties.write || char.properties.writeWithoutResponse
                ) || null;

            if (!writableCharacteristic) {
                alert("No writable characteristic found.");
                return;
            }

            bluetoothDeviceRef.current = device;
            writableCharacteristicRef.current = writableCharacteristic;
        } else {
            console.log("Reusing existing Bluetooth connection.");
        }

        const storeName = "Annapurna Cafe";
        const storeAddress = "5th Block, Ejipura, Bengaluru, Karnataka 560095";
        const date = new Date().toLocaleString();

        let printData = "\x1B\x40"; // Reset printer
        printData += "\x1B\x21\x30" + storeName + "\n"; // Bold store name
        printData += "\x1B\x21\x00" + storeAddress + "\n";
        printData += "\n"
        printData += "Date: " + date + "\n";
        printData += "--------------------------------\n";
        printData += "Item                Qty  Price\n";
        printData += "--------------------------------\n";

        cart.forEach((item: any) => {
            let itemLine = item.name.padEnd(20).substring(0, 20) +
                item.quantity.toString().padStart(3) +
                "  " + item.price.toFixed(2).padStart(6) + "\n";
            printData += itemLine;
        });
        let serviceCharge=0

        printData += "--------------------------------\n";
        printData += "Subtotal:         Rs." + calculateSubtotal().toFixed(2) + "\n";
        printData += "Service Charge:   Rs." + serviceCharge.toFixed(2) + "\n";
        printData += "CGST 2.5%:        Rs." + (calculateSubtotal() * 0.025).toFixed(2) + "\n";
        printData += "SGST 2.5%:        Rs." + (calculateSubtotal() * 0.025).toFixed(2) + "\n";
        printData += "--------------------------------\n";
        printData += "Total:            Rs." + calculateTotal().toFixed(2) + "\n";
        printData += "--------------------------------\n";
        printData += "\n\n\n\n\n"; // Space for tearing

        const encoder = new TextEncoder();
        const encodedData = encoder.encode(printData);
        const chunkSize = 512;
  
        for (let i = 0; i < encodedData.length; i += chunkSize) {
          const chunk = encodedData.slice(i, i + chunkSize);
          await writableCharacteristic.writeValue(chunk);
          await new Promise((resolve) => setTimeout(resolve, 50)); // Small delay to prevent overload
        }
        console.log("Printing complete!");

        setCart([]);
    } catch (error) {
        console.error("Error printing:", error);
        alert("Failed to print. Please try again.");
    }
};


  return (
    <>
      <Navbar setMenuItemData={setMenuItemData} cart={cart} />

      <div className="container mx-auto p-4">
        {menuItemData.map((categoryData, index) => (
          <div key={index} className="mt-4">
            <div className="grid grid-cols-1 gap-4 mt-2">
              {categoryData.items.map((item: any) => {
                const inCart = cart.find(
                  (cartItem: any) => cartItem.id === item.id
                );
                return (
                  <div
                    key={item.id}
                    className="flex items-start space-x-4 border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className="flex items-center justify-center w-5 h-5 border-2 rounded-sm"
                          style={{
                            borderColor: item.veg ? "lightgreen" : "red",
                          }}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              item.veg ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></span>
                        </span>
                        <h3 className="text-md font-medium">{item.name}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <span className="line-through text-gray-500">
                          ₹{item.originalPrice}
                        </span>
                        <span className="font-bold text-green-600">
                          ₹{item.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        {inCart ? (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 border px-2 py-1 rounded-lg"
                            >
                              -
                            </button>
                            {/*@ts-ignore */}
                            <span className="font-bold">{inCart.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="text-green-500 border px-2 py-1 rounded-lg"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="text-green-600 border font-bold bg-white px-4 py-1 rounded-lg"
                          >
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="mt-8 p-4 border rounded-lg shadow-md" id="cart">
          <h2 className="font-semibold text-lg mb-2">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.name} x{item.quantity} - {item.price * item.quantity}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 border px-2 py-1 rounded-lg"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-green-500 border px-2 py-1 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className="font-bold mt-2">Total: {calculateTotal()}</div>
              <button
                onClick={handlePrint}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Print Receipt
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuScreen;
