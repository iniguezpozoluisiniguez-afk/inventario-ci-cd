import {useState,useEffect} from "react";
const API='http://localhost:3000/api/productos';
export default function App(){
  const [productos,setProductos]=useState([]);
  const [sku,setSku]=useState(''); const [nombre,setNombre]=useState('');
  useEffect(()=>{fetch(API).then(r=>r.json()).then(j=>setProductos(j.data||[]));},[]);
  const send=async(e)=>{e.preventDefault();const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sku,nombre})});if(r.ok){const j=await r.json();setProductos(p=>[...p,j.data]);setSku('');setNombre('');}};
  return(<div><h1>Inventario Web (Demo)</h1>
  <form onSubmit={send}><input value={sku} onChange={e=>setSku(e.target.value)}/>
  <input value={nombre} onChange={e=>setNombre(e.target.value)}/>
  <button>Crear</button></form>
  <ul>{productos.map(p=><li key={p.id}>{p.sku}-{p.nombre}</li>)}</ul></div>);
}