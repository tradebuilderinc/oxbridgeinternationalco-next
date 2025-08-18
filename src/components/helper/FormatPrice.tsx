import React, { useState } from "react";

function FormatPrice(props: any) {

  function currencyFormat(num: any) {
    if (num == undefined || num == 0) {
      return "$ 0.00";
    } else {
      return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }

  return <> {currencyFormat(props.price)}</>;
}

export default FormatPrice;
