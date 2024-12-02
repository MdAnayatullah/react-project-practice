// import React, { useState } from "react";
// import Input from "./Input";
// import useCurrencyInfo from "../hooks/useCurrencyInfo";

// function CurrencyConverter() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertAmount, setConvertAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from);

//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertAmount(amount);
//     setAmount(convertAmount);
//   };

//   const convert = () => {
//     setConvertAmount(amount * currencyInfo[to]);
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <Input
//                 label="From"
//                 amount={amount}
//                 currencyOption={options}
//                 onCurrencyChange={(currency) => setAmount(amount)}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <Input
//                 label="To"
//                 amount={convertAmount}
//                 currencyOption={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CurrencyConverter;

import React, { useState } from "react";
import Input from "./Input";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    setConvertAmount(rate ? amount * rate : 0);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Input */}
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(newAmount) => setAmount(newAmount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To Input */}
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to} /* Corrected this to 'to' */
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
