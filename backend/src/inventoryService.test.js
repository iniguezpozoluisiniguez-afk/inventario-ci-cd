const { crearProducto } = require('./inventoryService');
beforeEach(()=>{jest.resetModules();});
test('crea un producto válido', ()=>{
  const p = crearProducto({sku:'A-1',nombre:'Cable'});
  expect(p.id).toBe(1);
  expect(p.stock).toBe(0);
});
test('error si falta nombre', ()=>{
  expect(()=>crearProducto({sku:'A-2'})).toThrow();
});