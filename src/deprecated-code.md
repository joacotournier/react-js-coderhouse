const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    counter > 0 && setCounter(counter - 1);
  };

<button onClick={sumar}>MÁS</button>
<button onClick={restar}>MENOS</button>

<p>{counter}</p>


//  try { const data = await getList(list, 2000); setItems(data); setLoading(false); catch (e) { console. log(e);
  return (
    <>
    <header>
      <h1>{props.heading}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      </header>
    </>
  );

 const data = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${props.heading}`)

---

const promesa = new Promise ((res, ref) => {
setTimeout(() =>
res(productosIniciales)
}, 3000)

promesa
then( (respuestaDeLaApi) n
setProductos(productosIniciales)
• catch( (errorDelaApi) Cy
console.log(errorDeLaApi)
. finally(() => {
setLoading(false)