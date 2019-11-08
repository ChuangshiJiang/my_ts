interface Square {
  kind: 'square';
  size: number
}

interface Rectangle {
  kind: '';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: 'number'
}

type Shape = Square | Rectangle | Circle;

function area(s:Shape) {
  switch (s.kind) {
    case 'square':
      
      break;
  
    default:
      break;
  }
}