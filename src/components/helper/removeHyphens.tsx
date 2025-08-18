import React, { useState } from "react";

function RemoveHyphens(props: any): any {
   var str: string = props;
    var newStr: string = str.replace(/-/g, " ");
    return newStr;
}

export default RemoveHyphens;
