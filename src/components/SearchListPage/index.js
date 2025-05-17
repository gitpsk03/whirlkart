import { useEffect, useState, useContext} from "react";
import {useLocation, Link} from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import Footer from '../Footer'
import CartContext from '../../context/CartContext'
import "./index.css";

const all = [
    {
        name: 'Toy1',
        img: 'https://m.media-amazon.com/images/I/41CNYCZRB0L.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy2',
        img: 'https://m.media-amazon.com/images/I/31UeFUz676L.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy3',
        img: 'https://m.media-amazon.com/images/I/41h8cVssweL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy4',
        img: 'https://m.media-amazon.com/images/I/41Qr5SG3kJL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy5',
        img: 'https://m.media-amazon.com/images/I/51GvkgZx5-L.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy6',
        img: 'https://m.media-amazon.com/images/I/41FMLCtBTLL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy7',
        img: 'https://m.media-amazon.com/images/I/31-uLhBuLfL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy8',
        img: 'https://m.media-amazon.com/images/I/418Mmh-UrTL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy9',
        img: 'https://m.media-amazon.com/images/I/41gdYV629eL.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'Toy10',
        img: 'https://m.media-amazon.com/images/I/41YO7qByt9L.AC_SX250.jpg',
        price: '1000'
    },
    {
        name: 'furniture1',
        img: 'https://c.media-amazon.com/images/I/61f9Ci7U+dL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture2',
        img: 'https://c.media-amazon.com/images/I/71RK5uBpjIL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture3',
        img: 'https://c.media-amazon.com/images/I/71OAdEle7OL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture4',
        img: 'https://c.media-amazon.com/images/I/81lsRA8GRQL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture5',
        img: 'https://c.media-amazon.com/images/I/51eoKWxpEQL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture6',
        img: 'https://c.media-amazon.com/images/I/71VLEWzVrZL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture7',
        img: 'https://c.media-amazon.com/images/I/71-dNLM2PSL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture8',
        img: 'https://c.media-amazon.com/images/I/71QvW5cwO2L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture9',
        img: 'https://c.media-amazon.com/images/I/91pYfekDR6L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'furniture10',
        img: 'https://c.media-amazon.com/images/I/818VPBTCxBL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000'
    },
    {
        name: 'Mobile1',
        img: 'https://m.media-amazon.com/images/I/41gPGB5fW3L._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile2',
        img: 'https://c.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile3',
        img: 'https://c.media-amazon.com/images/I/31ppZt0uIML._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile4',
        img: 'https://c.media-amazon.com/images/I/41oU8ZXR0fL._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile5',
        img: 'https://c.media-amazon.com/images/I/41zYuwNgi2L._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile6',
        img: 'https://c.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile7',
        img: 'https://c.media-amazon.com/images/I/31ppZt0uIML._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile8',
        img: 'https://c.media-amazon.com/images/I/41oU8ZXR0fL._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile9',
        img: 'https://c.media-amazon.com/images/I/41zYuwNgi2L._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Mobile10',
        img: 'https://m.media-amazon.com/images/I/41gPGB5fW3L._SR480,440_.jpg',
        price: '10000',
        category: 'Mobiles',
    },
    {
        name: 'Appliances1',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/j/e/v/-original-imagz6qsdxsgzqfh.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances2',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/iron/j/r/k/vesta-lightweight-automatic-quick-heat-up-stylish-sleek-2-years-original-imaghj3zgssjhmg7.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances3',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/l/e/t/-original-imahy8dcqjzah4ae.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances4',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/n/t/t/centaur-55-1-table-fan-400-luminous-original-imah939yeepcvbyy.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances5',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/8/g/6/stainless-steel-water-filter-non-electric-long-ceramic-candle-1-original-imagpb69m5x9jbyr.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances6',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/m/7/c/-original-imahf5wfbdc7kzh7.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances7',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/8/k/o/regal-agaro-original-imah6ayhtf5a6ajm.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances8',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/f/t/h/ambrose-es-52-1-ceiling-fan-1200-havells-original-imagpfm5gyycdsph.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances9',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/room-heater/w/y/5/qh-4302-usha-820-original-imah8teapec3y32k.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances10',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/j/3/2/stand-82-58-1-pedestal-fan-400-orient-electric-original-imah2twdvyjzfg6s.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Fresh1',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh2',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81pku5wrK9L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh3',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81-J0Qwn50L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh4',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/71Iu8ORdJPL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh5',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh6',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51R11KxAfIL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh7',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61xrIAiNe9L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh8',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/91sjEAy2I4L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh9',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51LCAzhnmyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh10',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81VEKeJzb0L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Electronic1',
        img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic2',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Monitors._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic3',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Camera__Accessories._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic4',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Smartwatches._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic5',
        img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic6',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Monitors._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic7',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Camera__Accessories._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic8',
        img: 'https://c.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Smartwatches._SS400_QL85_.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic9',
        img: 'https://c.media-amazon.com/images/I/61H1dMNTSnL._AC._SR360,460.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'Electronic10',
        img: 'https://m.media-amazon.com/images/I/21r9AFAD6cL._AC._SR360,460.jpg',
        price: '1000',
        category: 'Electronics',
    },
    {
        name: 'SportAccessories1',
        img: 'https://m.media-amazon.com/images/I/51NKPZx0a6L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories2',
        img: 'https://c.media-amazon.com/images/I/51df0s6DzmL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories3',
        img: 'https://c.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories4',
        img: 'https://c.media-amazon.com/images/I/71LFB0J7Z4L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories5',
        img: 'https://c.media-amazon.com/images/I/61-n+ddVIHL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories6',
        img: 'https://m.media-amazon.com/images/I/51NKPZx0a6L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories7',
        img: 'https://c.media-amazon.com/images/I/51df0s6DzmL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories8',
        img: 'https://c.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories9',
        img: 'https://c.media-amazon.com/images/I/71LFB0J7Z4L._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'SportAccessories10',
        img: 'https://c.media-amazon.com/images/I/61-n+ddVIHL._AC_UL480_FMwebp_QL65_.jpg',
        price: '1000',
        category: 'Sports',
    },
    {
        name: 'Clothing1',
        img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing2',
        img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing3',
        img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing4',
        img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing5',
        img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing6',
        img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing7',
        img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing8',
        img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing9',
        img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing10',
        img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Computer1',
        img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer2',
        img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer3',
        img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer4',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer5',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer6',
        img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer7',
        img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer8',
        img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer9',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer10',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
];
const fresh = [
    {
        name: 'Fresh1',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh2',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81pku5wrK9L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh3',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81-J0Qwn50L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh4',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/71Iu8ORdJPL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh5',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh6',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51R11KxAfIL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh7',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61xrIAiNe9L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh8',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/91sjEAy2I4L.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh9',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51LCAzhnmyL.AC_SL240_.jpg',
        price: '100',
    },
    {
        name: 'Fresh10',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/81VEKeJzb0L.AC_SL240_.jpg',
        price: '100',
    },
]
const appliances = [
    {
        name: 'Appliances1',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/j/e/v/-original-imagz6qsdxsgzqfh.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances2',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/iron/j/r/k/vesta-lightweight-automatic-quick-heat-up-stylish-sleek-2-years-original-imaghj3zgssjhmg7.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances3',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/l/e/t/-original-imahy8dcqjzah4ae.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances4',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/n/t/t/centaur-55-1-table-fan-400-luminous-original-imah939yeepcvbyy.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances5',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/8/g/6/stainless-steel-water-filter-non-electric-long-ceramic-candle-1-original-imagpb69m5x9jbyr.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances6',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/m/7/c/-original-imahf5wfbdc7kzh7.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances7',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vacuum-cleaner/8/k/o/regal-agaro-original-imah6ayhtf5a6ajm.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances8',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/f/t/h/ambrose-es-52-1-ceiling-fan-1200-havells-original-imagpfm5gyycdsph.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances9',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/room-heater/w/y/5/qh-4302-usha-820-original-imah8teapec3y32k.jpeg?q=70',
        price: '1000'
    },
    {
        name: 'Appliances10',
        img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fan/j/3/2/stand-82-58-1-pedestal-fan-400-orient-electric-original-imah2twdvyjzfg6s.jpeg?q=70',
        price: '1000'
    },
]
const clothing = [
    {
        name: 'Clothing1',
        img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing2',
        img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing3',
        img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing4',
        img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing5',
        img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing6',
        img: 'https://m.media-amazon.com/images/I/81eVonPUBgL._SY879_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing7',
        img: 'https://c.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing8',
        img: 'https://c.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing9',
        img: 'https://c.media-amazon.com/images/I/61idJrfaIRL._SX569_.jpg',
        price: '1000',
    },
    {
        name: 'Clothing10',
        img: 'https://c.media-amazon.com/images/I/61nrBPX2ATL._SY741_.jpg',
        price: '1000',
    },
]
const computers = [
    {
        name: 'Computer1',
        img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer2',
        img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer3',
        img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer4',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer5',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer6',
        img: 'https://m.media-amazon.com/images/I/61IcdoVmZuL._AC_UL480_QL65_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer7',
        img: 'https://c.media-amazon.com/images/I/71jG+e7roXL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer8',
        img: 'https://c.media-amazon.com/images/I/71n4BPDmUNL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer9',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
    {
        name: 'Computer10',
        img: 'https://c.media-amazon.com/images/I/61cIUbIferL._AC_UL600_SR600,400_.jpg',
        price: '50000',
        category: 'Computers',
    },
]

const SearchListPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("query") || "";
    const category = searchParams.get("category") || "All";
    const { addCartBtnClicked } = useContext(CartContext);
    const {isLoginSuccessful} = useContext(CartContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let products = [];

        if (category === "All") {
            products = all.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else if (category === "Appliances") {
            products = appliances.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }else if (category === "Fresh") {
            products = fresh.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        else if (category === "Clothing") {
            products = clothing.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        else if (category === "Computers") {
            products = computers.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(products);
    }, [searchQuery, category]);
    const onAddToCart = (product) => {
        if(!isLoginSuccessful) {
            alert('Please login to add items to cart');
            return;
        }
        const uniqueId = `${product.id}-${Date.now()}`
        const productWithUniqueId = {...product, id: uniqueId}
        addCartBtnClicked(productWithUniqueId);
        alert('Item added to the cart')
    };

    return (
        <div className="page-wrapper">
            <div className="prof-con">
            {/* <div style={{'marginLeft': '-200px'}}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => <SearchItem key={product.id} data={product} />)
                ) : (
                    <p>No results found</p>
                )}
            </div> */}
                <div className="search-prod-container" style={{'marginLeft': '-400px'}}>
                    <div className="search-results">
                        <h4 className="search-para-1">Results</h4>
                        <div className="search-headphones-2">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <div key={index} className="search-headphone-box-3">
                                        <Link to='/product-page' state={{product}}>
                                            <img className="search-headphone-img-2" src={product.img} alt={product.name} />
                                            <p className='search-prod-para'>{product.name}</p>
                                            <p className='search-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                            <p className='search-prod-para-sm'>Free delivery by 9th Apr</p>
                                        </Link>
                                        <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                                    </div>
                                ))
                            ) : (<p>No results found</p>)
                        }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SearchListPage;
