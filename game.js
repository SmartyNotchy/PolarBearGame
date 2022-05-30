class Hitbox {
  constructor(x1, y1, x2, y2) {
    // x1, y1 is the topleft corner
    // x2, y2 is the bottomright corner
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  
  isTouchingPoint(x, y) {
    return ((x > this.x1) && (y > this.y1) && (x < this.x2) && (y < this.y2));
  }
  
  isTouching(other) {
    return ((this.isTouchingPoint(other.x1, other.y1)) || (this.isTouchingPoint(other.x1, other.y2))
            || (this.isTouchingPoint(other.x2, other.y1)) || (this.isTouchingPoint(other.x2, other.y2)));
  }
}
    
