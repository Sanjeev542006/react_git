import React from 'react'

const List1 = () => {
    const arr1 =[];
    // const arr2 =[];
    // let x=0;
    for(let i=144;i<=210;i++){
        arr1[i]="727723EUIT"+i;
        // x++;
    }
    return (
        <div>
        <ul type="circle">
            <li>727723EUIT122</li>
                {
                    // arr1.map(0);
                    arr1.map((a,b)=>(
                        <li Key={b}>{a}</li>
                    ))}
                    <li>727723EUIT217</li>
        </ul>
    </div>
  )
}

export default List1