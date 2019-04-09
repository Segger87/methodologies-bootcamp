import React from "react";
import styled from "styled-components";
const AccountLink = () => {
    return (
        <AccountLinkSC>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g fill="#303030" id="Icons">
                    <path d="M23.99976,26.76416c4.19824,0,7.61377-3.41504,7.61377-7.61328S28.198,11.5376,23.99976,11.5376 s-7.61377,3.41504-7.61377,7.61328S19.80151,26.76416,23.99976,26.76416z M24.46362,13.37549 c0.18945,0.03711,0.3125,0.22168,0.2749,0.41113c-0.03809,0.19043-0.22461,0.31348-0.41162,0.27441 c-2.23682-0.44336-4.41553,1.00977-4.86182,3.24414c-0.0332,0.16699-0.1792,0.28125-0.34277,0.28125 c-0.02295,0-0.0459-0.00195-0.06885-0.00684c-0.18994-0.03711-0.3125-0.22168-0.2749-0.41113 C19.30054,14.55518,21.84888,12.8501,24.46362,13.37549z M18.63354,18.64893c0.021-0.19141,0.19531-0.3418,0.38574-0.30957 c0.19189,0.02051,0.33105,0.19336,0.31055,0.38477c-0.02832,0.26074-0.08398,1.00684-0.00732,1.33203 c0.04395,0.1875-0.07227,0.37598-0.26074,0.4209c-0.02686,0.00586-0.05371,0.00879-0.08057,0.00879 c-0.15869,0-0.30225-0.1084-0.34033-0.26953C18.52319,19.71631,18.62183,18.75732,18.63354,18.64893z" />
                    <path d="M29.38599,28.69189H18.61353c-4.09229,0-7.42188,3.3291-7.42188,7.4209 c0,0.19336,0.15674,0.34961,0.3501,0.34961c0.00189,0,0.00348-0.0011,0.00537-0.0011s0.00348,0.0011,0.00537,0.0011h24.88379 c0.00391,0,0.00714-0.00208,0.01099-0.0022c0.00385,0.00012,0.00708,0.0022,0.01099,0.0022 c0.19336,0,0.3501-0.15625,0.3501-0.34961C36.80835,32.021,33.47876,28.69189,29.38599,28.69189z" />
                </g>
            </svg>
        </AccountLinkSC>
    );
};

const AccountLinkSC = styled.div`
    height: 100px;
    width: 200px;
`;

export default AccountLink;