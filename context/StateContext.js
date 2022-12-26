import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../lib/firebase"

const Context = createContext();

export const StateContext = ({ children }) => {
  // CART RELATED
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    // OTHER FUNCTIONALTIES
    const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         setCurrentUser(userCredential.user) 
      })
      .catch((error) => {
        // setError(error.code)
        // console.log(error.message)
      });
      return (currentUser)
    }
  
    function login(email, password) {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user) 
      })
      .catch((error) => {
        return(error.message)
      });
    }
  
    function logout() {
      signOut(auth).then(() => {
        toast.success(`Signed Out`);      
      }).catch((error) => {
      });    }
  
    function resetPassword(email) {
      sendPasswordResetEmail(auth, email)
      .then(() => {
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage)
        // console.log(errorCode)
      });
    }
  
    function updateEmail(email) {
      return currentUser.updateEmail(email)
    }
  
    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
      })
  
      return unsubscribe
    }, [])

    
    let foundProduct;
    let index;

    function CheckForDiscount(item){
      if(item.discountOn == true){
        return item.discount;
      }else{
        return item.price;
      }
    }

    const onAdd = (product, quantity, sizeType) => {

      const checkProductInCart = cartItems.find((item) => item._id === product._id);
      
      setTotalPrice((prevTotalPrice) => prevTotalPrice + CheckForDiscount(product) * quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
      
      if(checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
        })
  
        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
        
        setCartItems([...cartItems, { ...product }]);
      }
  
      toast.success(`${qty} ${product.name} added to the cart.`);
    } 

    const toggleCartItemQuanitity = (id, value) => {
      foundProduct = cartItems.find((item) => item._id === id)
      index = cartItems.findIndex((product) => product._id === id);
      const newCartItems = cartItems.filter((item) => item._id !== id)
  
      if(value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + CheckForDiscount(foundProduct))
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - CheckForDiscount(foundProduct))
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
      }
    }

    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item._id === product._id);
      const newCartItems = cartItems.filter((item) => item._id !== product._id);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice -CheckForDiscount(foundProduct) * foundProduct.quantity);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }

    const incQty = () => {
      setQty((prevQty) => prevQty + 1);
    }
  
    const decQty = () => {
      setQty((prevQty) => {
        if(prevQty - 1 < 1) return 1;
       
        return prevQty - 1;
      });
    }
    
    return (
        <Context.Provider
          value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuanitity,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities,
            currentLanguage,
            setCurrentLanguage,
            currentUser,
            login,
            signup,
            logout,
            resetPassword,
            updateEmail,
            updatePassword,
            
          }}
        >
          {children}
        </Context.Provider>
      )
}

export const useStateContext = () => useContext(Context);
