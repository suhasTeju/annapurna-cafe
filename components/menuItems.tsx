"use client";
import React, { useState, useRef } from "react";
import { Navbar } from "./navbar";

// Sample JSON data
export const menuData = [
  {
    category: "Breakfast & Snacks",
    items: [
      {
        id: 1,
        name: "Bread Omelette",
        price: 99,
        veg: false,
        image:
          "https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/09/DSC_0019.jpg?fit=5022%2C4000&ssl=1",
      },
      {
        id: 2,
        name: "Fluffy Egg",
        price: 120,
        veg: false,
        image:
          "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/143172.jpg?resize=1200:*",
      },
      {
        id: 3,
        name: "Crispy Potato Balls",
        price: 99,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGADWoquM-doxu8Tp47talb8Dl6ikVwLDomA&s",
      },
    ],
  },
  {
    category: "Sandwiches & Ramen",
    items: [
      {
        id: 4,
        name: "Paneer Sandwich",
        price: 140,
        veg: true,
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/paneer-sandwich.jpg",
      },
      {
        id: 5,
        name: "Veg Sandwich",
        price: 99,
        veg: true,
        image:
          "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Smoked-Tandoori-Paneer-Sandwich.jpg",
      },
      {
        id: 6,
        name: "Corn Sandwich",
        price: 130,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuj8s13vXLL0O3poEAh7JqXNiDBoVhsBUIw&s",
      },
      {
        id: 7,
        name: "Paneer Ramen",
        price: 240,
        veg: true,
        image:
          "https://www.modernhoney.com/wp-content/uploads/2024/01/Homemade-Chicken-Ramen-1-crop-scaled.jpg",
      },
      {
        id: 8,
        name: "Mushroom Ramen",
        price: 230,
        veg: true,
        image:
          "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/local-samosal/media/media_files/Z7gFugbQM2rtZ6s3bMK4.png",
      },
      {
        id: 9,
        name: "Plain Ramen",
        price: 190,
        veg: true,
        image:
          "https://thefoodiediaries.co/wp-content/uploads/2023/01/img_1929-e1673955074338.jpg",
      },
    ],
  },
  {
    category: "Waffles & Pancakes",
    items: [
      {
        id: 10,
        name: "Fruit Waffle",
        price: 130,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCY1xuucLPNVgpL_rXrsjVLQ_apERS9k4ZA&s",
      },
      {
        id: 11,
        name: "Dark Chocolate Waffle",
        price: 110,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aj8GZEYba-N91S9lsikl2GhQM-uIogsvBA&s",
      },
      {
        id: 12,
        name: "Nutella Waffle",
        price: 130,
        veg: true,
        image:
          "https://www.chiselandfork.com/wp-content/uploads/2021/11/nutella-waffles-1.jpg",
      },
      {
        id: 13,
        name: "Pancake with Maple Syrup",
        price: 140,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahW6xzBaT7KDcV0C6ZCmXLi_5s6ovlKFsGw&s",
      },
    ],
  },
  {
    category: "Boba & Specialty Drinks",
    items: [
      {
        id: 14,
        name: "Blueberry Boba",
        price: 140,
        veg: true,
        image:
          "https://www.whiskaffair.com/wp-content/uploads/2022/09/Blueberry-Boba-Tea-2-3.jpg",
      },
      {
        id: 15,
        name: "Black Currant Boba",
        price: 140,
        veg: true,
        image: "https://jtbobahouse.com/assets/images/menu/menu1.webp",
      },
      {
        id: 16,
        name: "Caramel Boba",
        price: 120,
        veg: true,
        image:
          "https://shottbeverages.com/wp-content/uploads/2020/08/salted_caramel_bubble_tea.jpg",
      },
      {
        id: 17,
        name: "Classic Cold Coffee Boba",
        price: 99,
        veg: true,
        image:
          "https://assets.epicurious.com/photos/5953ca064919e41593325d97/4:3/w_4992,h_3744,c_limit/bubble_tea_recipe_062817.jpg",
      },
      {
        id: 18,
        name: "Hazelnut Coffee Boba",
        price: 110,
        veg: true,
        image:
          "https://tyberrymuch.com/wp-content/uploads/2023/06/coffee-milk-tea-boba-feature.jpg",
      },
      {
        id: 19,
        name: "Mocha Coffee",
        price: 160,
        veg: true,
        image:
          "https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg",
      },
      {
        id: 20,
        name: "Ice Tea Boba",
        price: 120,
        veg: true,
        image:
          "https://bellyfull.net/wp-content/uploads/2022/04/Boba-Tea-blog-1.jpg",
      },
      {
        id: 21,
        name: "Peach Ice Tea",
        price: 120,
        veg: true,
        image:
          "https://www.thespruceeats.com/thmb/jk3sZ3Jtq2WPnd31DrB-FR1qfs0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summer-peach-tea-cocktail-recipe-761506-hero-01-f949acc1ed22404da03ce72648412bcf.jpg",
      },
      {
        id: 22,
        name: "Matcha Tea",
        price: 210,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl6tgWEy1OGMB1iMyeK09_ninlzm5W_HYhg&s",
      },
      {
        id: 23,
        name: "Taro Milk Tea",
        price: 160,
        veg: true,
        image:
          "https://i.pinimg.com/736x/93/ae/2f/93ae2f187d2669042324e36564072935.jpg",
      },
      {
        id: 24,
        name: "Avocado Boba",
        price: 190,
        veg: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9LetQN2gMo1dEQHG2M5scSSNt8UPxpYkYQ&s",
      },
      {
        id: 25,
        name: "Strawberry Boba",
        price: 140,
        veg: true,
        image:
          "https://www.inkatrinaskitchen.com/wp-content/uploads/2020/05/Strawberry-Bubble-Tea-24-wm-600.jpg",
      },
      {
        id: 26,
        name: "Mango Boba",
        price: 120,
        veg: true,
        image:
          "https://hungryinthailand.com/wp-content/uploads/2024/03/mango-bubble-tea.webp",
      },
      {
        id: 27,
        name: "Kiwi Boba",
        price: 210,
        veg: true,
        image:
          "https://i.pinimg.com/736x/2b/2b/1b/2b2b1b0d3595461f892259375f032a97.jpg",
      },
      {
        id: 28,
        name: "Dragon Fruit",
        price: 160,
        veg: true,
        image:
          "https://colorfulsuperfoodie.com/wp-content/uploads/2023/07/066A4091_adobe_express.jpeg",
      },
      {
        id: 29,
        name: "Butterfly Pea Tea",
        price: 99,
        veg: true,
        image:
          "https://www.my-foodcourt.com/wp-content/uploads/2018/04/butterfly-pea-flower-tea-2-1123x617.jpg",
      },
      {
        id: 30,
        name: "Grape Juice",
        price: 99,
        veg: true,
        image:
          "https://extremewellnesssupply.com/cdn/shop/articles/ebb198a19bdb649a3668bb0587cc15b6_880x.jpg?v=1676283077",
      },
      {
        id: 31,
        name: "Banana Dry Fruits",
        price: 99,
        veg: true,
        image: "https://i.ytimg.com/vi/eXbiuJ7_z9k/hqdefault.jpg",
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

  const calculateTotal = () => {
    return cart.reduce(
      (total, item: any) => total + item.price * item.quantity,
      0
    );
  };

  const handlePrint = async (): Promise<void> => {
    if (!("bluetooth" in navigator)) {
      alert("Web Bluetooth API is not supported by your browser.");
      return;
    }

    try {
      let device: any = bluetoothDeviceRef.current;
      let writableCharacteristic: any = writableCharacteristicRef.current;

      // Check if the device is already paired and connected
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

        // Save references for future prints
        bluetoothDeviceRef.current = device;
        writableCharacteristicRef.current = writableCharacteristic;
      } else {
        console.log("Reusing existing Bluetooth connection.");
      }

      const storeName = "Mocha and Matcha";
      const storeAddress = "5th Block,Koramangala,Bengaluru, Karnataka 560095";

      // ESC/POS commands
      let printData = `\x1B\x40`; // Reset printer
      printData += `\x1B\x21\x30`; // Bold store name
      printData += `${storeName}\n`;
      printData += `\x1B\x21\x00`; // Normal font for address
      printData += `${storeAddress}\n`;

      printData += "--------------------------------\n"; // Separator
      printData += `\x1B\x21\x30Order Summary:\n`; // Bold Order Summary
      printData += `\x1B\x21\x00`;
      printData += "--------------------------------\n"; // Separator

      // Use larger font for items and format correctly
      cart.forEach((item: any) => {
        printData += `\x1B\x21\x10`; // Medium font size
        printData += `${item.name} x ${item.quantity} - Rs.${
          item.price * item.quantity
        }\n`; // Item name quantity & price
        printData += `\n`;
      });
      printData += "--------------------------------\n"; // Separator
      printData += `\x1B\x21\x30`; // Bold total
      printData += `Total: Rs.${calculateTotal()}\n`;
      printData += `\x1B\x21\x00`;
      printData += "--------------------------------\n"; // Separator
      printData += `\n\n\n\n\n`; // Space for tearing

      // Convert to Uint8Array before writing
      const encoder = new TextEncoder();
      const encodedData = encoder.encode(printData);

      await writableCharacteristic.writeValue(encodedData);

      console.log("Printing complete!");

      // Reset the cart after printing
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
