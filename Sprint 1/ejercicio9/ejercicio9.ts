const order = elements => {
    const order2 = elements.length;
    for (let i = 0; i < order2; i++ ) {
      for (let j = 0; j < order2 - 1 - i; j++ ) {
        if ( elements[j] > elements[j+1] ) {
          [ elements[j], elements[j+1] ] = [elements[j + 1], elements[j]];
        }
      }
    }
  
    return elements;
  };
  
  const elements = [ 'zamora','ave', 'siniestro', 'luchador', 'gato', 'coche', 'ordenador', 'flutter'];
  const final = order(elements);
  console.log(result);
  