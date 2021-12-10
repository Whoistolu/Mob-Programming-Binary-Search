function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
     let leftout = (x2 - x1) %  (v1 - v2)
     if (leftout == 0) {
         return "YES"
     }
 }
 return "NO"
}