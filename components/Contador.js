const Contador = () => {
  const [contador, setContador] = React.useState(0);
  // console.log(contador);
  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  return (
    <div>
      {/* cuando se usa una clase en React siempre se declara como className para evirar conflictos!!!! */}
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr />
      {/* en el caso de React se deben de poner los eventos de los objetos como se ve escito, con la mayusucla despues del on */}
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
