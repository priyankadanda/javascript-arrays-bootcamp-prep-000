var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (a,b)
{
  return [b,...a]
}
function destructivelyAddElementToBeginningOfArray (a,b)
{
  return a.unshift(b)
}
function addElementToEndOfArray (a,b)
{
  return [...a,b]
}
function destructivelyAddElementToEndOfArray (a,b)
{
return a.push(b)
}
function accessElementInArray (a,i)
{
  return a[i]
}
function destructivelyRemoveElementFromBeginningOfArray (a)
{
  a.shift();
  return a
}
function removeElementFromBeginningOfArray(a)
{
  return a.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(a)
{
  a.pop();
  return a
}
function removeElementFromEndOfArray(a)
{

}