"use client";

import { useMemo, useState } from "react";

const products = [
  {id:1,name:"Urban Runner Sneakers",category:"Shoes",price:7490,colors:["Black","White","Grey"],sizes:["39","40","41","42","43","44","45"],tag:"NEW DROP",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=85"},
  {id:2,name:"Classic Court Sneakers",category:"Shoes",price:6290,colors:["White","Black"],sizes:["39","40","41","42","43","44"],tag:"BESTSELLER",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=85"},
  {id:3,name:"Relaxed Baggy Denim",category:"Jeans",price:5890,colors:["Blue","Black","Light Blue"],sizes:["28","30","32","34","36"],tag:"TRENDING",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=85"},
  {id:4,name:"Wide-Leg Black Jeans",category:"Jeans",price:5490,colors:["Black","Blue"],sizes:["28","30","32","34","36"],tag:"NEW",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&q=85"},
  {id:5,name:"Everyday Cargo Pants",category:"Pants",price:4990,colors:["Black","Olive","Beige"],sizes:["S","M","L","XL","XXL"],tag:"POPULAR",image:"https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=85"},
  {id:6,name:"Relaxed Fit Trousers",category:"Pants",price:4590,colors:["Black","Grey","Beige"],sizes:["S","M","L","XL","XXL"],tag:"ESSENTIAL",image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=85"},
  {id:7,name:"Oversized Street Shirt",category:"Shirts",price:3290,colors:["White","Black","Blue"],sizes:["S","M","L","XL","XXL"],tag:"NEW DROP",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85"},
  {id:8,name:"Everyday Premium Tee",category:"Shirts",price:2190,colors:["White","Black","Blue"],sizes:["S","M","L","XL","XXL"],tag:"ESSENTIAL",image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&q=85"},
  {id:9,name:"Winter Puffer Jacket",category:"Jackets",price:9990,colors:["Black","Grey","Beige"],sizes:["S","M","L","XL"],tag:"WINTER 26",image:"https://images.unsplash.com/photo-1544923246-77307dd654cb?w=900&q=85"},
  {id:10,name:"Classic Long Coat",category:"Jackets",price:11990,colors:["Black","Camel"],sizes:["S","M","L","XL"],tag:"WINTER 26",image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=85"},
  {id:11,name:"Comfort Fleece Hoodie",category:"Hoodies",price:4290,colors:["Black","White","Grey"],sizes:["S","M","L","XL","XXL"],tag:"POPULAR",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=85"},
  {id:12,name:"Minimal Slide Slippers",category:"Footwear",price:1890,colors:["Black","White"],sizes:["39","40","41","42","43","44"],tag:"DAILY WEAR",image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?w=900&q=85"}
];

const categories = ["All","Shoes","Jeans","Pants","Shirts","Jackets","Hoodies","Footwear"];
const money = (n) => "Rs. " + n.toLocaleString("en-PK");

export default function Home() {
  const [category,setCategory] = useState("All");
  const [query,setQuery] = useState("");
  const [cart,setCart] = useState([]);
  const [selected,setSelected] = useState(null);
  const visible = useMemo(() => products.filter(p => (category==="All" || p.category===category) && p.name.toLowerCase().includes(query.toLowerCase())),[category,query]);
  const addToCart = (p) => setCart(old => [...old,p]);
  return (
    <main>
      <div className="announcement">NEW SEASON COLLECTION · FREE DELIVERY ON ORDERS ABOVE RS. 10,000</div>
      <header className="nav">
        <a className="brand" href="#">NORTHORA<span>®</span><small>WEAR YOUR STYLE.</small></a>
        <nav><a href="#collection">Collection</a><a href="#about">Our Story</a><a href="#contact">Contact</a></nav>
        <button className="cart" onClick={()=>document.getElementById("collection").scrollIntoView({behavior:"smooth"})}>BAG ({cart.length})</button>
      </header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">THE NEW STANDARD · 2026</p><h1>STYLE THAT<br/><em>STAYS</em> WITH YOU.</h1><p className="hero-desc">Everyday essentials. Confident fits. Made for your next move.</p><a className="light-btn" href="#collection">EXPLORE COLLECTION <span>↗</span></a></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1500&q=90" alt="Modern streetwear fashion editorial"/><div className="image-note">NORTHORA / NEW SEASON</div></div>
        <div className="hero-index">01 — 03</div>
      </section>
      <section className="ticker"><span>BUILT FOR EVERYDAY</span><b>✳</b><span>OWN YOUR LOOK</span><b>✳</b><span>MOVE DIFFERENT</span><b>✳</b><span>BUILT FOR EVERYDAY</span></section>
      <section className="collection" id="collection">
        <div className="section-head"><div><p className="eyebrow dark">CURATED FOR YOU</p><h2>THE COLLECTION<span>.</span></h2></div><p className="muted">Fresh fits for every day.<br/>Find your signature look.</p></div>
        <div className="toolbar"><div className="filters">{categories.map(c=><button key={c} className={category===c?"filter active":"filter"} onClick={()=>setCategory(c)}>{c}</button>)}</div><input aria-label="Search products" placeholder="Search the collection..." value={query} onChange={e=>setQuery(e.target.value)}/></div>
        <div className="products">{visible.map(p=><article className="product" key={p.id}><button className="product-image" onClick={()=>setSelected(p)}><img src={p.image} alt={p.name}/><span className="tag">{p.tag}</span><span className="quick">QUICK VIEW ↗</span></button><div className="product-info"><div><h3>{p.name}</h3><p>{p.category} · {p.colors.join(" / ")}</p></div><strong>{money(p.price)}</strong></div><button className="add" onClick={()=>addToCart(p)}>ADD TO BAG <span>+</span></button></article>)}</div>
        {visible.length===0 && <p className="empty">No products found. Try another search.</p>}
      </section>
      <section className="statement" id="about"><p className="eyebrow">LESS NOISE. MORE STYLE.</p><h2>GOOD STYLE IS<br/>ALWAYS <em>PERSONAL.</em></h2><p>NORTHORA brings together modern silhouettes, versatile layers and everyday footwear — selected to make getting dressed feel effortless.</p><a href="#collection">FIND YOUR FIT ↗</a></section>
      <footer id="contact"><div className="footer-brand">NORTHORA<span>®</span><small>WEAR YOUR STYLE.</small></div><div><p className="eyebrow">GET IN TOUCH</p><p>Questions about sizes, colors or an order?</p><a href="mailto:hello@northora.store">hello@northora.store</a></div><div className="footer-bottom">© 2026 NORTHORA. ALL RIGHTS RESERVED. <span>MADE FOR YOUR EVERYDAY.</span></div></footer>
      {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}>×</button><img src={selected.image} alt={selected.name}/><div><p className="eyebrow dark">{selected.tag}</p><h2>{selected.name}</h2><strong>{money(selected.price)}</strong><p>Available colors: {selected.colors.join(", ")}</p><p>Available sizes: {selected.sizes.join(", ")}</p><button className="modal-add" onClick={()=>{addToCart(selected);setSelected(null)}}>ADD TO BAG +</button></div></div></div>}
    </main>
  );
}
