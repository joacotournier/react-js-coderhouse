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