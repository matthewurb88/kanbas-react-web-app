
    function FunctionParenthesisAndParameters(){
        const square  = (a: number) => a * a;
        const plusOne = (a: number) => a + 1;
        const twoSquared = square(2);
        const threePlusOne = plusOne(3);
    
    
    return (
      <>
       <h3>Parenthesis and Parameters</h3>
       twoSquared = {twoSquared}<br />
       square(2) = {twoSquared}<br />
      </>
     )
    }




export default FunctionParenthesisAndParameters